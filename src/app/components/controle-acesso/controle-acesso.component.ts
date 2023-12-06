import { Component } from '@angular/core'

@Component({
  selector: 'app-controle-acesso',
  templateUrl: './controle-acesso.component.html',
  styleUrls: ['./controle-acesso.component.scss']
})
export class ControleAcessoComponent {
  public acesso: string = ''

  permitirAcesso(acesso: string) {
    this.acesso = acesso
  }
}
