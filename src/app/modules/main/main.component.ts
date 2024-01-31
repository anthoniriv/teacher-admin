import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(private router: Router) {}

  get isRootRoute() {
    // Comprueba si la ruta actual es la raíz del módulo Main
    return this.router.url === '/main';
  }
}