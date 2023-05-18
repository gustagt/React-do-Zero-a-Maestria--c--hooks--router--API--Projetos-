
import './App.css';
import MyComponents from './components/MyComponents';
import Title from './components/Title';

function App() {
  const n = 15;

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS components */}
      <MyComponents />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quibusdam placeat mollitia molestiae, recusandae fugit id quas adipisci laboriosam libero doloribus deserunt dicta aliquid aliquam tempora magnam provident minus ipsum!</p>

      {/*css inline dinamico */}
      <h2 style={ n >15 ? ({}) : ({})}> dsadas</h2>
      {/* classe dinamica */}
      <h2 className={ n >15 ? 'teste' : 'teste2'}> dsadas</h2>

      <Title></Title>
    </div>
  );
}

export default App;
