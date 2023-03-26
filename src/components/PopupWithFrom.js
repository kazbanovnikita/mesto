import Popup from "./Popup";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit){
        super(popupSelector)
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popup.querySelector('.popup__input-list');
        this._inputList = this._popupForm.querySelectorAll('.popup__input');
    }

    _getInputValues(){
        this._formValues = {}
        this._inputList.forEach(input => {
           const inputName = input.getAttribute('name')
           this._formValues[inputName] = input.value
        });
        return this._formValues
    }

    setInputValues(data) {
        this._inputList.forEach((input) => {
          const inputName = input.getAttribute('name')
          input.value = data[`${inputName}`];
          console.log(data[`${inputName}`])
          
        });
      }

    setEventListener(){
        super.setEventListener();
        this._popupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close()
        })
    }

    close(){
        super.close();
        this._popupForm.reset()
    }
}
