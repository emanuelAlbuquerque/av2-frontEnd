import { Component } from '@angular/core'
import { ItemLista } from 'src/types/types'
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent {
  public listItems: ItemLista[] = [
    { id: 1, nome: "Maçãs", concluida: false },
    { id: 2, nome: "Bananas", concluida: false },
    { id: 3, nome: "Arroz", concluida: false },
    { id: 4, nome: "Feijão", concluida: false },
    { id: 5, nome: "Leite", concluida: false }
  ]
  public form: FormGroup = {} as FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['']
    })
    // Cria o grupo do formulário com todos os campos que terá dentro do formulário
  }

  adicionarItem() {
    if (this.form.get('nome')?.value) {
      const updatedList = [...this.listItems, {
        id: this.listItems.length > 0 ? this.listItems?.pop()?.id as number + 1 : 0,
        nome: this.form.get('nome')?.value,
        concluida: false
      }]

      this.listItems = updatedList

      this.form.reset()
    }
  }

  removerItem(id: number) {
    console.log(id)
    const updatedList = this.listItems.filter(item => item.id !== id)

    this.listItems = updatedList
  }

  concluirItem(id: number) {
    return this.listItems.forEach(item => item.id === id ? item.concluida = true : item)
  }
}
