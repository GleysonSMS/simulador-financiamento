import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {IMaskModule} from 'angular-imask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProponenteComponent } from './cliente/proponente/proponente.component';
import { ImovelComponent } from './cliente/imovel/imovel.component';
import { MenuComponent } from './cliente/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ProponenteComponent,
    ImovelComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    MatFormFieldModule,
    MatCardModule,
    IMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }