package elements

import config.Cache.{draggedElement, scrollLeft, scrollTop}
import extensions.HtmlElementExtension.*
import models.GraphElement
import org.scalajs.dom.{HTMLElement, MouseEvent}
import utils.Constants.{DIVIDER, ELEMENT_BG_COLOR, NODE}
import utils.HtmlElementUtil.div

case class Divider(override val model: GraphElement) extends AbstractElement(model) {
  override lazy val content: Option[HTMLElement] = Some(
    div
      .styles(
        "width"           -> "100%",
        "height"          -> "100%",
        "font-size"       -> "16px",
        "white-space"     -> "pre-wrap",
        "word-break"      -> "break-word",
        "overflow-wrap"   -> "break-word",
        "box-sizing"      -> "border-box",
        "overflow"        -> "auto",
        "outline"         -> "none",
        "align-items"     -> "center",
        "justify-content" -> "center",
        "text-align"      -> "center",
        "display"         -> "grid",
        "position"        -> "relative"
      )
  )
  clickable() // highlight and resize
  resizable()
  draggable()
  contextMenu()
  connectable()
}

object Divider {
  def DividerModel(e: MouseEvent, parent: Option[AbstractElement]): GraphElement =
    GraphElement(
      id = s"$DIVIDER-${System.currentTimeMillis()}",
      x = scrollLeft + e.clientX - (if parent.isDefined then parent.get.offsetX else 0) - 50,
      y = scrollTop + e.clientY - (if parent.isDefined then parent.get.offsetY else 0) - 25,
      width = 1000,
      height = 10,
      text = DIVIDER,
      bgColor = ELEMENT_BG_COLOR
    )
}
