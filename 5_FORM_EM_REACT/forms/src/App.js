import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Forms</h1>
        <MyForm user={{name: 'gust', email:'gust@gust.com', bio:'teste de bio', prof:'eng'}} />
    </div>
  );
}

export default App;
