'use client'

import { Select, SelectItem } from "@nextui-org/react";
import { ChangeEventHandler } from "react";

interface PratoSelectProps  {
    pratos: Array<Prato>,
    onChange?: ChangeEventHandler
    
}

export function PratoSelect({pratos, onChange}: PratoSelectProps) {

    return (
        <Select
            items={pratos}
            label="Pratos"
            variant="bordered"
            name="prato"
            placeholder="Selecione um prato"
            labelPlacement="outside"
            onChange={onChange}
        >
            {(prato) => 
                <SelectItem key={prato.id}>
                    {prato.nome}
                </SelectItem>
            }
        </Select>
    )
}