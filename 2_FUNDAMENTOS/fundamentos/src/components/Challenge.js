const Challenge = () => {
    const a = 15
    const b = 17

    const somar = (e) => {
        const soma = a + b
        console.log(soma)
    }

    return(
        <div>
            <p>Primeiro Valor: {a}</p>       
            <p>Segundo Valor: {b}</p>
            <button onClick={somar}>Somar</button>
        </div>
    )
}

export default Challenge;

