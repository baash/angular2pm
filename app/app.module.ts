import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { ProductListComponent }  from './products/product-list.component';
import { HeaderComponent }  from './home/header.component';
import {ProductFilterPipe} from './products/product-filter.pipe';
import { OrderListComponent }  from './orders/order-list.component';
import { StarComponent} from './shared/star.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent , ProductListComponent, HeaderComponent, OrderListComponent, ProductFilterPipe,StarComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }