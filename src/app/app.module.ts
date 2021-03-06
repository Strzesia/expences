import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ExpencesOverviewModule } from './expences/expences-overview.module';
import { CategoriesService } from './services/categories.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesModule } from './categories/categories.module';
import { ExpencesService } from './services/expences.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AddExpencesModule } from './add-expences/add-expences.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    ExpencesOverviewModule,
    HttpClientModule,
    CategoriesModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AddExpencesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CategoriesService,
    ExpencesService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }