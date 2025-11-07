import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CartService } from '../services/cart';
import { SnackbarService } from '../services/snackbar';

export const emptyCartGuard: CanActivateFn = (route, state) => {
  const cartService = inject(CartService);
  const snack = inject(SnackbarService);
  const router = inject(Router);

  if (!cartService.cart() || cartService.cart()?.items.length === 0) {
    snack.error('Your cart is empty');
    router.navigateByUrl('/cart');
    return false;
  }
  return true;
};
