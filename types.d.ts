interface Prato {
    id: number,
    nome: string,
    valor: number
}

interface Usuario {
    id: number,
    nome: string,
    email: string,
    senha: string,
    prato: Prato
}