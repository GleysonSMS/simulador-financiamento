import { ImovelComponent } from './cliente/imovel/imovel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './cliente/menu/menu.component';
import { ProponenteComponent } from './cliente/proponente/proponente.component';

const routes: Routes = [
  {path:'', redirectTo:'inicial', pathMatch:'full'},
  {path:'proponente', component:ProponenteComponent},
  {path:'inicial', component:MenuComponent},
  {path:'imovel', component:ImovelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
