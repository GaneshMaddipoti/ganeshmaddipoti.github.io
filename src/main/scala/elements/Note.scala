package elements

import config.Cache.{scrollLeft, scrollTop}
import models.GraphElement
import utils.HtmlElementUtil.*
import utils.Constants.*
import extensions.HtmlElementExtension.*
import org.scalajs.dom.{HTMLElement, MouseEvent}

case class Note(override val model: GraphElement) extends AbstractElement(model) {
  override lazy val content: Option[HTMLElement] = Some(
    div
      .styles(
        "width"           -> "100%",
        "height"          -> "100%",
        "padding"         -> "10px",
        "font-size"       -> "16px",
        "white-space"     -> "pre-wrap",
        "word-break"      -> "break-word",
        "overflow-wrap"   -> "break-word",
        "overflow"        -> "auto",
        "box-sizing"      -> "border-box",
        "outline"         -> "none",
        "align-items"     -> "left",
        "justify-content" -> "left",
        "text-align"      -> "left",
        "display"         -> "grid",
        "position"        -> "relative"
      )
      .ihtml(model.text)
  )
  clickable() // highlight and resize
  resizable()
  editable()
  draggable()
  contextMenu()
  connectable()
}

object Note {
  def NoteModel(e: MouseEvent, parent: Option[AbstractElement]): GraphElement =
    GraphElement(
      id = s"$NOTE-${System.currentTimeMillis()}",
      x = scrollLeft + e.clientX - (if parent.isDefined then parent.get.offsetX else 0) - 50,
      y = scrollTop + e.clientY - (if parent.isDefined then parent.get.offsetY else 0) - 25,
      width = 150,
      height = 100,
      text = NOTE,
      bgColor = "wheat"
    )
}
