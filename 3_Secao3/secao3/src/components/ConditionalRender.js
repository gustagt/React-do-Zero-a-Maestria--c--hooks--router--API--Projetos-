import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true)

    const [name, setName] = useState("Joao")
  return (
    <div>
        <h1>Isso sera exibido</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Se x for false, sim!</p>}
        <h1>If ternario</h1>
        {name === 'Joao' ? (
            <div><p>O nome é Joao</p></div>
        ) : (
            <div><p>O nome não é Joao</p></div>

        ) }

        <button onClick={() => setName('Marco')}>Muda o nome</button>
    </div>
  )
}

export default ConditionalRender