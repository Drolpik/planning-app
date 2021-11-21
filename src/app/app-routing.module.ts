import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';

import { HomeComponent } from './components/home/home.component';
import { SearchMealsComponent } from './components/search-meals/search-meals.component';
import { UserDataComponent } from './components/user-data/user-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'searchMeals', component: SearchMealsComponent },
  { path: 'user-data', component: UserDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
