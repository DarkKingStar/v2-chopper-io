import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-theme-toggler',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.css',
})
export class ThemeTogglerComponent implements OnInit {
  isDarkMode: boolean = false;

  constructor() {}
  ngOnInit(): void {
    this.checkThemeAndSet();
  }
  toggleTheme() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      this.isDarkMode = true;
    } else {
      localStorage.setItem('theme', 'light');
      this.isDarkMode = false;
    }
    this.changeVisibilityOfIcons();
  }

  checkThemeAndSet() {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      this.isDarkMode = true;
    } else {
      document.body.classList.remove('dark-mode');
      this.isDarkMode = false;
    }
    this.changeVisibilityOfIcons();
  }

  changeVisibilityOfIcons() {
    if (this.isDarkMode) {
      document.getElementById('moon')?.classList.remove('hidden');
      document.getElementById('sun')?.classList.add('hidden');
    } else {
      document.getElementById('moon')?.classList.add('hidden');
      document.getElementById('sun')?.classList.remove('hidden');
    }
  }
}
