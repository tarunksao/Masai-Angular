import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComp } from './banner.component';
import { Footer } from './footer.component';
import { Product } from './product.component';
import { HeaderComp } from './header.component';
import { TopBar } from './topBarArea.component';
import { MainComp } from './main.component';

@NgModule({
  declarations: [
    AppComponent, BannerComp, Footer, Product, HeaderComp, TopBar, MainComp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
