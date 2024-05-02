import NavBar from "@/components/NavBar";
import { PratoSelect } from "@/components/PratoSelect";
import { Button, Pagination } from "@nextui-org/react";
import { Filter, Plus } from "lucide-react";
import Link from "next/link";
import { getPratos } from "../actions/pratos/getPratos";
import { get } from "../actions/usuarios/get";
import { UsuarioItem } from "./UsuarioItem";

export default async function Usuarios() {
  const usuarios: Array<Usuario> = await get()
  const pratos: Array<Prato> = await getPratos()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="usuarios" />

      <section className="flex flex-col gap-4 bg-slate-800 w-4/5 max-w-[1024px] mt-4 p-6 rounded">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Usuarios</h2>
          <Link href="/usuarios/new">
            <Button color="primary" startContent={<Plus />}>novo usuario</Button>
          </Link>
        </div>

        <div className="flex gap-4 items-center border-1 border-white/10 p-4 rounded">
          <Filter size={44} />
          <PratoSelect pratos={pratos} />
        </div>

        {usuarios.map(usuario =>
          <UsuarioItem usuario={usuario} />
        )}

      </section>

      <Pagination isCompact showControls total={10} initialPage={1} className="mt-6" />

    </main>


  );
}
