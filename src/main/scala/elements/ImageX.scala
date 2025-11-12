package elements

import config.Cache.{scrollLeft, scrollTop}
import extensions.HtmlElementExtension.*
import models.GraphElement
import org.scalajs.dom.{HTMLElement, MouseEvent, window}
import utils.Constants.{ELEMENT_BG_COLOR, IMAGE_FORMAT}
import utils.HtmlElementUtil.*

case class ImageX(override val model: GraphElement) extends AbstractElement(model) {
  override lazy val content: Option[HTMLElement] = Some(
    img
      .attrs(
        "src" -> model.imagePath,
        "draggable" -> "false",
        "title" -> model.text)
      .styles(
        "width"    -> "100%",
        "height"   -> "100%",
        "position" -> "relative"
      )
  )
  content.get.mdblclick { (e: MouseEvent) =>
    val newPath = window.prompt("Enter image URL", model.imagePath)
    if (newPath != null && newPath.nonEmpty) {
      model.imagePath = newPath
      content.asInstanceOf[org.scalajs.dom.html.Image].src = newPath
    }
    e.stopPropagation()
  }
  clickable() // highlight
  resizable()
  draggable()
  contextMenu()
  connectable()
}

object ImageX {
  def ImageModel(e: MouseEvent, parent: Option[AbstractElement]): GraphElement =
    GraphElement(
      id = s"$IMAGE_FORMAT-${System.currentTimeMillis()}",
      x = scrollLeft + e.clientX - (if parent.isDefined then parent.get.offsetX else 0) - 50,
      y = scrollTop + e.clientY - (if parent.isDefined then parent.get.offsetY else 0) - 25,
      width = 150,
      height = 100,
      imagePath = "./images/image-holder.svg",
      bgColor = ELEMENT_BG_COLOR
    )
}
