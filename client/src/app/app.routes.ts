import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { ShopComponent } from './features/shop/shop';
import { ProductDetailsComponent } from './features/shop/product-details/product-details';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"shop", component:ShopComponent},
    {path:"shop/:id", component:ProductDetailsComponent},
    {path:'**', redirectTo:"", pathMatch:"full"},
];
