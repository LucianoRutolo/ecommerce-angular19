import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

type CartItem = Product & { quantity?: number };
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart = {
    id: 0,
    userId: 0,
    date: new Date(),
    products: [],
    __v: 0,
  };

  private cartSubject = new BehaviorSubject<Cart>(this.cart);

  constructor() {}

  getCart(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  addToCart(productId: number | string, quantity?: number) {
    const productFound = this.cart.products.find(
      (p) => p.productId == productId
    );
    if (productFound) {
      productFound.quantity += quantity ? quantity : 1;
    } else {
      this.cart.products.push({ productId, quantity: quantity ? quantity : 1 });
    }
    this.cartSubject.next(this.cart);
  }

  removeFromCart(productId: number | string) {
    this.cart.products = this.cart.products.filter(
      (p) => p.productId !== productId
    );
    this.cartSubject.next(this.cart);
  }

  clearCart() {
    this.cart.products = [];
    this.cartSubject.next(this.cart);
  }
}

