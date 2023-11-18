'use client'
import Layout from "@/components/eventos/layout";
import Tabela from "@/components/eventos/tabela";
import Evento from "@/core/Evento";

export default function Eventos() {

    const eventos = Evento.geraEventosMock()

    function eventoSelecionado(evento: Evento) {
        console.log(evento.nome)
    }

    function eventoExcluido(evento: Evento) {
        console.log(evento.nome)
    }

    return(
        <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-800
        text-write
        `}>
            <Layout titulo="Cadastro de Eventos">
                <Tabela eventos={eventos}
                eventoExcluido={eventoExcluido}
                eventoSelecionado={eventoSelecionado}></Tabela>
            </Layout>
        </div>
    )
}