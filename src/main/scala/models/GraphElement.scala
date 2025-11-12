package models

import upickle.legacy.ReadWriter

import scala.collection.mutable.ListBuffer

case class GraphElement(
  // common
  var id: String = "",
  var text: String = "",
  var description: String = "",
  var elements: ListBuffer[GraphElement] = ListBuffer(),
  // element
  var x: Double = 0,
  var y: Double = 0,
  var width: Double = 0,
  var height: Double = 0,
  var bgColor: String = "",
  var imagePath: String = "",
  // path
  var sElement: String = "",
  var eElement: String = ""
) derives ReadWriter {
  def format: String = id.split("-").headOption.getOrElse("")
}
