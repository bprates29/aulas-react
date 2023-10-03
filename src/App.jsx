import React from 'react';
import Compo from './componets/primeiro/Componente'
import ComParametro from './componets/segundo/ComParametro';
import Fragmento from './componets/erros/Fragmentos';

export default () => (
        <div>
            <Componente min={12} max={20}></Componente>
            <Fragmento></Fragmento>
            <ComParametro nome="Upf em Dança"
                data="10/10/2023" />
            <Compo></Compo>
        </div>
);