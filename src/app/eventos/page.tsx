import Evento from "@/core/Evento";
import Layout from "../components/eventos/layout";
import Tabela from "../components/eventos/tabela";

export default function Eventos() {
    const eventos = Evento.gerarMocks()

    return (
        <div className={`
            flex justify-center items-center h-screen
            bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900
            text-white
        `}>
            <Layout titulo="Cadastro de eventos">
                <Tabela eventos={eventos}></Tabela>
            </Layout>
        </div>
    )
}
