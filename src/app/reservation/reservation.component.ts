import { Component } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  reservations:Menu[]=[]
  constructor(private menuService: MenuService) {
    
    this.menuService.getMenus().subscribe({
      next: (data) => this.reservations = data.filter((m)=>m.reservations.includes(1))
    });
  }
}
