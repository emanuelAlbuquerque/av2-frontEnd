import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ContadorComponentComponent } from './components/contador-component/contador-component.component'
import { ListItemsComponent } from './components/list-items/list-items.component'
import { MatIconModule } from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms'
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component'
import { ControleAcessoComponent } from './components/controle-acesso/controle-acesso.component'
import { ComponentePaiComponent } from './components/componente-pai/componente-pai.component'
import { ComponenteFilhoComponent } from './components/componente-filho/componente-filho.component'
import { FormLoginComponent } from './components/form-login/form-login.component'
import { AreaLogadaComponent } from './components/area-logada/area-logada.component'
import { HttpClientModule } from '@angular/common/http'
import { DadosAlunosComponent } from './components/dados-alunos/dados-alunos.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponentComponent,
    ListItemsComponent,
    FormCadastroComponent,
    ControleAcessoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    FormLoginComponent,
    AreaLogadaComponent,
    DadosAlunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
