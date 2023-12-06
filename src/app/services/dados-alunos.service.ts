import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DadosAlunosService {
  private url = 'http://localhost:3000/dadosEstudantes'

  constructor(private httpClient: HttpClient) { }

  listarDadosEstudantes(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url)
  }
}
