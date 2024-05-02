'use server'

export async function get(prato?: any, nome?: string/*, page?: number*/) {

    const queryParam = new URLSearchParams()
    // if (prato) queryParam.append('prato', prato)
    // queryParam.append('page', page.toString())
    const url = `${process.env.API_BASE_URL}/usuario?${queryParam.toString()}`
    const resp = await fetch(url, { next: { revalidate: 0 } })
    const json = await resp.json()
    return json
}