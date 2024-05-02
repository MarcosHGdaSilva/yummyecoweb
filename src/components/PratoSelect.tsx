'use client'

import { Select, SelectItem } from "@nextui-org/react";

interface CategoriaSelectProps  {
    categorias: Array<Prato>,
    
}

export function PratoSelect({pratos}: CategoriaSelectProps) {

    return (
        <Select
            items={pratos}
            label="Pratos"
            variant="bordered"
            name="prato"
            placeholder="Selecione um prato"
            labelPlacement="outside"
        >
            {(prato) => 
                <SelectItem key={prato.id}>
                    {prato.nome}
                </SelectItem>
            }
        </Select>
    )
}