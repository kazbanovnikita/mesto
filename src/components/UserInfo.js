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

  setUserInfo({ userName, userAbout, userAvatar, userId }) {
    (this._userName.textContent = userName),
      (this._userAbout.textContent = userAbout),
      (this._userAvatar.src = userAvatar);
    this._userId = userId;
  }

  fixUserInfo({ userName, userAbout }) {
    this._userName.textContent = userName;
    this._userAbout.textContent = userAbout;
  }

  setNewUserAvatar(newUserAvatar) {
    this._userAvatar.src = newUserAvatar;
  }

  getUserId() {
    return this._userId;
  }
}
