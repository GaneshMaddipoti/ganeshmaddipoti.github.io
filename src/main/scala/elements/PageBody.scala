package elements

import org.scalajs.dom.HTMLElement
import utils.HtmlElementUtil.div
import extensions.HtmlElementExtension.*
import utils.Constants.*

object PageBody {
  val pageBody: HTMLElement = div
    .uid("pageBody")
    .styles(
      "position" -> "absolute",
      "width" -> "6000px",
      "height" -> "6000px",
      "background-color" -> PAGE_BG_COLOR,
      "overflow" -> "hidden"
    )
}
