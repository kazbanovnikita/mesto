const formElement = document.querySelector('.popup__input-list');
const formAddingCardElement = document.querySelector('[name="popup-adding-cards-form"]');
const popupElement = document.querySelector('.popup');
const addingPopupElement = document.querySelector('.popup_type_cards');
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
    card.querySelector('.card__title').textContent = item.name;
    card.querySelector('.card__image').src = item.link;
    card.querySelector('.card__image').alt = item.name;

    //кнопка like 
    card.querySelector('.card__like-button').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like-button_active');
   });

    // кнопка delet 
    const deletBtn = card.querySelector('.card__trash-button');
    deletBtn.addEventListener('click', () => {
        card.remove()
    });

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






///////////////////////
// открытие попапов

const openPopup = function() {
    popupElement.classList.add('popup_opened');
    userName.value = profileTitle.textContent;
    userOccupation.value = profileSubtitle.textContent;
}

const openAddingPopup =function(){
    addingPopupElement.classList.add('popup_opened');
}

popupEditButtonElement.addEventListener('click', openPopup);
popupAddButtonElement.addEventListener('click', openAddingPopup);

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

    closePopup();

}

formElement.addEventListener('submit', saveDataAboutUser);



/*//закрытие попапа без кнопки
const closePopupByClickOnOverlay = function(event) {
    if(event.target !== event.currentTarget){
        return;
    } 
    closePopup();
}
*/

//popupElement.addEventListener('click', closePopupByClickOnOverlay);





