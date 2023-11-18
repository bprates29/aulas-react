import Evento from "@/core/Evento";
import { IconeEdicao, IconeLixo } from "../icons/tabela";

interface TabelaProps {
    eventos: Evento[]
    eventoSelecionado?: (evento: Evento) => void
    eventoExcluido?: (evento: Evento) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.eventoSelecionado || props.eventoExcluido

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-3">id</th>
                <th className="text-left p-3">nome</th>
                <th className="text-left p-3">data</th>
                <th className="text-left p-3">descricao</th>
                <th className="text-left p-3">status</th>
                {exibirAcoes 
                ? <th className="text-center p-3">ações</th>
                : false}
            </tr>
        )
    }

    function renderDados() {
        return props.eventos?.map((evento, i) => {
            return (
                <tr key={evento.id}
                    className={`${i % 2 === 0 ? 'bg-indigo-200' : 'bg-indigo-100'}`}>
                    <td className="text-left p-3">{evento.id}</td>
                    <td className="text-left p-3">{evento.nome}</td>
                    <td className="text-left p-3">{evento.data}</td>
                    <td className="text-left p-3">{evento.descricao}</td>
                    <td className="text-left p-3">{evento.status}</td>
                    {exibirAcoes ? renderAcoes(evento) : false}
                </tr>
            )
        })
    }

    function renderAcoes(evento: Evento) {
        return (
            <td className="flex">
                <button onClick={() => props.eventoSelecionado?.(evento)}
                className={`flex justify-center items-center 
            text-green-600 rounded-full p-2 m-1
            hover:bg-gray-100`}>{IconeEdicao}</button>
                <button onClick={() => props.eventoExcluido?.(evento)}
                className={`flex justify-center items-center 
            text-red-600 rounded-full p-2 m-1
            hover:bg-gray-100`}>{IconeLixo}</button>
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`text-gray-100 
            bg-gradient-to-r from-indigo-500 to-indigo-800`}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderDados()}
            </tbody>
        </table>
    )
}