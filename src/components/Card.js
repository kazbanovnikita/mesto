export default class Card {
  constructor(name, link, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick
  }

  _getTemplate() {
    this._card = this._templateSelector.content
      .querySelector(".card")
      .cloneNode(true);
    return this._card;
  }

  createNewCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".card__image");
    this._deletBtn = this._element.querySelector(".card__trash-button");
    this._likeBtn = this._element.querySelector(".card__like-button");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _toggleLike() {
    this._likeBtn.classList.toggle("card__like-button_active");
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick({
        link: this._link,
        name: this._name,
        alt: this._alt,
      });;
    });

    this._deletBtn.addEventListener("click", () => {
      this._deleteCard();
    });

    this._likeBtn.addEventListener("click", () => {
      this._toggleLike();
    });
  }
}
