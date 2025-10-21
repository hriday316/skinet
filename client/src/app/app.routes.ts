import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { ShopComponent } from './features/shop/shop';
import { ProductDetailsComponent } from './features/shop/product-details/product-details';
import { TestErrorComponent } from './features/test-error/test-error';
import { NotFoundComponent } from './shared/components/not-found/not-found';
import { ServerErrorComponent } from './shared/components/server-error/server-error';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"shop", component:ShopComponent},
    {path:"shop/:id", component:ProductDetailsComponent},
    {path:"test-error", component:TestErrorComponent},
    {path:"not-found", component: NotFoundComponent},
    {path:"server-error", component:ServerErrorComponent},
    {path:'**', redirectTo:"not-found", pathMatch:"full"},
];
