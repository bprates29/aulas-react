import React, { useState } from "react";

const Input = props => {
    const [valor, setValor] = useState('Inicial')

    return (
        <div>
            <input value={valor}
            onChange={e => setValor(e.target.value)}/>
        </div>
    )
}
export default Input