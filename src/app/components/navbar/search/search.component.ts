import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  isActive: boolean = false;
  searchValue: string = '';
  isSearchButtonClickable: boolean = true;

  constructor( private router: Router) {
  }


  handleSubmit(event: Event) {
    event.preventDefault(); // Prevent the form from submitting
    // Additional logic can be added here
    if(this.searchValue === '') {
      return;
    }
    console.log(this.searchValue);
    this.isSearchButtonClickable = false;
    this.router.navigate(['/search', this.searchValue]);
    setTimeout(() => {
      this.isSearchButtonClickable = true;
    }, 1000)
    this.searchValue= ''
  }
}
