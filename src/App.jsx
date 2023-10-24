import React from 'react';
import Compo from './componets/primeiro/Componente'
import ComParametro from './componets/segundo/ComParametro';
import Fragmento from './componets/erros/Fragmentos';
import Familia from './componets/filhos/Familia';
import FamiliaMembro from './componets/filhos/FamiliaMembro';
import ListaEventos from './componets/repeticao/ListaEventos';
import ParOuImpar from './componets/condicional/ParOuImpar';
import UsuarioInfo from './componets/condicional/UsuarioInfo';
import UsuarioInfoElse from './componets/condicional/UsuarioInfoElse';
import DiretaPai from './componets/comunicacao/DiretaPai';
import IndiretaPai from './componets/comunicacao/IndiretaPai';
import Input from './componets/controlado/Input';
import StateEffects from './componets/hooks/StateEffects';
import UseRef from './componets/hooks/UseRef';
import UseMemo from './componets/hooks/UseMemo';
import UseCallback from './componets/hooks/UseCallback';

export default () => (
    <div>
        <UseCallback></UseCallback>

        <UseMemo/>

        <UseRef/>

        <StateEffects></StateEffects>



        <Input/>

        <IndiretaPai></IndiretaPai>


        <DiretaPai></DiretaPai>

        <UsuarioInfoElse usuario={{nome:'Bernardo 123'}}></UsuarioInfoElse>

        <UsuarioInfo usuario={{nome:'Bernardo'}}></UsuarioInfo>
        <UsuarioInfo usuario={{email:'Bernardo'}}></UsuarioInfo>

        <ParOuImpar numero={121}></ParOuImpar>
        <ParOuImpar numero={120}></ParOuImpar>
        <ListaEventos></ListaEventos>

        <Familia sobrenome="Silva">
            <FamiliaMembro nome="Bernardo"/>
            <FamiliaMembro nome="Bernardo 2"/>
            <FamiliaMembro nome="Bernardo 3"/>
        </Familia>
        <Fragmento></Fragmento>
        <ComParametro nome="Upf em Dança"
            data="10/10/2023" />
        <Compo></Compo>
    </div>
);