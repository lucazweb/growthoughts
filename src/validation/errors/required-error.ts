export class RequiredError extends Error {
  constructor() {
    super('Campo obrigatório')
  }
}
