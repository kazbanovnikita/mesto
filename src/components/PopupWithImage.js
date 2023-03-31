import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._image = this._popup.querySelector(".popup__image");
    this._title = this._popup.querySelector(".popup__figcaption");
  }

  open(item) {
    this._title.textContent = item.name;
    this._image.src = item.link;
    this._image.alt = item.alt;
    super.open();
  }
}
