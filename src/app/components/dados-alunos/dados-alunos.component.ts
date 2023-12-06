import { Component } from '@angular/core'
import { DadosAlunosService } from 'src/app/services/dados-alunos.service'

@Component({
  selector: 'app-dados-alunos',
  templateUrl: './dados-alunos.component.html',
  styleUrls: ['./dados-alunos.component.scss']
})
export class DadosAlunosComponent {
  public listaDados: any[] = []

  constructor(private dadosAlunosService: DadosAlunosService) { }

  ngOnInit() {
    this.dadosAlunosService.listarDadosEstudantes().subscribe(value => (
      this.listaDados = value
    ))
  }

  calcularMediaGlobal(rendimentos: Object) {
    console.log(rendimentos)
    const notas = Object.values(rendimentos)
    const somaNotas = notas.reduce((total, nota) => total + nota, 0)

    return (somaNotas / notas.length).toFixed(2)
  }
}
