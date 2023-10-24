import React, { useEffect, useRef, useState } from "react";

export default function UseRef() {
    const [value1, setValue1] = useState("1")
    const [value2, setValue2] = useState("2")
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)

    useEffect (
        () =>
        inputRef2.current.focus(),
        [value1]
    )
    useEffect (
        () =>
        inputRef1.current.focus(),
        [value2]
    )

    const count = useRef(0)
    count.current++

    return(<div>
        <h3>Contador: {count.current}</h3>
        <input ref={inputRef1} value={value1} onChange={
            e => setValue1(e.target.value)
        }/>
        <input ref={inputRef2} value={value2} onChange={
            e => setValue2(e.target.value)
        }/>
    </div>)
}