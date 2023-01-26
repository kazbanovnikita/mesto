const formElement = document.querySelector('.popup__input-list');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupEditButtonElement = document.querySelector('.profile__edit-button');
const userName = popupElement.querySelector('#name-input');
const userOccupation = popupElement.querySelector('#about-input');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');



// Обработчик «отправки» формы



const openPopup = function() {
    popupElement.classList.add('popup_opened');
    userName.value = profileTitle.textContent;
    userOccupation.value = profileSubtitle.textContent;
}

const closePopup = function() {
    popupElement.classList.remove('popup_opened');
}

//закрытие попапа без кнопки
/*const closePopupByClickOnOverlay = function(event) {
    if(event.target !== event.currentTarget){
        return;
    } 
    closePopup();
}*/

// Работаем с input 


function saveDataAboutUser(evt){
    evt.preventDefault();
    let inputInformation = userName.value;
    let inputAbout = userOccupation.value;
    console.log(inputInformation);
    document.querySelector('.profile__title').textContent = inputInformation;
    document.querySelector('.profile__subtitle').textContent = inputAbout;

    closePopup();

}

//Вызов собития 
formElement.addEventListener('submit', saveDataAboutUser);
popupEditButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
//popupElement.addEventListener('click', closePopupByClickOnOverlay);





