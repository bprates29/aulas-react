import React from "react";

const comFilho = props => {
    return (
        <div>
            <span> Produto: {props.produto} - </span>
            <span> Valor: R${props.preco.toFixed(2)} -</span>
            <span> Quantidade: {props.quantidade}</span>
        </div>
    )
}
export default comFilho