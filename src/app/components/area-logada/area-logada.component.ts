import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-area-logada',
  templateUrl: './area-logada.component.html',
  styleUrls: ['./area-logada.component.scss']
})
export class AreaLogadaComponent {
  @Input() email: string = ''
  @Output() deslogar = new EventEmitter<boolean>()

  enviarSolicitacaoDeslogar() {
    this.deslogar.emit(true)
  }
}
