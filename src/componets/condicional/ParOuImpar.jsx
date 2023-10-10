import React from "react";

const parOuImpar = props => {
    return (
        <div>
            <strong>{props.numero}</strong>
            {props.numero % 2 === 0
            ? <span> é Par!</span>
            : <span> é Impar!</span>}
        </div>
    )
}

export default parOuImpar