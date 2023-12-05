import { Component } from '@angular/core'

@Component({
  selector: 'app-contador-component',
  templateUrl: './contador-component.component.html',
  styleUrls: ['./contador-component.component.scss']
})
export class ContadorComponentComponent {
  public valor: number = 0

  adicionarValor() {
    this.valor = this.valor + 1
  }

  diminuirValor() {
    if (this.valor > 0 && this.valor !== 0) {
      this.valor--
    }
  }
}
