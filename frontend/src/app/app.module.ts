import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './modules/product/product.module';
import { AppComponent } from './app.component';
import { RedDirective } from './shared/directives/red.directive';
import { HomeComponent } from './modules/home/components/home.component';
import { HeaderComponent } from './core/components/template/header/header.component';
import { FooterComponent } from './core/components/template/footer/footer.component';
import { NavComponent } from './core/components/template/nav/nav.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { LoaderModule } from './shared/components/loader/loader.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    RedDirective,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    LoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
