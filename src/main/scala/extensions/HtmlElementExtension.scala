package extensions

import org.scalajs.dom.*

object HtmlElementExtension {
  extension (e: HTMLElement) {

    infix def onContextMenu(handler: (e: MouseEvent) => Unit): HTMLElement = {
      e.addEventListener(
        "contextmenu",
        (e: MouseEvent) => {
          e.preventDefault()
          handler(e)
          e.stopPropagation()
        }
      )
      e
    }

    infix def append1(o: HTMLElement): HTMLElement       = {
      if (o != null) e.appendChild(o)
      e
    }
    infix def appends(o: List[HTMLElement]): HTMLElement = {
      o.foreach { child =>
        if (child != null) e.appendChild(child)
      }
      e
    }

    infix def attr(key: String): String =
      e.getAttribute(key) match {
        case null  => ""
        case value => value
      }

    infix def prop(key: String): String =
      e.style.getPropertyValue(key) match {
        case null  => ""
        case value => value
      }

    infix def uid(id: String): HTMLElement = {
      e.id = id
      e
    }

    infix def attrs(attrs: (String, String)*): HTMLElement = {
      attrs.foreach { case (key, value) =>
        e.setAttribute(key, value)
      }
      e
    }

    infix def styles(styles: (String, String)*): HTMLElement = {
      styles.foreach { case (key, value) =>
        e.style.setProperty(key, value)
      }
      e
    }

    infix def styles(styles: Map[String, String]): HTMLElement = {
      styles.foreach { case (key, value) =>
        e.style.setProperty(key, value)
      }
      e
    }

    infix def addClass(value: String): HTMLElement = {
      e.classList.add(value)
      e
    }

    infix def itext(content: String): HTMLElement = {
      e.textContent = content
      e
    }

    infix def ihtml(content: String): HTMLElement = {
      e.innerHTML = content
      e
    }

    infix def dragStart(handler: (e: DragEvent) => Unit): HTMLElement = {
      e.addEventListener("dragstart", (e: DragEvent) => handler(e))
      e
    }

    infix def dragover(handler: (e: DragEvent) => Unit): HTMLElement = {
      e.addEventListener("dragover", (e: DragEvent) => handler(e))
      e
    }

    infix def drop(handler: (e: DragEvent) => Unit): HTMLElement = {
      e.addEventListener("drop", (e: DragEvent) => handler(e))
      e
    }

    infix def mclick(handler: (e: MouseEvent) => Unit): HTMLElement    = {
      e.addEventListener(
        "click",
        (e: MouseEvent) => handler(e)
      )
      e
    }
    infix def mhover(handler: (e: MouseEvent) => Unit): HTMLElement    = {
      e.addEventListener(
        "mouseover",
        (e: MouseEvent) => {
          handler(e)
          e.stopPropagation()
        }
      )
      e
    }
    infix def mout(handler: (e: MouseEvent) => Unit): HTMLElement      = {
      e.addEventListener(
        "mouseout",
        (e: MouseEvent) => {
          handler(e)
          e.stopPropagation()
        }
      )
      e
    }
    infix def kinput(handler: (e: KeyboardEvent) => Unit): HTMLElement = {
      e.addEventListener("input", (e: KeyboardEvent) => handler(e))
      e
    }
    infix def kdown(handler: (e: KeyboardEvent) => Unit): HTMLElement  = {
      e.addEventListener("keydown", (e: KeyboardEvent) => handler(e))
      e
    }

    infix def mup(handler: (e: MouseEvent) => Unit): HTMLElement = {
      e.addEventListener("mouseup", (e: MouseEvent) => handler(e))
      e
    }

    infix def mdown(handler: (e: MouseEvent) => Unit): HTMLElement = {
      e.addEventListener(
        "mousedown",
        (e: MouseEvent) => {
          handler(e)
          e.stopPropagation()
        }
      )
      e
    }

    infix def mmove(handler: (e: MouseEvent) => Unit): HTMLElement = {
      e.addEventListener("mousemove", (e: MouseEvent) => handler(e))
      e
    }

    infix def mdblclick(handler: (e: MouseEvent) => Unit): HTMLElement = {
      e.addEventListener(
        "dblclick",
        (e: MouseEvent) => {
          handler(e)
          e.stopPropagation()
        }
      )
      e
    }

    infix def mzoom(handler: (e: WheelEvent) => Unit): HTMLElement = {
      e.addEventListener("wheel", (e: WheelEvent) => handler(e))
      e
    }

    infix def fblur(handler: (e: FocusEvent) => Unit): HTMLElement = {
      e.addEventListener("blur", (e: FocusEvent) => handler(e))
      e
    }

    infix def editable(onUpdate: String => Unit): HTMLElement = {
      e.setAttribute("contenteditable", "true")
      e.addEventListener("input", (event: Event) => onUpdate(e.innerHTML))
      e.addEventListener(
        "keydown",
        (event: KeyboardEvent) =>
          if (event.keyCode == 13) { // Enter key
            event.preventDefault()
            document.execCommand("insertLineBreak", false, null)
          }
      )
      e
    }

    infix def editableOnDblClick(onUpdate: String => Unit): HTMLElement = {
      e.mdblclick { _ =>
        e.setAttribute("contenteditable", "true")
        e.focus()
      }
      e.addEventListener("input", (event: Event) => onUpdate(e.innerHTML))
      e.fblur { _ =>
        e.setAttribute("contenteditable", "false")
      }
      e
    }
  }
}
