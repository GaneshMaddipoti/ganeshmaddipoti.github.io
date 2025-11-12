package elements

import config.Cache.{scrollLeft, scrollTop}
import extensions.HtmlElementExtension.*
import models.GraphElement
import org.scalajs.dom
import org.scalajs.dom.{HTMLElement, MouseEvent}
import utils.Constants.*
import utils.HtmlElementUtil.div

case class TextBox(override val model: GraphElement) extends AbstractElement(model) {
  override lazy val content: Option[HTMLElement] = Some(
    div
      .styles(
        "background-color" -> PAGE_BG_COLOR,
        "width"            -> "100%",
        "height"           -> "100%",
        "font-size"        -> "20px",
        "white-space"      -> "pre-wrap",
        "word-break"       -> "break-word",
        "overflow-wrap"    -> "break-word",
        "box-sizing"       -> "border-box",
        "overflow"         -> "auto",
        "outline"          -> "none",
        "align-items"      -> "center",
        "justify-content"  -> "center",
        "text-align"       -> "center",
        "display"          -> "grid",
        "position"         -> "relative"
      )
      .itext(model.text)
  )
  clickable() // highlight and resize
  resizable()
  editable()
  draggable()
  contextMenu()
  connectable()
}

object TextBox {
  def TextBoxModel(e: MouseEvent, parent: Option[AbstractElement]): GraphElement =
    GraphElement(
      id = s"$TEXT-${System.currentTimeMillis()}",
      x = scrollLeft + e.clientX - (if parent.isDefined then parent.get.offsetX else 0) - 50,
      y = scrollTop + e.clientY - (if parent.isDefined then parent.get.offsetY else 0) - 25,
      width = 100,
      height = 30,
      text = TEXT,
      bgColor = PAGE_BG_COLOR
    )
}
