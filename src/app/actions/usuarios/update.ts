"use server"
import { redirect } from "next/navigation"

export async function update(prevState: any, formData: FormData) {
    const data = {
        nome: formData.get('nome'),
        rg: formData.get('rg'),
    }
    const response = await fetch(`http://localhost:8080/usuario/${formData.get('id')}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok) {
        return {
            message: 'Erro ao atualizar categoria'
        }
    }

    if(response.ok){
        redirect('/usuarios')
    }
    
}