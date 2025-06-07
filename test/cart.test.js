const chai = require('chai');
const expect = chai.expect;
const ShoppingCart = require('../src/ShoppingCart');

describe('ShoppingCart', () => {
  let cart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  it('deve adicionar item ao carrinho', () => {
    cart.addItem('Banana', 1, 2);
    expect(cart.items).to.deep.equal([
      { name: 'Banana', price: 1, quantity: 2 }
    ]);
  });

  it('deve calcular o total da compra corretamente', () => {
    cart.addItem('Banana', 1, 2); // 2
    cart.addItem('Maçã', 3, 3);   // 9
    expect(cart.getTotal()).to.equal(11);
  });

  it('deve remover um item do carrinho', () => {
    cart.addItem('Banana', 1, 1);
    cart.removeItem('Banana');
    expect(cart.items.length).to.equal(0);
  });

  it('deve listar os itens do carrinho', () => {
    cart.addItem('Banana', 1, 1);
    expect(cart.listItems()).to.deep.equal([
      { name: 'Banana', price: 1, quantity: 1 }
    ]);
  });

  it('deve limpar o carrinho', () => {
    cart.addItem('Banana', 1, 1);
    cart.clearCart();
    expect(cart.items).to.deep.equal([]);
  });

  it('deve atualizar a quantidade de um item', () => {
    cart.addItem('Banana', 1, 1);
    cart.updateQuantity('Banana', 5);
    expect(cart.items.find(i => i.name === 'Banana').quantity).to.equal(5);
  });
});
