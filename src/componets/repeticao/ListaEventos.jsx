import React from "react";
import eventos from "../../dados/eventos";

const ListaEventos = props => {
    const eventoLi = eventos.map(evento => {
        return (<li key={evento.id}>
            {evento.id}) {evento.nome} -
            {evento.data}</li>)
    }
    )
    return <div><ul style={ {listStyle: 'none'} }>
        {eventoLi}</ul></div>
}

export default ListaEventos