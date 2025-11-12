package elements

import config.Cache.{loadState, saveState, scrollLeft, scrollTop}
import elements.AbstractElement.addElement
import elements.Container.ContainerModel
import elements.ImageX.ImageModel
import elements.NodeX.NodeModel
import elements.Code.CodeModel
import elements.Note.NoteModel
import elements.TextBox.TextBoxModel
import extensions.HtmlElementExtension.*
import org.scalajs.dom.{HTMLElement, MouseEvent, document}
import utils.Constants.CONTAINER
import utils.HtmlElementUtil.*

object ContextMenu {

  private val menuCss     = Map(
    "position"         -> "absolute",
    "width"            -> "150px",
    "height"           -> "max-content",
    "background-color" -> "#555",
    "cursor"           -> "pointer",
    "border-radius"    -> "8px",
    "padding"          -> "5px",
    "z-index"          -> "1000"
  )
  private val menuItemCss = Map(
    "color"         -> "#eee",
    "padding"       -> "5px",
    "font-size"     -> "14px",
    "border-bottom" -> "1px solid #666"
  )

  private var element: Option[HTMLElement] = None

  def render(e: MouseEvent, target: Option[AbstractElement]): Unit = {
    remove()
    element = Some(
      div
        .uid("contextMenu")
        .styles(menuCss)
        .styles("left" -> s"${scrollLeft + e.clientX}px", "top" -> s"${scrollTop + e.clientY}px")
        .appends(
          target match {
            case Some(abElement) => elementContextMenu(e, abElement)
            case None            => documentContextMenu(e)
          }
        )
    )
    document.body.appendChild(element.orNull)
  }

  def documentContextMenu(me: MouseEvent): List[HTMLElement] =
    List(
      div
        .itext("▣ Container")
        .styles(menuItemCss)
        .mclick((e: MouseEvent) => addElement(ContainerModel(me, None), None)),
      div
        .itext("\uD83C\uDD63 Text")
        .styles(menuItemCss)
        .mclick((e: MouseEvent) => addElement(TextBoxModel(me, None), None)),
      div
        .itext("▭ Component")
        .styles(menuItemCss)
        .mclick((e: MouseEvent) => addElement(NodeModel(me, None), None)),
      div
        .itext("{ } Code")
        .styles(menuItemCss)
        .mclick((e: MouseEvent) => addElement(CodeModel(me, None), None)),
      div
        .itext("\uD83D\uDCC4 Note")
        .styles(menuItemCss)
        .mclick((e: MouseEvent) => addElement(NoteModel(me, None), None)),
      div
        .itext("\uD83D\uDCBE Image")
        .styles(menuItemCss)
        .mclick((e: MouseEvent) => addElement(ImageModel(me, None), None)),
      div
        .itext("━ Divider")
        .styles(menuItemCss)
        .mclick((e: MouseEvent) => addElement(Divider.DividerModel(me, None), None)),
      div
        .itext("📂 Load Graph")
        .styles(menuItemCss)
        .mclick((e: MouseEvent) => loadState()),
      div
        .itext("💾 Save Graph")
        .styles(menuItemCss)
        .mclick((e: MouseEvent) => saveState())
    )

  def elementContextMenu(me: MouseEvent, element: AbstractElement): List[HTMLElement] =
    element.format match {
      case CONTAINER =>
        List(
          div
            .itext("▣ Container")
            .styles(menuItemCss)
            .mclick((e: MouseEvent) => addElement(ContainerModel(me, Some(element)), Some(element))),
          div
            .itext("\uD83C\uDD63 Text")
            .styles(menuItemCss)
            .mclick((e: MouseEvent) => addElement(TextBoxModel(me, Some(element)), Some(element))),
          div
            .itext("▭ Component")
            .styles(menuItemCss)
            .mclick((e: MouseEvent) => addElement(NodeModel(me, Some(element)), Some(element))),
          div
            .itext("{ } Code")
            .styles(menuItemCss)
            .mclick((e: MouseEvent) => addElement(CodeModel(me, Some(element)), Some(element))),
          div
            .itext("\uD83D\uDCC4 Note")
            .styles(menuItemCss)
            .mclick((e: MouseEvent) => addElement(NoteModel(me, Some(element)), Some(element))),
          div
            .itext("\uD83D\uDCBE Image")
            .styles(menuItemCss)
            .mclick((e: MouseEvent) => addElement(ImageModel(me, Some(element)), Some(element))),
          div
            .itext("\uD83D\uDDD1 Remove Element")
            .styles(menuItemCss)
            .mclick((_: MouseEvent) => element.remove())
        )
      case _         =>
        List(
          div
            .itext("\uD83D\uDDD1 Remove Element")
            .styles(menuItemCss)
            .mclick((_: MouseEvent) => element.remove())
        )
    }

  def remove(): Unit =
    try document.body.removeChild(element.orNull)
    catch case _: Throwable => None
}
