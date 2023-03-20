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

  _getError(input){
    return this._errorElement = this._form.querySelector(`#${input.id}-error`);
  }

  _showInputErorr(input){
    input.classList.add(this._errorClass);
     this._getError(input).textContent = input.validationMessage;
  }

  _hideInputError(input) {
    input.classList.remove(this._errorClass);
    this._getError(input).textContent = '';
  };

  _checkValidityInput (input) {
      if (!input.validity.valid){
        this._showInputErorr(input)
      } else {
        this._hideInputError(input)
      }
  };

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
    (this._hasInvalidInput())
      ? this._disableButton()
      : this._enableButton();
  }

  _setEventListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkValidityInput(input);
        this._toggleButton();
      });
      this._toggleButton();
    });
  };

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

/*
  _disableSubmit(event) {
    event.preventDefault();
  }


  _handleFormInput(event) {
    this._input = event.target;
    this._inputId = this._input.id;
    this._errorElement = document.querySelector(`#${this._inputId}-error`);


    if (this._input.validity.valid) {
      this._input.classList.remove(this._errorClass);
      this._errorElement.textContent = "";
    } else {
      this._input.classList.add(this._errorClass);

      this._errorElement.textContent = this._input.validationMessage;
    }
  }

  toggleButton() {
    this._isFormValid = this._form.checkValidity();
    this._buttonSubmit.disabled = !this._isFormValid;

    this._buttonSubmit.classList.toggle(
      this._buttonDisabledClass,
      !this._isFormValid
    );
  }

  _addInputListnener() {
    // this._inputList = Array.from(form.querySelectorAll(this._inputSelector));

    this._inputList.forEach((item) => {
      item.addEventListener("input", (event) => {
        this._handleFormInput(event);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", this._disableSubmit);
    this._form.addEventListener("input", () => {
      this.toggleButton();
    });

    this._addInputListnener();
    this.toggleButton();
  }
}
*/