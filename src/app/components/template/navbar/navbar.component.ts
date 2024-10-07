import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { SearchComponent } from "./search/search.component";
import { ThemeTogglerComponent } from "./theme-toggler/theme-toggler.component";
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenuComponent, SearchComponent, ThemeTogglerComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isActive: boolean = false;
  searchValue: string = '';
  isDropdownOpen: boolean = false;
  isSearchButtonClickable: boolean = true;
  isDarkMode: boolean = false;
  constructor(private renderer: Renderer2, private router: Router) {
    this.isActive = false;
   }

  ngOnInit(): void {
    this.setupMobileMenu();
    this.isActiveButton();
   
  }

  setupMobileMenu() {
    const btn = document.querySelector(".mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    if (btn && menu) {
      this.renderer.listen(btn, 'click', () => {
        menu.classList.toggle("hidden");
        this.isActive = !this.isActive;
      });
    }
  }
  
  isActiveButton(): boolean {
    return this.isActive;
  }

}

