import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { PhysicalExerciseComponent } from './physical-exercise/physical-exercise.component';
import { MealsComponent } from './meals/meals.component';
import { HomeComponent } from './home/home.component';
import { SignupStep1Component } from './auth/signup/steps/signup-step1/signup-step1.component';
import { SignupStep2Component } from './auth/signup/steps/signup-step2/signup-step2.component';
import { SignupStep3Component } from './auth/signup/steps/signup-step3/signup-step3.component';

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
    SignupStep3Component
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
