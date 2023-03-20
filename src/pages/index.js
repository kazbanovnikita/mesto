import PopupWithForm from "../scripts/PopupWithFrom.js";
import Section from "../scripts/Section.js";
import FormValidator from "../scripts/FormValidator.js";
import Card from "../scripts/Card.js";
import UserInfo from "../scripts/UserInfo.js";
import '../pages/index.css'; // добавьте импорт главного файла стилей 
import PopupWithImage from "../scripts/PopupWithImage.js";
import {initialCards, formValidationConfig} from "../utils/constants.js"

const formUserInfoElement = document.forms["popup-edit-form"];
const formAddingCardElement = document.forms["popup-adding-cards-form"];
const profilePopupElement = document.querySelector(".popup_user_info");
const addingPopupElement = document.querySelector(".popup_type_cards");
const imagePopupElement = document.querySelector(".popup_type_image");
const popupCloseButtonsElement = document.querySelectorAll(
  ".popup__close-button"
);
const popupEditButtonsElement = document.querySelector(".profile__edit-button");
const popupAddButtonElement = document.querySelector(".profile__add-button");
const userName = profilePopupElement.querySelector("#name-input");
const userOccupation = profilePopupElement.querySelector("#about-input");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const templateCards = document.querySelector(".template-cards");
const inputCardName = document.querySelector("#place-input");
const inputCardLink = document.querySelector("#url-input");
const hugeImage = document.querySelector(".popup__image");
const captionHugeImage = document.querySelector(".popup__figcaption");
const allPopups = document.querySelectorAll(".popup");
const saveUserInfoButton = profilePopupElement.querySelector(
  ".popup__save-buttom"
);
const saveCardButton = addingPopupElement.querySelector("#save-card-button");
const cardsList = document.querySelector(".cards__list");
const popupAdd = document.querySelector('.popup_type_cards')
const popupUser = document.querySelector('.popup_user_info')
 

const popupBigImage = new PopupWithImage(imagePopupElement);
popupBigImage.setEventListener()


// добавление карточек
function createCard(item) {
  const card = new Card(
    item.name,
    item.link,
    templateCards,
    ()=>{
      popupBigImage.open(item)
    }
  ).createNewCard();
  return card;
}

const popupAddCard = new PopupWithForm(popupAdd, ({cardName, cardLink})=>{
  cardsContainer.addItems(createCard({
    name: cardName,
    alt: cardName,
    link: cardLink
  }))
})
popupAddCard.setEventListener();

// отрисовка карточек на странице 
const cardsContainer = new Section({
  render: (cards) => {
    cardsContainer.addItems(createCard(cards))
  },
  items: initialCards
}, cardsList);
cardsContainer.renderItems()

///



popupAddButtonElement.addEventListener("click", () => {
  formAddingCardElement.reset();
  popupAddCard.open();
});
///////
const userInfo = new UserInfo({
  userNameSelector:'.profile__title',
  userAboutSelector:'.profile__subtitle'
})


///
const profilePopup = new PopupWithForm(popupUser, ({userName, userAbout}) => {
  userInfo.setUserInfo({userName, userAbout})
});


popupEditButtonsElement.addEventListener('click', ()=>{
  profilePopup.open();
  profilePopup.setInputValues(userInfo.getUserInfo())
  
})
profilePopup.setEventListener()



/// Валидация попапа с добавлением картчки
const addingCardValid = new FormValidator(
  formValidationConfig,
  formAddingCardElement
);
addingCardValid.enableValidation();
addingCardValid.toggleButton();

/// Валидация попапа с информацией о юзере
const profileUnfoValid = new FormValidator(
  formValidationConfig,
  formUserInfoElement
);
profileUnfoValid.enableValidation();
profileUnfoValid.toggleButton();


