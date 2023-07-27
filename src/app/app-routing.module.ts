import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeesComponent } from './coffees/coffees.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';

const routes: Routes = [
  { path: 'coffees', component: CoffeesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'detail/:id', component: CoffeeDetailComponent }
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
