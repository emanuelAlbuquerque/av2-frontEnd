import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.scss']
})
export class ComponenteFilhoComponent {
  @Input() listaItems: string[] = []
}
