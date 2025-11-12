import config.Cache.*
import elements.ContextMenu
import extensions.DocumentExtension.*
import extensions.HtmlElementExtension.{attrs, dragover, drop}
import utils.Constants.*
import org.scalajs.dom
import org.scalajs.dom.{DragEvent, KeyboardEvent, MouseEvent, document}

object Main {
  def main(args: Array[String]): Unit = {
    document
      .onContentLoad { () =>
        document.body.appendChild(pageBody)
      }
      .onContextMenu { (e: MouseEvent) =>
        ContextMenu.render(e, None)
      }
      .mclick { (e: MouseEvent) =>
        ContextMenu.remove()
        selectedElement.foreach(_.unHighLight())
        selectedElement = None
      }
    pageBody.dragover((e: DragEvent) => e.preventDefault())
    pageBody.drop { (e: DragEvent) =>
      e.preventDefault()
      val id               = e.dataTransfer.getData("text/plain")
      val draggableElement = stateMap.get(id).orNull
      if (draggableElement != null) {
        draggableElement.element.get.attrs("draggable" -> "false")
        val dx = e.clientX - initialX
        val dy = e.clientY - initialY
        draggableElement
          .setOrigin(draggableElement.model.x + dx, draggableElement.model.y + dy)
        if dy > 0 && draggableElement.format.equals(DIVIDER) then {
          draggableElement.southElements
            .foreach(element => element.setOrigin(element.model.x, element.model.y + dy))
        } 
      }
    }
    document.kdown((e: dom.KeyboardEvent) =>
      if (e.key == "Shift") {
        pageBody.style.setProperty("cursor", "crosshair")
        pathFlag = true
      }
    )
    document.kup((e: dom.KeyboardEvent) =>
      if (e.key == "Shift") {
        pageBody.style.setProperty("cursor", "default")
        pathFlag = false
      }
    )
    document.kdown((e: dom.KeyboardEvent) =>
      if ((e.key == "s" || e.key == "S") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        saveState()
      }
    )
    document.kdown((e: KeyboardEvent) =>
      if ((e.key == "o" || e.key == "O") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        loadState()
      }
    )
  }
}
