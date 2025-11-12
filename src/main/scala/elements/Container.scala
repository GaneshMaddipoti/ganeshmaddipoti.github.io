package elements

import config.Cache.{scrollLeft, scrollTop}
import extensions.HtmlElementExtension.styles
import models.GraphElement
import org.scalajs.dom.{HTMLElement, MouseEvent}
import utils.Constants.{CONTAINER, ELEMENT_BG_COLOR, PAGE_BG_COLOR}
import utils.HtmlElementUtil.div

case class Container(override val model: GraphElement) extends AbstractElement(model) {
  override lazy val content: Option[HTMLElement] = Some(
    div.styles(
      "width"            -> "100%",
      "height"           -> "100%",
      "font-size"        -> "14px",
      "background-color" -> PAGE_BG_COLOR,
      "box-sizing"       -> "border-box",
      "outline"          -> "none",
      "align-items"      -> "center",
      "justify-content"  -> "center",
      "text-align"       -> "center",
      "display"          -> "grid",
      "position"         -> "relative"
    )
  )
  clickable()
  resizable()
  draggable()
  droppable()
  contextMenu()
  connectable()
}

object Container {
  def ContainerModel(e: MouseEvent, parent: Option[AbstractElement]): GraphElement =
    GraphElement(
      id = s"$CONTAINER-${System.currentTimeMillis()}",
      x = scrollLeft + e.clientX - (if parent.isDefined then parent.get.offsetX else 0) - 50,
      y = scrollTop + e.clientY - (if parent.isDefined then parent.get.offsetY else 0) - 25,
      width = 150,
      height = 100,
      bgColor = ELEMENT_BG_COLOR
    )
}
