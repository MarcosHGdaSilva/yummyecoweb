"use client"

import { update } from "@/app/actions/pratos/update";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@nextui-org/button";
import { Autocomplete, Input } from "@nextui-org/react";
import Link from "next/link";
import { useFormState } from "react-dom";

const initialState = {
    message: '',
}


export function EditForm(prato: Pratos) {
    const [state, formAction] = useFormState(update, initialState)
    return (
        <form action={formAction} className="flex flex-col gap-3 m-6 bg-slate-900 rounded p-6 min-w-[500px]">
            <h2 className="text-2xl font-bold">Editar Prato {prato.nome}</h2>
            <input type="hidden" name="id" value={prato.id} />
            <Input
                key="nome"
                label="Nome"
                name="nome"
                defaultValue={prato.nome}
                variant="bordered"
                labelPlacement={"outside"}
                isInvalid={state?.message != ''}
                errorMessage={state?.message}
            />

            <Input
                key="valor"
                label="Valor"
                name="valor"
                variant="bordered"
                defaultValue={prato.valor}
                labelPlacement={"outside"}
                isInvalid={state?.message != ''}
                errorMessage={state?.message}
            />

            <div className="flex justify-around mt-4">
                <Link href="/pratos">
                    <Button variant="bordered" >cancelar</Button>
                </Link>
                <SubmitButton></SubmitButton>
            </div>
        </form>
    )
}