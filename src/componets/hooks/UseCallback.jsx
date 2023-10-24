import React, { useCallback, useState } from "react";

const Button = React.memo(({handleClick, name}) => {
    console.log(`${name} renderizado`)
    return <button onClick={handleClick}>{name}</button>
})

const Counter = () => {
    console.log('Contador Renderizado')
    const [cont1, setCont1] = useState(0)
    const [cont2, setCont2] = useState(0)

    const memorizadoSetCont1 = useCallback(() => setCont1(cont1+1), [cont1])
    const memorizadoSetCont2 = useCallback(() => setCont2(cont2+1), [cont2])

    return (
        <div style={{marginBottom: '20px'}}>
            <h3>{cont1} | {cont2}</h3>
            <Button handleClick={memorizadoSetCont1}
            name="Botão1"></Button>
            <Button handleClick={memorizadoSetCont2}
            name="Botão2"></Button>

        </div>
    )
}
export default Counter