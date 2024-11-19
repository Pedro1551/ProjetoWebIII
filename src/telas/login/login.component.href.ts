import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-href',
  standalone: true,
  imports: [RouterModule],  // Importa o RouterModule
  template: `
    <h1>Login</h1>
    <nav>
      <ul>
        <li><a href="/">Login</a></li>
        <li><a href="/sobre">Sobre</a></li>
      </ul>
    </nav>
  `,
})
export class LoginHrefComponent {}
