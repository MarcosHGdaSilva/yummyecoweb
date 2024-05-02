"use server"

import { redirect } from "next/navigation"

export async function create(prevState: any, formData: FormData){
    await new Promise( r => setTimeout(r, 2000))

    const date = formData.get("data");
    const partes = String(date).split('-');
    formData.set("data", partes[2] + '/' + partes[1] + '/' + partes[0]);
    
    const data = {
        nome: formData.get("nome"),
        rg: formData.get("rg"),
    }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }

    }
    const resp = await fetch(process.env.API_BASE_URL + "/usuario", options)

    if (resp.ok){
        redirect("/usuarios")
    }

    if(resp.status == 400){
        const messages = await resp.json()

        return {
            message_nome: messages.find( (m: any) => m.campo == "nome")?.mensagem || '',
            message_rg: messages.find( (m: any) => m.campo == "rg")?.mensagem || '',
        }
    }
    
}