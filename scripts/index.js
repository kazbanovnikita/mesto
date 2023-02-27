import FormValidator from './Validate.js'
import Card from './Card.js';

const formUserInfoElement = document.querySelector('.popup__input-list');
const formAddingCardElement = document.querySelector('[name="popup-adding-cards-form"]');
const popupElement = document.querySelector('.popup_user_info');
const addingPopupElement = document.querySelector('.popup_type_cards');
const imagePopupElement = document.querySelector('.popup_type_image')
const popupCloseButtonsElement = document.querySelectorAll('.popup__close-button');
const popupEditButtonElement = document.querySelector('.profile__edit-button');
const popupAddButtonElement = document.querySelector('.profile__add-button')
const userName = popupElement.querySelector('#name-input');
const userOccupation = popupElement.querySelector('#about-input');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const templateCards = document.querySelector('.template-cards');
const inputCardName = document.querySelector('#place-input');
const inputCardLink = document.querySelector('#url-input');
const hugeImage = document.querySelector('.popup__image');
const captionHugeImage = document.querySelector('.popup__figcaption');
const allPopups = document.querySelectorAll('.popup');
const saveUserInfoButton = popupElement.querySelector('.popup__save-buttom');
const saveCardButton = addingPopupElement.querySelector('#save-card-button');
const cardsList = document.querySelector('.cards__list'); 

const formValidationConfig = {
  formSelector: '.popup__input-list',
  inputSelector: '.popup__input',
  errorClass: 'popup__input_type-error',
  buttonSelector: '.popup__save-buttom',
  buttonDisabledClass: 'popup__save-button_disabled',
};



// массив с обязательными карточкам 
 const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }

  ]; 

  

// добавление дефолтных карточек
  initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, openBigPopup, templateCards);
    const cardElement = card.createNewCard();

    //adding in Dom
    document.querySelector('.cards__list').append(cardElement)
  })

  // создание новый карточек
  function handleFormAddingCards(evt) {
    evt.preventDefault();
    cardsList.
    prepend(new Card(inputCardName.value, inputCardLink.value, openBigPopup, templateCards).
    createNewCard());

    closePopup(addingPopupElement);
    };

formAddingCardElement.addEventListener('submit', handleFormAddingCards)


///////////////////////
// открытие попапов

function openBigPopup (itemName, itemLink) {
  openPopup(imagePopupElement);
  hugeImage.src = itemLink;
  captionHugeImage.textContent = itemName;
  hugeImage.alt = itemName;
}

function openPopup (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEscape);
}


popupEditButtonElement.addEventListener('click', () => {
    openPopup(popupElement);
    userName.value = profileTitle.textContent;
    userOccupation.value = profileSubtitle.textContent;
    saveUserInfoButton.classList.remove('popup__save-button_disabled')
    saveUserInfoButton.disabled = true;
});

popupAddButtonElement.addEventListener('click', () => {
    formAddingCardElement.reset();
    openPopup(addingPopupElement);
    saveCardButton.disabled = true;
    saveCardButton.classList.add('popup__save-button_disabled')
});

// закрытие попов 

const closePopup = function(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEscape);
}

popupCloseButtonsElement.forEach((button) => {
    button.addEventListener('click', (evt) => {
        closePopup(evt.target.closest('.popup'));
    });
});

// закрытие попов по esc 
function closePopupByEscape(event){
    if(event.key === 'Escape'){
        allPopups.forEach((popup) => {
            closePopup(popup)
        })
       }
   }



// вывод на страницу из input 

function saveDataAboutUser(evt){
    evt.preventDefault();
    profileTitle.textContent = userName.value;
    profileSubtitle.textContent = userOccupation.value;

    closePopup(popupElement);

}

formUserInfoElement.addEventListener('submit', saveDataAboutUser);



// закритие попапов clickом по overlay

const closePopupByClickOnOverlay = function() {
    allPopups.forEach((popup) => {
     popup.addEventListener('click', (event) =>{
        if(event.target !== event.currentTarget){
            return
        } else {
            closePopup(popup);
        } 
     })
    })
}
closePopupByClickOnOverlay();

/// Валидация попапа с добавлением картчки 
const addingCardValid = new FormValidator(formValidationConfig, formAddingCardElement)
addingCardValid.enableValidation()
addingCardValid.toggleButton(formAddingCardElement);

/// Валидация попапа с информацией о юзере
const profileUnfoValid = new FormValidator(formValidationConfig, formUserInfoElement)
profileUnfoValid.enableValidation()
profileUnfoValid.toggleButton(formUserInfoElement)