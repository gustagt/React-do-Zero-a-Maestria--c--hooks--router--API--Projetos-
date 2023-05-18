import logo from './logo.svg';
import './App.css';
import Car from './components/Car';

function App() {
  const cars = [
    {modelo: 'Roma', ano: 2023, cor: 'Preta', marca: 'Ferrari'},
    {modelo: 'F8', ano: 2023, cor: 'Vermelha', marca: 'Ferrari'},
    {modelo: '296', ano: 2023, cor: 'Preta', marca: 'Ferrari'},
    {modelo: 'SF90', ano: 2023, cor: 'Prata', marca: 'Ferrari'}
  ]

  return (
    <div className="App">
        <h1>Carros Ferrari</h1>
        <Car carros={cars} />
    </div>
  );
}

export default App;
