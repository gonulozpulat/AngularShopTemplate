import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; //ngModel for import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { AlertifyService } from './services/alertify.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //ngModel for import FormsModule
  ],
  providers: [AlertifyService], //Global Service
  bootstrap: [AppComponent]
})
export class AppModule { }
