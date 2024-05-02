'use server'

export async function getPratos() {
    const resp = await fetch(`${process.env.API_BASE_URL}/prato`, { next: { revalidate: 0 } });
    return await resp.json()
}