class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  removeItem(name) {
    this.items = this.items.filter(item => item.name !== name);
  }

  listItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }

  updateQuantity(name, quantity) {
    const item = this.items.find(i => i.name === name);
    if (item) {
      item.quantity = quantity;
    }
  }
}

module.exports = ShoppingCart;
