export default function ComParametro(props) {
    return (
        <div>
            <h2>Evento: </h2>
            <p> { props.nome }</p>
            <p>Que ocorre dia {props.data}</p>
        </div>
    )
}