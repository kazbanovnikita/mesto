export default class FormValidator {
 constructor(config, form){
     this._config = config
     this._formSelector = config.formSelector;
     this._inputSelector = config.inputSelector;
     this._errorClass = config.errorClass;
     this._buttonSelector = config.buttonSelector;
     this._buttonDisabledClass = config.buttonDisabledClass;
     this._form = form;
 }


 _disableSubmit(event){
    event.preventDefault();
}

_handleFormInput(event){
    this._input = event.target;
    this._inputId = this._input.id;
    this._errorElement = document.querySelector(`#${this._inputId}-error`);   

    if( this._input.validity.valid){
        this._input.classList.remove(this._errorClass);
        this._errorElement.textContent = "";
    } else{
        this._input.classList.add(this._errorClass);
        this._errorElement.textContent = this._input.validationMessage;
    }
}

toggleButton(form){
    this._buttonSubmit = form.querySelector(this._buttonSelector); 
    this._isFormValid = form.checkValidity();

    this._buttonSubmit.disabled = !this._isFormValid;
    this._buttonSubmit.classList.toggle(this._buttonDisabledClass, !this._isFormValid)
}

_addInputListnener(form){
    this._inputList = Array.from(form.querySelectorAll(this._inputSelector));

    this._inputList.forEach((item) => {
        item.addEventListener('input', (event) => {
            this._handleFormInput(event)
        });
    });
};

enableValidation() {
    this._form.addEventListener('submit', this._disableSubmit);
    this._form.addEventListener('input', () =>{
    this.toggleButton(this._form)
});

this._addInputListnener(this._form, this._config);
this.toggleButton(this._form)
}

}












