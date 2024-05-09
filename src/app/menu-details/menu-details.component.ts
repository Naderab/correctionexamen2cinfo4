import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent {

  id!: number;
  menu!: Menu;
  constructor(private ar: ActivatedRoute, private menuService: MenuService) {
    this.id = this.ar.snapshot.params['id'];
    this.menuService.getMenuById(this.id).subscribe({
      next : (data) => this.menu = data
    })
  }

}
