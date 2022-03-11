import { ImovelComponent } from './cliente/imovel/imovel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './cliente/menu/menu.component';
import { ProponenteComponent } from './cliente/proponente/proponente.component';
import { ReprovadoComponent } from './cliente/reprovado/reprovado.component';
import { AprovadoComponent } from './cliente/aprovado/aprovado.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicial', pathMatch: 'full' },
  { path: 'proponente', component: ProponenteComponent },
  { path: 'inicial', component: MenuComponent },
  { path: 'imovel', component: ImovelComponent },
  { path: 'aprovado', component: AprovadoComponent },
  { path: 'reprovado', component: ReprovadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
