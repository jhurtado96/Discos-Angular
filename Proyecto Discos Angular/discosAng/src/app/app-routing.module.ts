import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioDiscoComponent } from './pages/formulario-disco/formulario-disco.component';
import { TemplateComponent } from './pages/template/template.component';
import { VistaDiscoComponent } from './pages/vista-disco/vista-disco.component';

const routes: Routes = [{path:"form",component:FormularioDiscoComponent},{path:"vista",component:VistaDiscoComponent},{path:"template",component:TemplateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
