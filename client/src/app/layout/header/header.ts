import { Component, inject } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {MatBadge} from '@angular/material/badge';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BusyService } from '../../core/services/busy';
import { CartService } from '../../core/services/cart';

@Component({
  selector: 'app-header',
  imports: [
    MatIcon,
    MatButton,
    MatBadge,
    RouterLink,
    RouterLinkActive,
    MatProgressBarModule

],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
busyService = inject(BusyService);
cartService = inject(CartService);
}
