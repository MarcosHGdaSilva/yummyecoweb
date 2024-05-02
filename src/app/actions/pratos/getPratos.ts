'use server'

export async function getPratos() {
    const resp = await fetch(`${process.env.API_BASE_URL}/prato/`, { next: { revalidate: 0 } });
    //const resp = await fetch("https://localhost:3001/pratos", { next: { revalidate: 0 } });
    return await resp.json()
}