import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedComponent } from '../feed/feed.component';
import { CadastroComponent } from '../telas/cadastro/cadastro.component';
import { LoginComponent } from '../telas/login/login.component';
import { SairComponent } from '../telas/sair/sair.component';

export const routes: Routes = [
    { path: '', redirectTo: 'cadastro', pathMatch: 'full' }, // Rota inicial redireciona para "cadastro"
    { path: 'cadastro', component: CadastroComponent },      // Rota de Cadastro
    { path: 'login', component: LoginComponent },            // Rota de Login
    { path: 'feed', component: FeedComponent },              // Rota de Feed
    { path: 'sair', component: SairComponent },              // Rota de Sair (opcional)
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // Importa o sistema de rotas
    exports: [RouterModule],                // Exporta o RouterModule
})
export class AppRoutes {}
