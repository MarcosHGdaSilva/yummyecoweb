import { getById } from "@/app/actions/pratos/getById";
import NavBar from "@/components/NavBar";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { EditForm } from "./EditForm";

export default async function EditarPrato({params}: Params) {
    const {id} = params
    const prato = await getById(id)

    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="pratos" />

            <EditForm {...prato} />
            
        </main>
    )
}