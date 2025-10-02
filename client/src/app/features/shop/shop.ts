import { Component, inject, OnInit } from '@angular/core';
import { ShopService } from '../../core/services/shop';
import { Product } from '../../shared/models/product';
import { ProductItem } from "./product-item/product-item";
import { MatDialog } from '@angular/material/dialog';
import { FiltersDialog } from './filters-dialog/filters-dialog';
 
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatListOption, MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { ShopParams } from '../../shared/models/shopParams';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Pagination } from '../../shared/models/pagination';
import { FormsModule } from '@angular/forms';
 
 

@Component({
  selector: 'app-shop',
  imports: [ProductItem, MatButton, MatIcon, MatMenu, MatSelectionList, MatListOption, MatMenuTrigger, MatPaginator, FormsModule, MatIconButton],
  templateUrl: './shop.html',
  styleUrl: './shop.scss'
})
export class ShopComponent implements OnInit {
  private shopService = inject(ShopService);
  private dialogService = inject(MatDialog);
  products?:  Pagination<Product>;
  selectedBrands: string[] = [];
  selectedTypes: string[] = [];
  selectedSort:string = 'name';
  sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to High', value: 'priceAsc'},
    {name: 'Price: High to Low', value: 'priceDesc'},
  ];

  shopParams = new ShopParams();
  pageSizeOptions = [5,10,15,20];

  ngOnInit() {
    this.initializeShop();
  }
  initializeShop() {
    this.shopService.getBrands();
    this.shopService.getTypes();
    this.getProducts();
  }

  getProducts(){
    this.shopService.getProducts(this.shopParams).subscribe({
      next:  response => this.products = response,
      error: err => console.log(err),
       
    });
  }
  handlePageEvent(event:  PageEvent) {
    this.shopParams.pageIndex = event.pageIndex + 1;
    this.shopParams.pageSize = event.pageSize;
    this.getProducts();
  }

  onSearchChange(){
    this.shopParams.pageIndex = 1;
    this.getProducts();
  }

  onSortChange(event: MatSelectionListChange) {
   const  selectedOption = event.options[0];
    if ( selectedOption) {
       this.shopParams.sort =  selectedOption.value;
       this.shopParams.pageIndex = 1;
        this.getProducts();
    }
     
  }
  openFiltersDialog() {
      const dialogRef = this.dialogService.open(FiltersDialog,{
        minWidth: '500px',
        data:{
          selectedBrands: this.shopParams.brands,
          selectedTypes: this.shopParams.types
        }
      });
      dialogRef.afterClosed().subscribe({
        next: result => {
          if(result){
             
            this.shopParams.brands = result.selectedBrands;
            this.shopParams.types = result.selectedTypes;
            this.shopParams.pageIndex = 1;
            this.getProducts();
          }
        }
        
      });
  }


}
