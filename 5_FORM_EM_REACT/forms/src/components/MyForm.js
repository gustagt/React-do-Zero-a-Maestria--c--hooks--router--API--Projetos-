import './MyForm.css'
import { useState } from "react"

const MyForm = ({ user }) => {

    const [name, setName] = useState(user.name ? user.name : "");
    const [email, setEmail] = useState(user.email ? user.email : "");
    const [bio, setBio] = useState(user.bio ? user.bio : "");
    const [prof, setProf] = useState(user.prof ? user.prof : "");

    // gerenciamento de dados input
    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        // reseta o evento  
        e.preventDefault();

        console.log(name)
        console.log(email)
        console.log(bio)
        console.log(prof)

        // envia

        // limpa os campos
        setEmail('')
        setName("")
        setBio("")
        setProf("")
    }


    return (
        // gerenciamento de dados


        <div>
            {/* criação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name='name' placeholder='Digite o seu nome' onChange={handleName} value={name} />
                </div>
                {/* label envolvendo input */}

                <label htmlFor="">
                    <span>Email:</span>
                    {/* gerenciamento de dados inline */}
                    <input type="email" name="email" placeholder='Digite o seu e-mail' onChange={(e) => { setEmail(e.target.value) }} value={email} />
                </label>

                <label htmlFor="">
                    <span>Bio: </span>
                    <textarea name="bio" placeholder='Descreva sua bio' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>

                <label htmlFor="">
                    <span>Profissão:</span>
                    <select name="profissao" value={prof} onChange={(e) => (setProf(e.target.value))}>
                        <option value="adm">adm</option>
                        <option value="eng">engenheiro</option>
                        <option value="dev">desenvolvedor</option>
                    </select>
                </label>
                <input type="submit" value='enviar' />
            </form>
        </div>
    )
}

export default MyForm