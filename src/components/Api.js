export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то не так... код ошибки ${res.status}`);
  }

  getInitialCards() {
    const url = this._baseUrl + "/cards";
    return fetch(url, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getUserInfo() {
    const url = this._baseUrl + `/users/me`;
    return fetch(url, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getDataFromServer() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  updateUserInfo(body) {
    const url = this._baseUrl + `/users/me`;
    return fetch(url, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(body),
    }).then(this._checkResponse);
  }

  setUserAvatar(body) {
    const url = this._baseUrl + `/users/me/avatar`;
    return fetch(url, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(body),
    }).then(this._checkResponse);
  }

  addNewCard(data) {
    const url = this._baseUrl + "/cards";
    return fetch(url, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  addLike(cardId) {
    const url = this._baseUrl + `/cards/likes/${cardId}`;
    return fetch(url, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  removeLike(cardId) {
    const url = this._baseUrl + `/cards/likes/${cardId}`;
    return fetch(url, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    const url = this._baseUrl + `/cards/${cardId}`;
    return fetch(url, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}
