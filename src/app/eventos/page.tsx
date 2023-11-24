'use client'
import Botao from "@/components/eventos/botao";
import Formulario from "@/components/eventos/formulario";
import Layout from "@/components/eventos/layout";
import Tabela from "@/components/eventos/tabela";
import Evento from "@/core/Evento";
import { useState } from "react";

export default function Eventos() {
    const [evento, setEvento] = useState<Evento>(Evento.vazio())
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const eventos = Evento.geraEventosMock()

    function eventoSelecionado(evento: Evento) {
        setEvento(evento)
        setVisivel('form')
    }

    function novoEvento() {
        setEvento(Evento.vazio())
        setVisivel('form')
    }

    function eventoExcluido(evento: Evento) {
        console.log(evento.nome)
    }

    function salvarEvento(evento: Evento) {
        console.log(evento)
        setVisivel('tabela')
    }

    return(
        <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-800
        text-write
        `}>
            <Layout titulo="Cadastro de Eventos">
                {visivel === 'tabela' 
                ? (
                    <>
                    <div className="flex justify-end">
                    <Botao className="mb-4" 
                    cor="bg-gradient-to-r from-green-500 to-green-700"
                    onClick={() => novoEvento()}>
                        Novo Evento
                    </Botao>
                </div>
                <Tabela eventos={eventos}
                eventoExcluido={eventoExcluido}
                eventoSelecionado={eventoSelecionado}></Tabela>
                </>)
                :(
                <Formulario evento={evento}
                    eventoMudou={salvarEvento}
                    cancelado={() => setVisivel('tabela')}></Formulario>
                )}
                
                
            </Layout>
        </div>
    )
}