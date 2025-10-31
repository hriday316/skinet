import { Component, inject } from '@angular/core';
import { CartService } from '../../core/services/cart';
import { CartItemComponent } from './cart-item/cart-item';
import { OrderSummaryComponent } from '../../shared/components/order-summary/order-summary';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent,OrderSummaryComponent],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class CartComponent {
  cartService = inject(CartService);

}
