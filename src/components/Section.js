export default class Section {
  constructor({ render }, containerSelector) {
    //this._items = items
    this._render = render;
    this._container = containerSelector;
  }

  renderItems(items) {
    items.forEach((item) => {
      this._render(item);
    });
  }
  addItems(items) {
    this._container.append(items);
  }

  prependItems(items) {
    this._container.prepend(items);
  }
}
