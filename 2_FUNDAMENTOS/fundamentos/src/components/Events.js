const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
        console.log("ativou o evento.");
    }

    const renderSomething = (x) => {
        if (x){
            return <h1>Renderizar bloco 1</h1>
        }
        else {
            return <h1>Renderizar bloco 2</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('clicou!')}>Clique aqui tb</button>
                <button onClick={() => {
                    if(true){
                        console.log("Isso não deveria existir.");
                    }
                }}> Clique aqui tb tb</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;
