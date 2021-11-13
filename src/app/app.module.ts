import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SearchMealsComponent } from './components/search-meals/search-meals.component';
import { HomeComponent } from './components/home/home.component';
import { SignupStep1Component } from './components/auth/signup/steps/signup-step1/signup-step1.component';
import { SignupStep2Component } from './components/auth/signup/steps/signup-step2/signup-step2.component';
import { SignupStep3Component } from './components/auth/signup/steps/signup-step3/signup-step3.component';
import { FormContainerComponent } from './components/commons/form-container/form-container.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { DailyProgressComponent } from './components/home/daily-progress/daily-progress.component';
import { DailyMealsComponent } from './components/home/daily-meals/daily-meals.component';
import { FullMealDialogComponent } from './components/commons/full-meal-dialog/full-meal-dialog.component';
import { MealExpandListComponent } from './components/commons/meal-expand-list/meal-expand-list.component';
import { BasicSearchComponent } from './components/search-meals/search-options/basic-search/basic-search.component';
import { AdvancedSearchComponent } from './components/search-meals/search-options/advanced-search/advanced-search.component';
import { SearchMealsFormComponent } from './components/search-meals/search-options/search-meals-form/search-meals-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    SearchMealsComponent,
    HomeComponent,
    SignupStep1Component,
    SignupStep2Component,
    SignupStep3Component,
    FormContainerComponent,
    HeaderComponent,
    SidenavListComponent,
    DailyProgressComponent,
    DailyMealsComponent,
    FullMealDialogComponent,
    MealExpandListComponent,
    BasicSearchComponent,
    AdvancedSearchComponent,
    SearchMealsFormComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
