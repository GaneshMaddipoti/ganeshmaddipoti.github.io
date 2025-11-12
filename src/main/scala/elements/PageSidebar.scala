package elements

import utils.HtmlElementUtil.{div, img, span}
import extensions.HtmlElementExtension.*
import utils.Constants.GREEN_COLOR


object PageSidebar {

  val logo = img.styles(
    "width" -> "50%",
  ).attrs("src" -> "./images/favicon.svg")

  val title = span.styles(
    "color" -> GREEN_COLOR,
    "font-size" -> "20px",
    "font-weight" -> "bold"
  ).itext("Schemabot")

  val sidebar = div.styles(
    "position" -> "fixed",
    "width" -> "150px",
    "height" -> "100%",
    "background-color" -> "#222",
    "box-sizing" -> "border-box",
    "overflow" -> "auto",
    "text-align" -> "center",
  ).appends(List(logo, title))


}
