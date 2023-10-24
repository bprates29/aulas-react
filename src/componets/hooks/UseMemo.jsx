import React, { useMemo, useState } from "react";

function sum(a1, a2) {
    const process = Date.now() + 2000
    //while (Date.now() < process) {}
    return a1+a2
}

export default function UseMemo() {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)
    const soma = useMemo(
        () => sum(parseInt(n1), parseInt(n2)), 
        [n1, n2])



    return <div>
        <div>N1: 
            <input type="number" value={n1} onChange={
                e => setN1(e.target.value)
            }></input>
        </div>
        <div>N2: 
            <input type="number" value={n2} onChange={
                e => setN2(e.target.value)
            }></input>
        </div>
        <div>N3: 
            <input type="number" value={n3} onChange={
                e => setN3(e.target.value)
            }></input>
        </div>
        <h3>Valor: {soma}</h3>
    </div>
}