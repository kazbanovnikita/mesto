export default class Card {
    constructor(name, link, openBigPopup, templateSelector){
      this._name = name;
      this._link = link;
      this._openBigPopup = openBigPopup;
      this._templateSelector = templateSelector
    }

_getTemplate() {
  this._card = this._templateSelector.
  content.
  querySelector('.card').
  cloneNode(true); 
  return this._card;
 }

 createNewCard(){
     this._element = this._getTemplate();
     this._cardImage = this._element.querySelector('.card__image');
     this._deletBtn = this._element.querySelector('.card__trash-button');
     this._likeBtn = this._element.querySelector('.card__like-button');

     this._cardImage.src = this._link;
     this._cardImage.alt = this._name;
     this._element.querySelector('.card__title').textContent = this._name;

     this._setEventListeners()

     return this._element
 } 

 _deleteCard(){
     this._element.remove();
 }

 _likeCard(){
     this._likeBtn.classList.toggle('card__like-button_active');
 }



 _setEventListeners(){
  this._cardImage.addEventListener('click', () => {
         this._openBigPopup(this._name, this._link)
     });

   this._deletBtn.addEventListener('click', () => {
       this._deleteCard()
   })

   this._likeBtn.addEventListener('click', () => {
       this._likeCard()
   })
  
 }
}