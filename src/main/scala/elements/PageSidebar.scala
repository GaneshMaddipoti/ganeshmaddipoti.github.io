package elements

import utils.HtmlElementUtil.{div, img}
import extensions.HtmlElementExtension.*

object PageSidebar {

  val logo = img.styles(
    "width" -> "100px",
    "margin" -> "20px 25px"
  ).attrs("src" -> "./images/favicon.svg")

  val sidebar = div.styles(
    "position" -> "fixed",
    "width" -> "150px",
    "height" -> "100%",
    "background-color" -> "#222",
    "box-sizing" -> "border-box",
    "overflow" -> "auto"
  ).append1(logo)


}
