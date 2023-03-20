export default class Section {
    constructor({render, items}, containerSelector){
      this._items = items 
      this._render = render;
      this._container = containerSelector
    }
  
    renderItems(){
      this._items.forEach(item => {
        this._render(item)
      })
    }
    addItems(items){
      this._container.prepend(items)
    }
  }