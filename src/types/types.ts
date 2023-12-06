type ItemLista = {
  id: number
  nome: string
  concluida: boolean
}

type CadastroType = {
  nome: string
  email: string
  senha: string
}

type DadoAlunoType = {
  matricula: number
  nome: string
  idade: number
  curso: string
  rendimentoEscolar: Object
}

export type {
  ItemLista,
  CadastroType,
  DadoAlunoType
}