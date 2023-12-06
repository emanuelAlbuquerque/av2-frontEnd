import { Component } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { CadastroType } from 'src/types/types'

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  public form: FormGroup = {} as FormGroup
  public cadastro = {
    email: '',
    senha: ''
  }
  public estaAutenticado = false

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [''],
      senha: [''],
    })
  }

  validarCampos(email: string, senha: string) {
    if (!email || email.trim().length === 0) return true
    if (!senha || senha.trim().length === 0) return true

    return false
  }

  autenticar(event: Event) {
    const { email, senha } = this.form.value

    console.log(email, senha)

    const error = this.validarCampos(email, senha)

    if (!error) {
      this.cadastro = {
        email,
        senha
      }

      this.estaAutenticado = true
      this.form.reset()
    }

    event.preventDefault()
  }

  receberSolicitacao(deslogar: boolean) {
    if (deslogar) {
      this.estaAutenticado = false
      this.form.reset()
      this.cadastro.email = ''
      this.cadastro.senha = ''
    }
  }
}
