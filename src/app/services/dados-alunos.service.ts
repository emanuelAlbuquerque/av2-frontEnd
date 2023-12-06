import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { DadoAlunoType } from 'src/types/types'

@Injectable({
  providedIn: 'root'
})
export class DadosAlunosService {
  private url = 'http://localhost:3000/dadosEstudantes'

  constructor(private httpClient: HttpClient) { }

  listarDadosEstudantes(): Observable<DadoAlunoType[]> {
    return this.httpClient.get<DadoAlunoType[]>(this.url)
  }
}
