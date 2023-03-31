(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function r(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}var n=function(){function t(e){var n,o,i,u=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,i=function(t){"Escape"===t.key&&u.close()},(o=r(o="_handleEscClose"))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,this._popup=e}var n,o;return n=t,(o=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListener",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-button"))&&t.close()}))}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=c(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},u.apply(this,arguments)}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}(f,t);var e,r,n,l,s=(n=f,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=c(n);if(l){var r=c(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function f(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(r=s.call(this,t))._handleFormSubmit=e,r._popupForm=r._popup.querySelector(".popup__input-list"),r._inputList=r._popupForm.querySelectorAll(".popup__input"),r._submitButton=r._popup.querySelector(".popup__save-buttom"),r}return e=f,(r=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){var r=e.getAttribute("name");t._formValues[r]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){var r=e.getAttribute("name");e.value=t["".concat(r)],console.log(t["".concat(r)])}))}},{key:"setEventListener",value:function(){var t=this;u(c(f.prototype),"setEventListener",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"close",value:function(){u(c(f.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"loading",value:function(t){this._submitButton.textContent=!0===t?"Сохранение...":"Сохранить"}}])&&i(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),f}(n);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===s(o)?o:String(o)),n)}var o}var p=function(){function t(e,r){var n=e.render;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._render=n,this._container=r}var e,r;return e=t,(r=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._render(t)}))}},{key:"addItems",value:function(t){this._container.append(t)}},{key:"prependItems",value:function(t){this._container.prepend(t)}}])&&f(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}var d=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._errorClass=e.errorClass,this._buttonSelector=e.buttonSelector,this._buttonDisabledClass=e.buttonDisabledClass,this._form=r,this._buttonSubmit=this._form.querySelector(this._buttonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector))}var e,r;return e=t,(r=[{key:"_getError",value:function(t){return this._errorElement=this._form.querySelector("#".concat(t.id,"-error"))}},{key:"_showInputErorr",value:function(t){t.classList.add(this._errorClass),this._getError(t).textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){t.classList.remove(this._errorClass),this._getError(t).textContent=""}},{key:"_checkValidityInput",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputErorr(t)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_disableButton",value:function(){this._buttonSubmit.classList.add(this._buttonDisabledClass),this._buttonSubmit.disabled=!0}},{key:"_enableButton",value:function(){this._buttonSubmit.classList.remove(this._buttonDisabledClass),this._buttonSubmit.disabled=!1}},{key:"_toggleButton",value:function(){this._hasInvalidInput()?this._disableButton():this._enableButton()}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkValidityInput(e),t._toggleButton()})),t._toggleButton()}))}},{key:"resetValid",value:function(){var t=this;this._toggleButton(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===v(o)?o:String(o)),n)}var o}var m=function(){function t(e,r,n,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._cardId=e._id,this._templateSelector=r,this._handleCardClick=n,this._userId=o,this._isUserCard=o===e.owner._id,this._handleLikeClick=i,this._handleDeleteCardClick=u}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return this._card=this._templateSelector.content.querySelector(".card").cloneNode(!0),this._card}},{key:"createNewCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._deletBtn=this._element.querySelector(".card__trash-button"),this._likeBtn=this._element.querySelector(".card__like-button"),this._likeCounter=this._element.querySelector(".card__like-counter"),this._likeCounter.textContent=this._likes.length,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".card__title").textContent=this._name,this._setEventListeners(),this._toggleLikesCounter(),this._element}},{key:"_deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"setLike",value:function(){this._likeBtn.classList.add("card__like-button_active"),this.isLiked=!0}},{key:"removeLike",value:function(){this._likeBtn.classList.remove("card__like-button_active"),this.isLiked=!1}},{key:"_checkUserLikes",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._userId}))}},{key:"updatelikesCounter",value:function(t){console.log(this._likeCounter.textContent),this._likeCounter.textContent=t.length}},{key:"_toggleLikesCounter",value:function(){this._checkUserLikes()?this.setLike():this.removeLike()}},{key:"getCardId",value:function(){return this._cardId}},{key:"_setEventListeners",value:function(){var t=this;this._cardImage.addEventListener("click",(function(){t._handleCardClick({link:t._link,name:t._name,alt:t._alt})})),this._likeBtn.addEventListener("click",(function(){t._handleLikeClick()})),this._isUserCard?this._deletBtn.addEventListener("click",(function(e){t._handleDeleteCardClick(e)})):(this._deletBtn.remove(),this._deletBtn=null)}}])&&b(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}var S=function(){function t(e){var r=e.userNameSelector,n=e.userAboutSelector,o=e.userAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(r),this._userAbout=document.querySelector(n),this._userAvatar=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userAbout:this._userAbout.textContent,userAvatar:this._userAvatar.src}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about,n=t.avatar,o=t.userId;this._userName.textContent=e,this._userAbout.textContent=r,this._userAvatar.src=n,this._userId=o}},{key:"getUserId",value:function(){return this._userId}}])&&g(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},E.apply(this,arguments)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(n);if(o){var r=O(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".popup__image"),e._title=e._popup.querySelector(".popup__figcaption"),e}return e=u,(r=[{key:"open",value:function(t){this._title.textContent=t.name,this._image.src=t.link,this._image.alt=t.alt,E(O(u.prototype),"open",this).call(this)}}])&&w(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(n),P={formSelector:".popup__input-list",inputSelector:".popup__input",errorClass:"popup__input_type-error",buttonSelector:".popup__save-buttom",buttonDisabledClass:"popup__save-button_disabled"};function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function I(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===L(o)?o:String(o)),n)}var o}var R=function(){function t(e){var r=e.baseUrl,n=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=r,this._headers=n}var e,r;return e=t,(r=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Что-то не так... код ошибки ".concat(t.status))}},{key:"getInitialCards",value:function(){var t=this._baseUrl+"/cards";return fetch(t,{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){var t=this._baseUrl+"/users/me";return fetch(t,{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getDataFromServer",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}},{key:"updateUserInfo",value:function(t){var e=this._baseUrl+"/users/me";return fetch(e,{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(t){var e=this._baseUrl+"/users/me/avatar";return fetch(e,{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then(this._checkResponse)}},{key:"addNewCard",value:function(t){var e=this._baseUrl+"/cards";return fetch(e,{method:"POST",headers:this._headers,body:JSON.stringify(t)}).then(this._checkResponse)}},{key:"addLike",value:function(t){var e=this._baseUrl+"/cards/likes/".concat(t);return fetch(e,{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"removeLike",value:function(t){var e=this._baseUrl+"/cards/likes/".concat(t);return fetch(e,{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){var e=this._baseUrl+"/cards/".concat(t);return fetch(e,{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&I(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function U(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},A.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(n);if(o){var r=B(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupForm=e._popup.querySelector(".popup__input-list"),e}return e=u,(r=[{key:"submitHandler",value:function(t){this._submit=t}},{key:"setEventListener",value:function(){var t=this;A(B(u.prototype),"setEventListener",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._submit()}))}}])&&U(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(n);function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var V=document.forms["popup-edit-form"],N=document.forms["popup-adding-cards-form"],F=document.forms["popup-avatar-form"],H=document.querySelector(".popup_type_image"),J=document.querySelector(".profile__edit-button"),G=document.querySelector(".profile__add-button"),M=document.querySelector(".profile__button-avatar"),z=document.querySelector(".template-cards"),$=document.querySelector(".cards__list"),K=document.querySelector(".popup_type_cards"),Q=document.querySelector(".popup_user_info"),W=document.querySelector(".popup_type_avatar"),X=document.querySelector(".popup_type_deletion-conformation"),Y=new S({userNameSelector:".profile__title",userAboutSelector:".profile__subtitle",userAvatarSelector:".profile__avatar"}),Z=new R({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-62",headers:{"Content-Type":"application/json",Authorization:"b31c2277-db08-430d-b0af-66935b76357e"}});Z.getDataFromServer().then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return D(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];Y.setUserInfo({name:i.name,about:i.about,avatar:i.avatar,userId:i._id}),ut.renderItems(o)}));var tt=new l(Q,(function(t){var e=t.userName,r=t.userAbout;tt.loading(!0),Z.updateUserInfo({name:e,about:r}).then((function(t){Y.setUserInfo(t),tt.close()})).catch((function(t){return console.log(t)})).finally((function(){tt.loading(!1)}))})),et=new l(W,(function(t){et.loading(!0),Z.setUserAvatar(t).then((function(t){Y.setUserInfo(t),et.close()})).catch((function(t){return console.log(t)})).finally((function(){et.loading(!1)}))}));et.setEventListener();var rt=new d(P,F);rt.enableValidation(),M.addEventListener("click",(function(){rt.resetValid(),et.open()}));var nt=new C(H);function ot(t){var e=new m(t,z,(function(){nt.open(t)}),Y.getUserId(),(function(){t._id,e.isLiked?Z.removeLike(e.getCardId()).then((function(t){e.removeLike(),e.updatelikesCounter(t.likes)})).catch((function(t){return console.log(t)})):Z.addLike(e.getCardId()).then((function(t){console.log(t.likes.length),e.setLike(),e.updatelikesCounter(t.likes)})).catch((function(t){return console.log(t)}))}),(function(t){var r=t.target.closest(".card");lt.open(),lt.submitHandler((function(){Z.deleteCard(e.getCardId()).then((function(){r.remove(),lt.close()})).catch((function(t){return console.log(t)}))}))}));return e.createNewCard()}nt.setEventListener();var it=new l(K,(function(t){it.loading(!0),Z.addNewCard(t).then((function(t){it.close(),ut.prependItems(ot(t))})).catch((function(t){return console.log(t)})).finally((function(){it.loading(!1)}))}));it.setEventListener();var ut=new p({render:function(t){ut.addItems(ot(t))}},$);G.addEventListener("click",(function(){at.resetValid(),it.open()})),J.addEventListener("click",(function(){ct.resetValid(),tt.setInputValues(Y.getUserInfo()),tt.open()})),tt.setEventListener();var at=new d(P,N);at.enableValidation();var ct=new d(P,V);ct.enableValidation();var lt=new x(X);lt.setEventListener()})();