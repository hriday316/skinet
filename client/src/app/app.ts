import { Component  } from '@angular/core';
 
import { HeaderComponent } from "./layout/header/header";
 
 
import { RouterOutlet } from '@angular/router';
// import { ShopComponent } from './features/shop/shop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App     {
 
  title = 'skinet';
  

  
} 
