package config

import elements.AbstractElement
import elements.AbstractElement.{addElement, addPath}
import extensions.HtmlElementExtension.*
import models.GraphElement
import org.scalajs.dom
import org.scalajs.dom.*
import upickle.legacy.{read, write}
import utils.Constants.*
import utils.HtmlElementUtil.div

import scala.collection.mutable
import scala.collection.mutable.ListBuffer
import scala.scalajs.js

import scala.scalajs.js
import scala.scalajs.js.annotation.JSGlobal

@js.native
@JSGlobal("hljs")
object HLJS extends js.Object {
  def highlightAll(): Unit = js.native
}

object Cache {
  val pageBody: HTMLElement                          = div
    .uid("pageBody")
    .styles(
      "position"         -> "absolute",
      "width"            -> "6000px",
      "height"           -> "6000px",
      "background-color" -> PAGE_BG_COLOR,
      "overflow"         -> "hidden"
    )
  var fileName: Option[String]                       = None
  var state: ListBuffer[GraphElement]                = ListBuffer()
  var stateMap: mutable.Map[String, AbstractElement] = mutable.Map()
  var initialX: Double                               = 0
  var initialY: Double                               = 0
  var selectedElement: Option[AbstractElement]       = None
  var pathFlag: Boolean                              = false
  var pathStartElement: Option[AbstractElement]      = None
  var draggedElement: Option[AbstractElement]        = None

  def scrollTop: Double  = document.documentElement.scrollTop
  def scrollLeft: Double = document.documentElement.scrollLeft

  def addToState(element: AbstractElement): Unit = {
    state += element.model
    stateMap += (element.model.id -> element)
  }

  def removeFromState(element: AbstractElement): Unit = {
    state = state.filterNot(_.id == element.model.id)
    stateMap -= element.model.id
  }

  def loadState(): Unit = {
    val input = document.createElement("input").asInstanceOf[html.Input]
    input.`type` = "file"
    input.accept = ".json"
    input.onchange = (_: Event) => {
      val file   = input.files(0)
      fileName = Some(file.name)
      val reader = new FileReader()
      reader.onload = (e: Event) => {
        val jsonStr  = reader.result.asInstanceOf[String]
        val elements = read[ListBuffer[GraphElement]](jsonStr)
        renderElements(elements, None)
        renderPaths(elements)
        HLJS.highlightAll()
      }
      reader.readAsText(file)
    }
    input.click()
  }

  private def renderElements(elements: ListBuffer[GraphElement], abElement: Option[AbstractElement]): Unit =
    elements.toList.foreach { e =>
      e.format match {
        case CONTAINER | TEXT | NOTE | DIVIDER | CODE_FORMAT | NODE | IMAGE_FORMAT => addElement(e, parent = abElement)
        case _                                             => None
      }
      if e.format == CONTAINER then {
        renderElements(e.elements, stateMap.get(e.id))
      }
    }

  private def renderPaths(elements: ListBuffer[GraphElement]): Unit =
    elements.foreach { e =>
      e.format match {
        case PATH_FORMAT => addPath(e)
        case _           => None
      }
    }

  def saveState(): Unit = {
    var saveAsName: String = fileName.getOrElse("Graph.json")
    val fName              = window.prompt("Enter file name", saveAsName)
    if (fName != null && fName.nonEmpty) {
      val blob           = new dom.Blob(js.Array(write(state)), dom.BlobPropertyBag("application/json"))
      val url            = dom.URL.createObjectURL(blob)
      val a: HTMLElement = dom.document.createElement("a").asInstanceOf[HTMLAnchorElement]
      a.setAttribute("href", url)
      a.setAttribute("download", fName)
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      dom.URL.revokeObjectURL(url)
    }
  }
}
