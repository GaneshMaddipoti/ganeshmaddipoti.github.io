package extensions

import org.scalajs.dom.{Document, Event, HTMLElement, KeyboardEvent, MouseEvent}

object DocumentExtension {
  extension (e: Document) {

    infix def onContentLoad(handler: () => Unit): Document = {
      e.addEventListener("DOMContentLoaded", (_: Event) => handler())
      e
    }

    infix def onContextMenu(handler: (e: MouseEvent) => Unit): Document = {
      e.addEventListener(
        "contextmenu",
        (e: MouseEvent) => {
          e.preventDefault()
          handler(e)
        }
      )
      e
    }

    infix def mclick(handler: (e: MouseEvent) => Unit): Document    = {
      e.addEventListener("click", (e: MouseEvent) => handler(e))
      e
    }
    infix def mmove(handler: (e: MouseEvent) => Unit): Document     = {
      e.addEventListener("mousemove", (e: MouseEvent) => handler(e))
      e
    }
    infix def mdown(handler: (e: MouseEvent) => Unit): Document     = {
      e.addEventListener("mousedown", (e: MouseEvent) => handler(e))
      e
    }
    infix def mup(handler: (e: MouseEvent) => Unit): Document       = {
      e.addEventListener("mouseup", (e: MouseEvent) => handler(e))
      e
    }
    infix def kdown(handler: (e: KeyboardEvent) => Unit): Document  = {
      e.addEventListener("keydown", (e: KeyboardEvent) => handler(e))
      e
    }
    infix def kup(handler: (e: KeyboardEvent) => Unit): Document    = {
      e.addEventListener("keyup", (e: KeyboardEvent) => handler(e))
      e
    }
    infix def mdblclick(handler: (e: MouseEvent) => Unit): Document = {
      e.addEventListener(
        "dblclick",
        (e: MouseEvent) => {
          handler(e)
          e.stopPropagation()
        }
      )
      e
    }
  }
}
