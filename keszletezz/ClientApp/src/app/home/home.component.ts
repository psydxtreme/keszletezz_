import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router: Router ) {
  }

  termek() {
    this.router.navigate(['/termek-lista']);  
  }

  raktar() {
    this.router.navigate(['/raktar']);
  }
}
