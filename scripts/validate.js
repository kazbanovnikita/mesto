const formValidationConfig = {
    formSelector: '.popup__input-list',
    inputSelector: '.popup__input',
    errorClass: 'popup__input_type-error',
    buttonSelector: '.popup__save-buttom',
    buttonDisabledClass: 'popup__save-button_disabled',
};

function disableSubmit(event){
    event.preventDefault();
}

function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));

    formList.forEach((form) => {
        form.addEventListener('submit', disableSubmit);
        form.addEventListener('input', () =>{
        toggleButton(form, config)
    });

    addInputListnener(form, config);
    toggleButton(form, config)
    });
}

function handleFormInput(event, config){
    const input = event.target;
    const inputId = input.id;
    const errorElement = document.querySelector(`#${inputId}-error`);   

    if( input.validity.valid){
        input.classList.remove(config.errorClass);
        errorElement.textContent = "";
    } else{
        input.classList.add(config.errorClass);
        errorElement.textContent = input.validationMessage;
    }
}

function toggleButton(form, config){
    const buttonSubmit = form.querySelector(config.buttonSelector); 
    const isFormValid = form.checkValidity();

    buttonSubmit.disabled = !isFormValid;
    buttonSubmit.classList.toggle('popup__save-button_disabled', !isFormValid)

    console.log(isFormValid)
}

function addInputListnener(form, config){
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));

    inputList.forEach((item) => {
        item.addEventListener('input', (event) => {
            handleFormInput(event, config)
        });
    });
}


enableValidation(formValidationConfig);

