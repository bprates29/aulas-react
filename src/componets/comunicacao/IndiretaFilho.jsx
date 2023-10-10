import React from "react";

const indFilho = props => {
    return (
        <div>
            <h2>Filho</h2>
            <button onClick={e => props.quandoClicar('bola', 12.9, 10)}>
                Enviar Informações
            </button>
        </div>
    )
}
export default indFilho