const formElement = document.querySelector('.popup__input-list');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupEditButtonElement = document.querySelector('.profile__edit-button');
const userName = popupElement.querySelector('#name-input');
const userOccupation = popupElement.querySelector('#about-input');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');



// Обработчик «отправки» формы

function handleFormSubmite(evt) {
    evt.preventDefault();
}


const openPopup = function() {
    popupElement.classList.add('popup_is_opened');
    userName.value = profileTitle.textContent;
    userOccupation.value = profileSubtitle.textContent;
}

const closePopup = function() {
    popupElement.classList.remove('popup_is_opened');
}

const closePopupByClickOnOverlay = function(event) {
    if(event.target !== event.currentTarget){
        return;
    } 
    closePopup();
}

//Вызов собития 

popupEditButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay)

// Работаем с input 
document.querySelector('.popup__save-buttom').addEventListener('click', saveDataAboutUser,);



function saveDataAboutUser(evt){
    evt.preventDefault();
    console.log('i am clicking on bottom');
    let inputInformation = document.querySelector('#name-input').value;
    let inputAbout = document.querySelector('#about-input').value;
    console.log(inputInformation);
    document.querySelector('.profile__title').innerHTML = inputInformation;
    document.querySelector('.profile__subtitle').innerHTML = inputAbout;

    closePopup();

}

formElement.addEventListener('submit', formElement);






