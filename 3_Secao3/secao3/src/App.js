
import { Fragment, useState } from 'react';
import './App.css';
import Game from './assets/2023-03-26 (1).png'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Children from './components/Children';
import FunctionProps from './components/FunctionProps';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';
import UserDetails from './components/UserDetails';

function App() {
  const name = 'Joaquim'
  const [userName] = useState('Maria')

  function showMessage() {
    console.log("testando função na prop")
  }

  const cars = [
    { id: 1, brand: 'ferrari', km: 0, color: 'vermelho', newCar: true },
    { id: 2, brand: 'ford', km: 0, color: 'amarelo', newCar: true },
    { id: 3, brand: 'VW', km: 89746, color: 'preto', newCar: false },
  ]

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const pessoas = [
    { id: 1, nome: 'Gusta', idade: 15, profissao: 'maquinista' },
    { id: 2, nome: 'Fer', idade: 18, profissao: 'dev' },
    { id: 3, nome: 'LExus', idade: 23, profissao: 'agente tr' },
  ]

  return (
    <div className="App">
      <div>
        <h1>Avançado em React</h1>
      </div>
      {/* Imagem em public */}
      <div>
        <img src="/2023-03-26.png" alt="game" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={Game} alt="game2" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* props destructuring */}
      <CarDetails brand='VW' km={10000} color='Verde' newCar={true} />
      {/* reaproveitando */}
      <CarDetails brand='ferrari' km={0} color='vermelho' newCar={true} />
      <CarDetails brand='Ford' km={100000} color='preto' newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar} />
      ))}
      {/* Fragments */}
      <Fragments propsFragments='tetandoo' />

      {/* Children */}
      <Children>
        <p>conteudo do container</p>
      </Children>
      <Children>
        <h5>conteudo do container2</h5>
      </Children>

      {/* função na prop */}
      <FunctionProps myFunction={showMessage} />

      {/* State lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />

      {/* Desafio 4 */}
      <UserDetails pessoas={pessoas} />
    </div>
  );
}

export default App;
