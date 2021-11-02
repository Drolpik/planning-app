import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';

import { HomeComponent } from './components/home/home.component';
import { MealsComponent } from './components/meals/meals.component';
import { PhysicalExerciseComponent } from './components/physical-exercise/physical-exercise.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'physical-exercise', component: PhysicalExerciseComponent },
  { path: 'meals', component: MealsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
