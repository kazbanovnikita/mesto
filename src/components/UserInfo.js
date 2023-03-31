export default class UserInfo {
  constructor({ userNameSelector, userAboutSelector, userAvatarSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userAbout = document.querySelector(userAboutSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userAbout: this._userAbout.textContent,
      userAvatar: this._userAvatar.src,
    };
  }

  setUserInfo({ name, about, avatar, userId }) {
    this._userName.textContent = name,
    this._userAbout.textContent = about,
    this._userAvatar.src = avatar;
    this._userId = userId;
  }



  getUserId() {
    return this._userId;
  }
}
