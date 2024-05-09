import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'addMenu', component: AddMenuComponent },
  { path: 'menu/:id', component: MenuDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
