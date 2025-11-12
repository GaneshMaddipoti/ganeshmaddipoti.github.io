package elements

import config.Cache.stateMap
import extensions.HtmlElementExtension.mdblclick
import models.GraphElement
import org.scalajs.dom
import org.scalajs.dom.{HTMLElement, MouseEvent, window}
import upickle.legacy.ReadWriter
import utils.Constants.{APP_COLOR, PATH_FORMAT}

import scala.scalajs.js
import scala.scalajs.js.annotation.JSGlobal

@js.native
@JSGlobal
class LeaderLine(
  start: dom.Element,
  end: dom.Element,
  options: js.UndefOr[js.Object]
) extends js.Object {
  def _id: Int                                         = js.native
  def position(): Unit                                 = js.native
  def remove(): Unit                                   = js.native
  def show(): Unit                                     = js.native
  def hide(): Unit                                     = js.native
  def setOptions(options: js.UndefOr[js.Object]): Unit = js.native
}

case class Path(override val model: GraphElement) extends AbstractElement(model) derives ReadWriter {

  private val startElement: Option[AbstractElement] = stateMap.get(model.sElement)
  private val endElement: Option[AbstractElement]   = stateMap.get(model.eElement)

  def createPath(): Unit =
    if model.text.isEmpty then model.text = "Label"
    path = Some {
      val line    = new LeaderLine(
        startElement.map(_.element.get).getOrElse(dom.document.body),
        endElement.map(_.element.get).getOrElse(dom.document.body),
        js.defined(
          js.Dynamic.literal(
            color = APP_COLOR,
            size = 1,
            path = "fluid",
            endPlug = "arrow1",
            endPlugSize = 1,
            middleLabel = model.text
          )
        )
      )
      val allSvgs = dom.document.querySelectorAll("svg.leader-line")
      for (i <- 0 until allSvgs.length) {
        val svgElem = allSvgs(i).asInstanceOf[HTMLElement]
        if svgElem.getAttribute("id") == null then {
          svgElem.setAttribute("id", line._id.toString)
          val svgText = svgElem.querySelector("text").asInstanceOf[HTMLElement]
          svgText.mdblclick { (e: MouseEvent) =>
            val pathLabel = window.prompt("Enter path name", model.text)
            if (pathLabel != null && pathLabel.nonEmpty) {
              line.setOptions {
                js.defined(
                  js.Dynamic.literal(
                    color = APP_COLOR,
                    size = 1,
                    path = "fluid",
                    endPlug = "arrow1",
                    endPlugSize = 1,
                    middleLabel = pathLabel
                  )
                )
              }
              model.text = pathLabel
            }
          }
          svgText.oncontextmenu = (e: MouseEvent) => {
            e.preventDefault()
            ContextMenu.render(e, Some(this))
            e.stopPropagation()
          }
        }
      }
      line
    }
}

object Path {

  def apply(startElement: AbstractElement, endElement: AbstractElement): Path = {
    val path = new Path(
      GraphElement(
        id = s"$PATH_FORMAT-${System.currentTimeMillis()}",
        sElement = startElement.model.id,
        eElement = endElement.model.id
      )
    )
    path
  }
}
