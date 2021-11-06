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
import { PhysicalExerciseComponent } from './components/physical-exercise/physical-exercise.component';
import { MealsComponent } from './components/meals/meals.component';
import { HomeComponent } from './components/home/home.component';
import { SignupStep1Component } from './components/auth/signup/steps/signup-step1/signup-step1.component';
import { SignupStep2Component } from './components/auth/signup/steps/signup-step2/signup-step2.component';
import { SignupStep3Component } from './components/auth/signup/steps/signup-step3/signup-step3.component';
import { FormContainerComponent } from './components/commons/form-container/form-container.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    PhysicalExerciseComponent,
    MealsComponent,
    HomeComponent,
    SignupStep1Component,
    SignupStep2Component,
    SignupStep3Component,
    FormContainerComponent,
    HeaderComponent,
    SidenavListComponent
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
