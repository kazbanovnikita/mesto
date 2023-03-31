export default class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._errorClass = config.errorClass;
    this._buttonSelector = config.buttonSelector;
    this._buttonDisabledClass = config.buttonDisabledClass;
    this._form = form;
    this._buttonSubmit = this._form.querySelector(this._buttonSelector);
    this._inputList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
  }

  _getError(input) {
    return (this._errorElement = this._form.querySelector(
      `#${input.id}-error`
    ));
  }

  _showInputErorr(input) {
    input.classList.add(this._errorClass);
    this._getError(input).textContent = input.validationMessage;
  }

  _hideInputError(input) {
    input.classList.remove(this._errorClass);
    this._getError(input).textContent = "";
  }

  _checkValidityInput(input) {
    if (!input.validity.valid) {
      this._showInputErorr(input);
    } else {
      this._hideInputError(input);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  }

  _disableButton() {
    this._buttonSubmit.classList.add(this._buttonDisabledClass);
    this._buttonSubmit.disabled = true;
  }

  _enableButton() {
    this._buttonSubmit.classList.remove(this._buttonDisabledClass);
    this._buttonSubmit.disabled = false;
  }

  _toggleButton() {
    this._hasInvalidInput() ? this._disableButton() : this._enableButton();
  }

  _setEventListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkValidityInput(input);
        this._toggleButton();
      });
      this._toggleButton();
    });
  }

  resetValid() {
    this._toggleButton();
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}

