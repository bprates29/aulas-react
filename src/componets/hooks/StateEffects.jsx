import React from "react";

const TestUseEffect = props => {
    const [num, setNum] = React.useState(1)
    const [status, setStatus] = React.useState('Impar')

    React.useEffect(
        function () {
            setStatus(num % 2 === 0 
                ? 'Par'
                : 'Impar')
        }, [num]
    )

    

    return (
        <div>
            <h3>Status: <span style={ {color: status === 'Par'
            ? 'green'
            : 'red'} }> {status} </span>
            </h3>
            
            <input type="number" 
            value={num}
            onChange={e => setNum(e.target.value)} />
        </div>
    )
}
export default TestUseEffect