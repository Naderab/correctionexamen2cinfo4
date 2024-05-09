import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }
  
  addMenu(menu: Menu) {
    return this.http.post("http://localhost:3000/menu", menu);
  }

  getMenus() {
    return this.http.get<Menu[]>("http://localhost:3000/menu");
  }

  getMenuById(id: number) {
    return this.http.get<Menu>('http://localhost:3000/menu/'+id);
  }

  updateMenu(id:number,menu: Menu) {
    return this.http.put('http://localhost:3000/menu/'+id, menu);
    
  }
}
