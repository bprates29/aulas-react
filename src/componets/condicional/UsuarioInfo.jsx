import React from "react";
import If from "./If";


const usuarioInfo = props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Anonimo</strong>!
            </If>
        </div>
    )
}
export default usuarioInfo