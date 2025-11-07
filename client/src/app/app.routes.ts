import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { ShopComponent } from './features/shop/shop';
import { ProductDetailsComponent } from './features/shop/product-details/product-details';
import { TestErrorComponent } from './features/test-error/test-error';
import { NotFoundComponent } from './shared/components/not-found/not-found';
import { ServerErrorComponent } from './shared/components/server-error/server-error';
import { CartComponent } from './features/cart/cart';
import { CheckoutComponent } from './features/checkout/checkout';
import { LoginComponent } from './features/account/login/login';
import { RegisterComponent } from './features/account/register/register';
import { authGuard } from './core/guards/auth-guard';
import { emptyCartGuard } from './core/guards/empty-cart-guard';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"shop", component:ShopComponent},
    {path:"shop/:id", component:ProductDetailsComponent},
    {path:"cart", component:CartComponent},
    {path:"checkout", component:CheckoutComponent, canActivate:[authGuard, emptyCartGuard]},
    {path:"account/login", component:LoginComponent},
    {path:"account/register", component:RegisterComponent},
    {path:"test-error", component:TestErrorComponent},
    {path:"not-found", component: NotFoundComponent},
    {path:"server-error", component:ServerErrorComponent},
    {path:'**', redirectTo:"not-found", pathMatch:"full"},
];
