import { Component } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  menus: Menu[] = [];
  constructor(private menuService: MenuService) {
    this.menuService.getMenus().subscribe({
      next: (data) => this.menus = data.filter((m)=>m.approved == true)
    })
  }

  reserver(id: number) {
    this.menuService.getMenuById(id).subscribe({
      next: (data) => {
        data.reservations.push(1)
        this.menuService.updateMenu(id,data).subscribe()
      }
    })
  }

}
