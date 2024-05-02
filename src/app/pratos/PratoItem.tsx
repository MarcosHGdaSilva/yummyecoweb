"use client"

import DropDownActions from "@/components/DropDownActions";
import { create } from "domain";
import { toast } from "react-hot-toast";
import { destroy } from "../actions/pratos/destroy";
import { useRouter } from "next/navigation";

interface PratoItemProps {
    prato: Prato
}

export function PratoItem({ prato }: PratoItemProps) {
    const router = useRouter()

    function handleDelete() {
        toast.promise(
            destroy(prato.id),
            {
                loading: "apagando...",
                success: "apagado com sucesso",
                error: "erro ao apagar",
            }
        );
    }

    return (
        <div className="flex justify-between p-2">
            <div className="flex gap-2 items-center">
                <span>{prato.nome}</span>
            </div>
            <DropDownActions
                onEdit={ () => router.push(`/pratos/${prato.id}`) }
                onDelete={handleDelete}
            />
        </div>
    )
}