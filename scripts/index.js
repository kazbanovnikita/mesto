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
 //создаем карточки из массива  
 const cardsList = document.querySelector('.cards__list'); 

 const createNewCard = (item) => { 
 
     const card = templateCards.content.querySelector('.card').cloneNode(true); 
     const cardImage = card.querySelector('.card__image');
     const cardTitle = card.querySelector('.card__title')
     cardTitle.textContent = item.name;
     cardImage.src = item.link; 
     cardImage.alt = item.name;

    //кнопка like 
    card.querySelector('.card__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like-button_active');
   });

    // кнопка delet 
    const deletBtn = card.querySelector('.card__trash-button');
    deletBtn.addEventListener('click', () => {
        card.remove()
    });

    //open big popup
    card.querySelector('.card__image').addEventListener('click', () => {
        openPopup(imagePopupElement);
        hugeImage.src = item.link;;
        captionHugeImage.textContent =item.name;
        hugeImage.alt= item.name;
    })

    return card;
}

const renderNewCard = (item) => {
    cardsList.append(createNewCard(item));
    
}

initialCards.forEach((item) => {
    renderNewCard(item);
}); 


function handleFormAddingCards(evt) {
    evt.preventDefault();
    cardsList.prepend(createNewCard({name: inputCardName.value, link: inputCardLink.value}));

    closePopup(addingPopupElement);
    };

formAddingCardElement.addEventListener('submit', handleFormAddingCards)

///






///////////////////////
// открытие попапов

function openPopup (popup) {
    popup.classList.add('popup_opened');
}


popupEditButtonElement.addEventListener('click', () => {
    openPopup(popupElement);
    userName.value = profileTitle.textContent;
    userOccupation.value = profileSubtitle.textContent;
});

popupAddButtonElement.addEventListener('click', () => {
    formAddingCardElement.reset();
    openPopup(addingPopupElement);
});

// закрытие попов 

const closePopup = function(popup) {
    popup.classList.remove('popup_opened');
}

popupCloseButtonsElement.forEach((button) => {
    button.addEventListener('click', (evt) => {
        closePopup(evt.target.closest('.popup'));
    });
});

// вывод на страницу из input 

function saveDataAboutUser(evt){
    evt.preventDefault();
    profileTitle.textContent = userName.value;
    profileSubtitle.textContent = userOccupation.value;

    closePopup(popupElement);

}

formUserInfoElement.addEventListener('submit', saveDataAboutUser);



/*//закрытие попапа без кнопки
const closePopupByClickOnOverlay = function(event) {
    if(event.target !== event.currentTarget){
        return;
    } 
    closePopup();
}
*/

//popupElement.addEventListener('click', closePopupByClickOnOverlay);