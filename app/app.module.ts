import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProductListComponent }  from './products/product-list.component';
import { HeaderComponent }  from './home/header.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent , ProductListComponent, HeaderComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }