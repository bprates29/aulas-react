import Evento from "@/core/Evento";
import Entrada from "./entrada";
import { useState } from "react";
import Botao from "./botao";
import { stringParaData } from "@/utils/converters";

interface FormularioProps {
    evento: Evento
    eventoMudou?: (evento: Evento) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const evento = props.evento
    const id = evento?.id
    const [nome, setNome] = useState(evento.nome)
    const [data, setData] = useState(evento.data)
    const [descricao, setDescricao] = useState(evento.descricao)
    const [status, setStatus] = useState(evento.status)

    return (
        <div>
            {id ? (<Entrada texto="id" valor={id} somenteLeitura></Entrada>) : false}
            <Entrada texto="Nome" valor={nome} onChange={setNome}></Entrada>
            <Entrada texto="Data" tipo="date" valor={stringParaData(data)} onChange={setData}></Entrada>
            <Entrada texto="Descrição" valor={descricao} onChange={setDescricao}></Entrada>
            <Entrada texto="Status" valor={status} onChange={setStatus}></Entrada>
            <div className="flex justify-end mt-4">
                <Botao className="mr-3" cor="bg-gradient-to-r from-blue-500 to-blue-700"
                onClick={() => props.eventoMudou?.(
                    new Evento(id, nome, data, descricao, status))}>
                {id ? 'Alterar' : 'Salvar'}
            </Botao>
            <Botao className="mr-3" cor="bg-gradient-to-r from-gray-500 to-gray-700"
            onClick={props.cancelado}>
                Cancelar
            </Botao>
            </div>
        </div>
    )
}