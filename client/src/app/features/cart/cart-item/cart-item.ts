import { Component, inject, input } from '@angular/core';
import { CartItem } from '../../../shared/models/cart';
import { RouterLink } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
 
import { CurrencyPipe } from '@angular/common';
import { MatAnchor, MatIconButton } from '@angular/material/button';
import { CartService } from '../../../core/services/cart';

@Component({
  selector: 'app-cart-item',
  imports: [RouterLink, MatIcon, MatIconButton, CurrencyPipe, MatAnchor],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss'
})
export class CartItemComponent {
  item = input.required<CartItem>();
  cartService = inject(CartService);

  incrementQuantity() {
    this.cartService.addItemToCart(this.item());
  }
  decrementQuantity() {
    this.cartService.removeItemFromCart(this.item().productId);
  }
  removeItemFromCart() {
    this.cartService.removeItemFromCart(this.item().productId, this.item().quantity);
  }
}
