import './Car.css'

const Car = ({carros}) => {
    return (
        <div>
            {carros.map((carro) => (
                <>
                <h2>Carro: {carro.modelo}</h2>
                <ul>
                    <li>Cor:{carro.cor}</li>
                    <li>Marca:{carro.marca}</li>
                    <li>Ano:{carro.ano}</li>
                </ul>
                </>
            ))}
        </div>
    )
}

export default Car