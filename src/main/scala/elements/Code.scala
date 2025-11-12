package elements

import config.Cache.{scrollLeft, scrollTop}
import extensions.HtmlElementExtension.*
import models.GraphElement
import org.scalajs.dom.{HTMLElement, MouseEvent}
import utils.Constants.{CODE_BG_COLOR, CODE_FORMAT}
import utils.HtmlElementUtil.*

case class Code(override val model: GraphElement) extends AbstractElement(model) {
  override lazy val content: Option[HTMLElement] = Some(
    div
      .styles(
        "width"           -> "100%",
        "height"          -> "100%",
        "padding"         -> "10px",
        "font-size"       -> "18px",
        "color"           -> "#eee",
        "white-space"     -> "pre-wrap",
        "word-break"      -> "break-word",
        "overflow-wrap"   -> "break-word",
        "box-sizing"      -> "border-box",
        "overflow"        -> "auto",
        "outline"         -> "none",
        "align-items"     -> "left",
        "justify-content" -> "left",
        "text-align"      -> "left",
        "display"         -> "grid",
        "position"        -> "relative"
      )
      .append1(pre.append1(code.addClass("language-python").ihtml(model.text)))
  )
  clickable() // highlight and resize
  resizable()
  editable()
  draggable()
  contextMenu()
  connectable()
}

object Code {
  def CodeModel(e: MouseEvent, parent: Option[AbstractElement]): GraphElement =
    GraphElement(
      id = s"$CODE_FORMAT-${System.currentTimeMillis()}",
      x = scrollLeft + e.clientX - (if parent.isDefined then parent.get.offsetX else 0) - 50,
      y = scrollTop + e.clientY - (if parent.isDefined then parent.get.offsetY else 0) - 25,
      width = 150,
      height = 50,
      text = CODE_FORMAT,
      bgColor = CODE_BG_COLOR
    )
}
