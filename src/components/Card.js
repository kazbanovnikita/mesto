export default class Card {
  constructor(
    data,
    templateSelector,
    handleCardClick,
    userId,
    handleLikeClick,
    handleDeleteCardClick
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardId = data._id;

    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;

    this._userId = userId;
    this._isUserCard = userId === data.owner._id;

    this._handleLikeClick = handleLikeClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
    //console.log(this._cardId)
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
    this._likeCounter = this._element.querySelector(".card__like-counter");
    this._likeCounter.textContent = this._likes.length;

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;

    this._setEventListeners();
    this._toggleLikesCounter();

    return this._element;
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  setLike() {
    this._likeBtn.classList.add("card__like-button_active");
    this.isLiked = true;
  }

  removeLike() {
    this._likeBtn.classList.remove("card__like-button_active");
    this.isLiked = false;
  }

  _checkUserLikes() {
    return this._likes.some((item) => item._id === this._userId);
  }

  updatelikesCounter(dataOfLikes) {
    console.log(this._likeCounter.textContent);
    this._likeCounter.textContent = dataOfLikes.length;
  }

  _toggleLikesCounter() {
    if (this._checkUserLikes()) {
      this.setLike();
    } else {
      this.removeLike();
    }
  }

  getCardId() {
    return this._cardId;
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick({
        link: this._link,
        name: this._name,
        alt: this._alt,
      });
    });

    this._likeBtn.addEventListener("click", () => {
      this._handleLikeClick();
    });

    if (!this._isUserCard) {
      this._deletBtn.remove();
      this._deletBtn = null;
    } else {
      this._deletBtn.addEventListener("click", (event) => {
        this._handleDeleteCardClick(event);
      });
    }
  }
}
