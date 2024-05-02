"use server"
export async function getById(id: number) {
    const response = await fetch(`http://localhost:8080/usuario/${id}`)

    if (!response.ok) {
        throw new Error('Usuario não encontrado')
    }

    return await response.json()
}