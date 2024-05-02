"use client"

import DropDownActions from "@/components/DropDownActions";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { destroy } from "../actions/usuarios/destroy";
import { ArrowDown, ArrowUp } from "lucide-react";


interface UsuarioItemProps{
    usuario : Usuario
}

export function UsuarioItem({ usuario }: UsuarioItemProps){
    const router = useRouter()

    function handleDelete(){
        toast.promise(
            destroy(usuario.id),
             {
               loading: "apagando...",
               success: "apagado com sucesso",
               error: "erro ao apagar",
             }
           );

    }

    return (
        <div className="flex justify-between p-2 hover:bg-slate-600 rounded cursor-pointer">
            <div className="flex gap-2 items-center">
                <span>{usuario.email}</span>
                <span>{usuario.nome}</span>
            </div>
            <div className="flex gap-2 items-center">
                <DropDownActions 
                    onDelete={handleDelete} 
                    onEdit={() => toast("não implementado")} 
                />
            </div>
        </div>
    )
}