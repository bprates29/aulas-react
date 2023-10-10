import React from "react";
import If, {Else} from "./If"

const usuarioInfo = props => {
    const usuario = props.usuario || {}
    return (<div>
        <If test={usuario && usuario.nome}>
            Seja bem vindo {usuario.nome}
            <Else>Seja bem vindo anonimo</Else>
        </If>
    </div>)
}
export default usuarioInfo