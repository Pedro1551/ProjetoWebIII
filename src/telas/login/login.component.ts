import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // Indica que o componente é autônomo
  imports: [RouterOutlet], // Importa o RouterOutlet para uso de <router-outlet>
  templateUrl: './login.component.html', // Caminho para o template HTML
  styleUrls: ['./login.component.css'], // Corrigido para plural
})
export class LoginComponent {
  imageUrl: string = 'https://github.com/TheMatheusVieira/ColaboreNet/blob/main/logoCN.jpeg?raw=true';
}
