import NavBar from "@/components/NavBar";
import { getPratos } from "@/app/actions/pratos/getPratos";
import { Form } from "./Form";


export default async function CadastrarMovimentacoes() {
    const pratos = await getPratos()

    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="usuarios" />

            <Form pratos={pratos} />
            
        </main>


    )
}