import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ContadorComponentComponent } from './components/contador-component/contador-component.component'
import { ListItemsComponent } from './components/list-items/list-items.component'
import { MatIconModule } from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component'

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponentComponent,
    ListItemsComponent,
    FormCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
