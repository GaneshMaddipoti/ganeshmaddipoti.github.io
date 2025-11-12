package elements

import config.Cache.*
import elements.AbstractElement.isElementHidden
import extensions.HtmlElementExtension.*
import models.GraphElement
import org.scalajs.dom
import org.scalajs.dom.*
import utils.Constants.*
import utils.HtmlElementUtil.div

abstract class AbstractElement(val model: GraphElement) {

  var parent: Option[AbstractElement]              = None
  lazy val content: Option[HTMLElement]            = None
  lazy val element: Option[HTMLElement]            = Some(
    div
      .uid(model.id)
      .styles(
        "position"         -> "absolute",
        "width"            -> s"${model.width}px",
        "height"           -> s"${model.height}px",
        "cursor"           -> "pointer",
        "left"             -> s"${model.x}px",
        "top"              -> s"${model.y}px",
        "box-shadow"       -> "0px 0px 2px rgba(0,0,0,0.2)",
        "border-radius"    -> "8px",
        "outline"          -> "none",
//        "padding"          -> "2px",
        "resize"           -> "none",
        "overflow"         -> "auto",
        "display"          -> "flex",
        "align-items"      -> "center",
        "justify-content"  -> "center",
        "background-color" -> s"${model.bgColor}"
      )
      .appends(List(content.get))
  )
  var path: Option[LeaderLine]                     = None
  private var observer: Option[dom.ResizeObserver] = None

  def format: String  = model.id.split("-").headOption.getOrElse("")
  def offsetX: Double = element.get.offsetLeft
  def offsetY: Double = element.get.offsetTop

  def east: Double  = model.x + model.width
  def west: Double  = model.x
  def north: Double = model.y
  def south: Double = model.y + model.height

  def southElements: List[AbstractElement] = stateMap.values.filter(element => element.north >= south).toList
  def northElements: List[AbstractElement] = stateMap.values.filter(element => element.south <= north).toList

  def connectable(): Unit = {
    element.get.mhover(_ => if pathFlag then element.get.styles("cursor" -> "crosshair"))
    element.get.mout(_ => element.get.styles("cursor" -> "pointer"))
    element.get.mdown { _ =>
      if pathFlag then pathStartElement = Some(this)
      else element.foreach(_.attrs("draggable" -> "true"))
    }
    element.get.mup { (e: MouseEvent) =>
      element.foreach(_.attrs("draggable" -> "false"))
      if pathFlag then {
        if pathStartElement.isDefined then {
          if pathStartElement.get != this then {
            val path = Path(pathStartElement.get, this)
            path.createPath()
            addToState(path)
            pathStartElement = None
            pathFlag = false
          }
        }
      }
    }
  }

  def clickable(): Unit =
    element.foreach(_.mclick { (e: MouseEvent) =>
      selectedElement.foreach(_.unHighLight())
      selectedElement = Some(this)
      selectedElement.get.highLight()
      e.stopPropagation()
    })

  def editable(): Unit =
    content.foreach(_.editableOnDblClick { newText =>
      model.text = newText
    })

  def resizable(): Unit = element.foreach { el =>
    observer = Some(
      new dom.ResizeObserver((entries, _) =>
        entries.foreach { entry =>
          if (entry.target == element.orNull) {
            val dx = entry.contentRect.width - model.width
            val dy = entry.contentRect.height - model.height
            model.width = entry.contentRect.width
            model.height = entry.contentRect.height
            updatePaths()
          }
        }
      )
    )
    observer.foreach(_.observe(el))
  }

  def adjustFontSize(dx: Double, dy: Double): Unit = {
    if dx < 0 || dy < 0 then {
      while (content.get.scrollHeight > (element.get.clientHeight - 10)) {
        val fontSize = content.get.style.fontSize.split("px").head.toDouble
        content.get.style.fontSize = (fontSize - 1).toString + "px"
      }
    } else {
      while (content.get.scrollHeight <= (element.get.clientHeight - 10))
        val fontSize = content.get.style.fontSize.split("px").head.toDouble
        content.get.style.fontSize = (fontSize + 1).toString + "px"
    }
    while (content.get.scrollHeight > (element.get.clientHeight - 10)) {
      val fontSize = content.get.style.fontSize.split("px").head.toDouble
      content.get.style.fontSize = (fontSize - 1).toString + "px"
    }
  }

  def draggable(): Unit =
    element.foreach(_.dragStart { e =>
      e.dataTransfer.effectAllowed = DataTransferEffectAllowedKind.move
      e.dataTransfer.setData("text/plain", model.id)
      initialX = e.clientX
      initialY = e.clientY
      e.stopPropagation()
    })

