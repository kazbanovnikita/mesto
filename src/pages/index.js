import PopupWithForm from "../components/PopupWithFrom.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css"; // добавьте импорт главного файла стилей
import PopupWithImage from "../components/PopupWithImage.js";
import { initialCards, formValidationConfig } from "../utils/constants.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

const formUserInfoElement = document.forms["popup-edit-form"];
const formAddingCardElement = document.forms["popup-adding-cards-form"];
const formSetAvatarElement = document.forms["popup-avatar-form"];
const imagePopupElement = document.querySelector(".popup_type_image");
const popupEditButtonsElement = document.querySelector(".profile__edit-button");
const popupAddButtonElement = document.querySelector(".profile__add-button");
const avatarEditButtonElement = document.querySelector(
  ".profile__button-avatar"
);
const templateCards = document.querySelector(".template-cards");

const cardsList = document.querySelector(".cards__list");
const popupAdd = document.querySelector(".popup_type_cards");
const popupUser = document.querySelector(".popup_user_info");
const popupAvatar = document.querySelector(".popup_type_avatar");
const popupConformation = document.querySelector(
  ".popup_type_deletion-conformation"
);

const userInfo = new UserInfo({
  userNameSelector: ".profile__title",
  userAboutSelector: ".profile__subtitle",
  userAvatarSelector: ".profile__avatar",
});

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-62",
  headers: {
    "Content-Type": "application/json",
    Authorization: "b31c2277-db08-430d-b0af-66935b76357e",
  },
});

api.getDataFromServer().then(([promisCard, promisUser]) => {
  userInfo.setUserInfo({
    name: promisUser.name,
    about: promisUser.about,
    avatar: promisUser.avatar,
    userId: promisUser._id,
  });
  cardsContainer.renderItems(promisCard);
});

const profilePopup = new PopupWithForm(popupUser, ({ userName, userAbout }) => {
  profilePopup.loading(true);
  api
    .updateUserInfo({ name: userName, about: userAbout })
    .then((data) => {
      userInfo.setUserInfo(data);
      profilePopup.close()
    }).catch(err => console.log(err))
    .finally(() => {
      profilePopup.loading(false);
    });
});

const setNewAvatarPopup = new PopupWithForm(popupAvatar, (avatarLink) => {
  setNewAvatarPopup.loading(true);
  api
    .setUserAvatar(avatarLink)
    .then((data) => {
      userInfo.setUserInfo(data);
      setNewAvatarPopup.close()
    }).catch(err => console.log(err))
    .finally(() => {
      setNewAvatarPopup.loading(false);
    });
});
setNewAvatarPopup.setEventListener();

const setNewAvatarPopupValidation = new FormValidator(
  formValidationConfig,
  formSetAvatarElement
);
setNewAvatarPopupValidation.enableValidation();

avatarEditButtonElement.addEventListener("click", () => {
  setNewAvatarPopupValidation.resetValid();
  setNewAvatarPopup.open();
});

const popupBigImage = new PopupWithImage(imagePopupElement);
popupBigImage.setEventListener();

// добавление карточек
function createCard(item) {
  const card = new Card(
    item,
    templateCards,
    () => {
      popupBigImage.open(item);
    },
    userInfo.getUserId(),
    () => {
      const id = item._id;
      //console.log(item)
      if (card.isLiked) {
        api.removeLike(card.getCardId()).then((data) => {
          card.removeLike();
          card.updatelikesCounter(data.likes);
        }).catch(err => console.log(err));
      } else {
        api.addLike(card.getCardId()).then((data) => {
          console.log(data.likes.length);
          card.setLike();
          card.updatelikesCounter(data.likes);
        }).catch(err => console.log(err));
      }
    },
    (event) => {
      const cardElement = event.target.closest(".card");
      popupCofirm.open();
      popupCofirm.submitHandler(() => {
        api.deleteCard(card.getCardId()).then(() => {
          cardElement.remove();
          popupCofirm.close();
        }).catch(err => console.log(err));
      });
    }
  );
  return card.createNewCard();
}

/*
const popupAddCard = new PopupWithForm(popupAdd, ({cardName, cardLink})=>{
  cardsContainer.addItems(createCard({
    name: cardName,
    alt: cardName,
    link: cardLink
  }))
})
*/

const popupAddCard = new PopupWithForm(popupAdd, (formData) => {
  popupAddCard.loading(true)
  api.addNewCard(formData).then((newCard) => {
    popupAddCard.close()
    cardsContainer.prependItems(createCard(newCard));
  }).catch(err => console.log(err))
  .finally(() => {
    popupAddCard.loading(false);
  });;
});
popupAddCard.setEventListener();

// отрисовка карточек на странице
const cardsContainer = new Section(
  {
    render: (cards) => {
      cardsContainer.addItems(createCard(cards));
    },
  },
  cardsList
);
//cardsContainer.renderItems(initialCards)

///

function callbackForAddPopupButton() {
  addingCardValid.resetValid();
  popupAddCard.open();
}

popupAddButtonElement.addEventListener("click", callbackForAddPopupButton);
///////

///

function callbackForProfilePopupButton() {
  profileUnfoValid.resetValid();
  profilePopup.setInputValues(userInfo.getUserInfo());
  profilePopup.open();
}

popupEditButtonsElement.addEventListener(
  "click",
  callbackForProfilePopupButton
);
profilePopup.setEventListener();

/// Валидация попапа с добавлением картчки
const addingCardValid = new FormValidator(
  formValidationConfig,
  formAddingCardElement
);
addingCardValid.enableValidation();
//addingCardValid.toggleButton();

/// Валидация попапа с информацией о юзере
const profileUnfoValid = new FormValidator(
  formValidationConfig,
  formUserInfoElement
);
profileUnfoValid.enableValidation();
//profileUnfoValid.toggleButton();

const popupCofirm = new PopupWithConfirmation(popupConformation);
popupCofirm.setEventListener();
