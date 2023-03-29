import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector(".popup__input-list");
  }

  submitHandler(callBack) {
    this._submit = callBack;
  }

  setEventListener() {
    super.setEventListener();
    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submit();
    });
  }
}
