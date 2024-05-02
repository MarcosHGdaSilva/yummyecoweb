'use server'

export async function getById(id: number) {
    const resp = await fetch(`${process.env.API_BASE_URL}/prato/${id}`, { next: { revalidate: 0 } })

    if (!resp.ok){
        throw new Error("prato não encontrado")
    }

    return await resp.json()
}