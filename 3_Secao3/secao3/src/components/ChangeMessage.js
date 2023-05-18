import React from 'react'

function ChangeMessage({ handleMessage }) {
    const lista = ['Oi', 'Ola', 'oi to bem']

    return (<div>
        <button onClick={() => { handleMessage(lista[0]) }}>ChangeMessage 1</button>
        <button onClick={() => { handleMessage(lista[1]) }}>ChangeMessage 2</button>
        <button onClick={() => { handleMessage(lista[2]) }}>ChangeMessage 3</button>
    </div>
  )
}

export default ChangeMessage