'use client'

import { create } from "@/app/actions/usuarios/create";
import { PratoSelect } from "@/components/PratoSelect";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@nextui-org/button";
import { Input, Radio, RadioGroup, Select, SelectItem } from "@nextui-org/react";
import { ArrowDown, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";


const initialState = {
    message_nome: '',
    message_valor: '',
}


export function Form(props: { pratos: Array<Prato> }) {
    const { pratos } = props

    const [state, formAction] = useFormState(create, initialState)
    return (
        <form action={formAction} className="flex flex-col gap-3 m-6 bg-slate-900 rounded p-6 min-w-[500px]">
            <h2 className="text-2xl font-bold">Nova Movimentação</h2>
            <Input
                key="nome"
                label="Nome"
                name="nome"
                variant="bordered"
                labelPlacement={"outside"}
                isRequired={true}
                isInvalid={state?.message_nome != ''}
                errorMessage={state?.message_nome}
            />

            <Input
                type="number"
                pattern="[0-9]*"
                key="valor"
                label="Valor"
                name="valor"
                variant="bordered"
                labelPlacement={"outside"}
                isRequired={true}
                startContent={
                    <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">R$</span>
                    </div>
                }
                isInvalid={state?.message_rg != ''}
                errorMessage={state?.message_rg}
            />

            <PratoSelect pratos={pratos} />

            <RadioGroup
                name="tipo"
                label="Tipo"
                orientation="horizontal"
            >
            </RadioGroup>

            <div className="flex justify-around mt-4">
                <Link href="/usuarios">
                    <Button variant="bordered" >cancelar</Button>
                </Link>
                <SubmitButton></SubmitButton>
            </div>
        </form>
    )
}