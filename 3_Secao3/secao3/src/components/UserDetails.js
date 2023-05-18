import React from 'react'

function UserDetails({ pessoas }) {
    return (
        <div>
            {console.log(pessoas)}
            {pessoas.map(p => {
                return p.idade >= 18 ? (
                    <>
                        <h3>pessoas aprovadas</h3>
                        <ul>
                            <li>{p.nome}</li>
                            <li>{p.idade}</li>
                            <li>{p.profissao}</li>
                        </ul>
                    </>
                ) : (
                    <>
                        <h3>pessoas não aprovadas</h3>
                        <ul>
                            <li>{p.nome}</li>
                            <li>{p.idade}</li>
                            <li>{p.profissao}</li>
                        </ul>
                    </>
                )
            }
            )}
        </div>
    )
}

export default UserDetails