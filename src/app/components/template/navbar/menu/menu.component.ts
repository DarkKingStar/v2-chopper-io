import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { menu } from './menu';
import { MenuType } from "../../../../models/menu.model";


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  isDropdownOpen: boolean = false;
  whichMenu: String = "";
  isActive: boolean = false;
  menu: MenuType[] = menu;
  constructor () {
  }

  ngOnInit(): void {
    console.log('menu loaded', menu);
  }
  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  openDropdown(item: MenuType): void {
    if (item.multiple && item.name !== this.whichMenu) {
      this.isDropdownOpen = true;
      this.whichMenu = item.name;
    }
  }

  onMouseLeave(): void {
    if (this.isDropdownOpen) {
      this.isDropdownOpen = false;
      this.whichMenu = "";
    }
  }
  checkisOpen(item: MenuType): any {
    return this.isDropdownOpen && this.whichMenu === item.name
  }
}
