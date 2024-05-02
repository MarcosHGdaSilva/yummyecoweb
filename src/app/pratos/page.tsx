import NavBar from "@/components/NavBar";
import { PratoItem } from "./PratoItem";
import { Button } from "@nextui-org/button";
import { Plus } from "lucide-react";
import { getPratos } from "../actions/pratos/getPratos";
import Link from "next/link";

interface Prato {
  id: number,
  nome: String,
  valor: number
}

export default async function Pratos() {
  const pratos: Prato[] = await getPratos()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar active="pratos"/>
      
      <section className="flex flex-col gap-2 bg-slate-800 min-w-[600px] mt-4 p-2 rounded">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Pratos Cadastrados</h2>
          <Link href="/pratos/new">
            <Button color="primary" startContent={<Plus />}>novo prato</Button>
          </Link>
        </div>
        
        {pratos.map(prato =>
          <PratoItem prato={prato} />
        )}
        
      </section>

    </main>
  );
}
