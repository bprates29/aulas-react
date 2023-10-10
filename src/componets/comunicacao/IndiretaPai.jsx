import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho"

const IndPai = props => {
    const [produto, setProduto] = useState('N/I') 
    const [preco, setPreco] = useState(0) 
    const [quantidade, setQuantidade] = useState(0) 

    function fornecerProdutos(produto, preco, quantidade) {
        setProduto(produto)
        setPreco(preco)
        setQuantidade(quantidade)
    }
    return (
        <div>
            <h2><span> Produto: {produto} - </span>
            <span> Valor: R${preco.toFixed(2)} -</span>
            <span> Quantidade: {quantidade}</span></h2>
            <IndiretaFilho quandoClicar={fornecerProdutos}></IndiretaFilho>
        </div>
    )
}
export default IndPai