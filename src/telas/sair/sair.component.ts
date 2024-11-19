import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'sair-app',
  templateUrl: './sair.component.html',
  styleUrls: ['./sair.component.css'],
  standalone: true, // Indica que o componente é autônomo
  imports: [RouterOutlet], // Importa o RouterOutlet para uso de <router-outlet>
  
})
export class SairComponent {}
