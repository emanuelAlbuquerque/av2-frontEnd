import { Component } from '@angular/core'

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.scss']
})
export class ComponentePaiComponent {
  public listaItems: string[] = ['Mouse', 'Monitor', 'Teclado', 'Processador']
}
