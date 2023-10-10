import React from "react";
import DiretaFilho from "./DiretaFilho"

const comPai = props => {
    return (
        <div>
            <DiretaFilho produto='Bola'
            preco={12.9} quantidade={10}/>
            <DiretaFilho produto='Boneca'
            preco={19.9} quantidade={30}/>
        </div>
    )
}
export default comPai