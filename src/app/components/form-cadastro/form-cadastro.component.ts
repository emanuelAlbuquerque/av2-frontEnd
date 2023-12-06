import { Component } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { CadastroType } from 'src/types/types'

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss']
})
export class FormCadastroComponent {
  public form: FormGroup = {} as FormGroup
  public error: boolean = false
  public cadastro: CadastroType = {
    email: '',
    nome: '',
    senha: ''
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [''],
      email: [''],
      senha: [''],
    })
  }

  cadastrar(event: Event) {
    const { nome, email, senha } = this.form.value

    this.error = this.validarCampos(nome, email, senha)

    if (!this.error) {
      this.cadastro = {
        nome,
        email,
        senha
      }

      this.form.reset()
    }

    event.preventDefault()
  }

  validarCampos(nome: string, email: string, senha: string) {
    if (!nome || nome.trim().length === 0) return true
    if (!email || email.trim().length === 0) return true
    if (!senha || senha.trim().length === 0) return true

    return false
  }
}
