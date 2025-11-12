package models

import upickle.legacy.ReadWriter

case class GraphPoint(
  var x: Double,
  var y: Double
) derives ReadWriter
