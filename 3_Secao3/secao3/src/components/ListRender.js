import React, { useState } from 'react'

const ListRender = () => {

    const [list] = useState(['Matheus', 'Pedro', 'Josias'])

    const [users, setUsers] = useState([
        { id: 1, name: "gusta", age: 21 },
        { id: 2, name: "mina", age: 22 },
        { id: 3, name: "left", age: 31 }
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div>
            <ul>

                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}, {user.age}</li>
                ))}
            </ul>

            <button onClick={deleteRandom}>Deletar</button>
        </div>
    )
}

export default ListRender