  def droppable(): Unit = {
    content.get.addEventListener("dragover", (e: DragEvent) => e.preventDefault())
    content.get.addEventListener(
      "dragenter",
      (e: DragEvent) => {
        e.preventDefault()
        val id               = e.dataTransfer.getData("text/plain")
        val draggableElement = stateMap.get(id).orNull
        if draggableElement != null && draggableElement.model.id != model.id then
          element.get.style.setProperty("border", s"2px dashed $APP_COLOR")
      }
    )
    content.get.addEventListener("dragleave", (e: DragEvent) => element.get.style.removeProperty("border"))
    content.get.addEventListener(
      "drop",
      (e: DragEvent) => {
        e.preventDefault()
        element.foreach(_.attrs("draggable" -> "false"))
        val id               = e.dataTransfer.getData("text/plain")
        val draggableElement = stateMap.get(id).orNull
        if draggableElement != null then
          if draggableElement.model.id == model.id || (draggableElement.parent.isDefined && draggableElement.parent.get == this)
          then {
            draggableElement.setOrigin(
              draggableElement.model.x + e.clientX - initialX,
              draggableElement.model.y + e.clientY - initialY
            )
          } else
            draggableElement.setOrigin(50, 50)
            content.get.appendChild(draggableElement.element.get)
            state -= draggableElement.model
            model.elements += draggableElement.model
            draggableElement.parent = Some(this)
        e.stopPropagation()
      }
    )
  }

  def contextMenu(): Unit =
    element.foreach(_.onContextMenu { (e: MouseEvent) =>
      ContextMenu.render(e, Some(this))
    })

  def highLight(): Unit = {
    element.foreach(_.styles("border" -> s"1px solid $APP_COLOR"))
    element.foreach(_.styles("resize" -> "both"))
  }

  def unHighLight(): Unit = {
    element.foreach(_.styles("border" -> "none"))
    element.foreach(_.styles("resize" -> "none"))
  }

  def remove(): Unit =
    observer.foreach(_.disconnect())
    model.format match {
      case CONTAINER => model.elements.foreach(melement => stateMap(melement.id).remove())
      case _         => None
    }
    parent match {
      case Some(p) =>
        p.content.foreach(_.removeChild(element.orNull))
        p.model.elements -= model
      case _       =>
        model.format match {
          case PATH_FORMAT => path.get.remove()
          case _           => document.body.removeChild(element.orNull)
        }
    }
    removePaths()
    removeFromState(this)

  def removePaths(): Unit =
    stateMap.values.foreach {
      case p: Path =>
        if p.model.sElement.equals(model.id) || p.model.eElement.equals(model.id) then {
          p.path.get.remove()
          removeFromState(p)
        }
      case _       => None
    }

  def setOrigin(x1: Double, y1: Double): Unit = {
    model.x = x1
    model.y = y1
    element.foreach(_.styles("left" -> s"${model.x}px", "top" -> s"${model.y}px"))
    updatePaths()
  }

  private def updatePaths(): Unit =
    model.format match {
      case CONTAINER =>
        model.elements.foreach { melement =>
          val element = stateMap(melement.id)
          if isElementHidden(element, this) then element.hidePaths()
          else showPaths(element, this)
        }
      case _         =>
    }
    stateMap.foreach(element =>
      element._2 match {
        case p: Path => p.path.get.position()
        case _       =>
      }
    )

  private def showPaths(element: AbstractElement, container: AbstractElement): Unit =
    stateMap.foreach(path =>
      path._2 match {
        case p: Path =>
          if p.model.sElement == element.model.id && stateMap.contains(p.model.eElement) &&
            !isElementHidden(stateMap(p.model.eElement), container)
          then p.path.get.show()
          if p.model.eElement == element.model.id && stateMap.contains(p.model.sElement) &&
            !isElementHidden(stateMap(p.model.sElement), container)
          then p.path.get.show()
        case _       =>
      }
    )

  private def hidePaths(): Unit =
    stateMap.foreach(path =>
      path._2 match {
        case p: Path =>
          if p.model.sElement == model.id || p.model.eElement == model.id then p.path.get.hide()
        case _       =>
      }
    )
}

object AbstractElement {

  def addElement(model: GraphElement, parent: Option[AbstractElement]): Unit = {
    val abElement: AbstractElement = model.format match {
      case CONTAINER    => Container(model)
      case TEXT         => TextBox(model)
      case NODE         => NodeX(model)
      case DIVIDER      => Divider(model)
      case CODE_FORMAT  => Code(model)
      case IMAGE_FORMAT => ImageX(model)
      case NOTE         => Note(model)
      case _            => TextBox(model)
    }
    if parent.isDefined then {
      parent.get.content.foreach(_.appendChild(abElement.element.orNull))
      abElement.parent = parent
      if !parent.get.model.elements.contains(abElement.model) then parent.get.model.elements += abElement.model
    } else {
      document.body.appendChild(abElement.element.orNull)
      state += abElement.model
    }
    stateMap += (abElement.model.id -> abElement)
  }

  def addPath(model: GraphElement): Unit = {
    val path: Path = Path(model)
    path.createPath()
    state += model
    stateMap += (path.model.id -> path)
  }

  private def isElementHidden(element: AbstractElement, container: AbstractElement): Boolean =
    if element.parent.isDefined && element.parent.get == container then
      val elemRect = element.element.get.getBoundingClientRect()
      val contRect = container.element.get.getBoundingClientRect()
      elemRect.left >= contRect.right ||
      elemRect.top >= contRect.bottom
    else false
}
