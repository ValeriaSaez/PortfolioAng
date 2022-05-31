import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AppPortfolio';
  estaLogueado = false;

  validarInicioSesion() {
    console.log('hola!');
    if()
    this.estaLogueado = true;
  }
}
