export class EmailError extends Error {
  constructor() {
    super('Insira um E-mail válido')
  }
}
