import { Component, inject, OnInit } from '@angular/core';
import { ShopService } from '../../../core/services/shop';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDivider } from "@angular/material/divider";
 
 
@Component({
  selector: 'app-product-details',
  imports: [MatButton, MatIcon, CurrencyPipe, MatFormField, MatInput, MatLabel, MatDivider],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss'
})
export class ProductDetailsComponent implements OnInit {
  private shopService = inject(ShopService);
  private activeRoute =  inject(ActivatedRoute);
  product? : Product;

  ngOnInit(): void {
    this.loadProduct();
  }
  loadProduct(){
    const id =  this.activeRoute.snapshot.paramMap.get('id');
    if(!id) return;
    this.shopService.getProduct(+id).subscribe({
      next: product => this.product = product,
      error: error => console.log(error)
    });
  }
}
