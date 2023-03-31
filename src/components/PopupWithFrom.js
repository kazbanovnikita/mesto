import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(popup, handleFormSubmit) {
    super(popup);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector(".popup__input-list");
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    this._submitButton = this._popup.querySelector(".popup__save-buttom");
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      const inputName = input.getAttribute("name");
      this._formValues[inputName] = input.value;
    });
    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      const inputName = input.getAttribute("name");
      input.value = data[`${inputName}`];
      console.log(data[`${inputName}`]);
    });
  }

  setEventListener() {
    super.setEventListener();
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      //this.close();
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  loading(isLoading) {
    if (isLoading === true) {
      this._submitButton.textContent = "Сохранение...";
    } else {
      this._submitButton.textContent = "Сохранить";
    }
  }
}
