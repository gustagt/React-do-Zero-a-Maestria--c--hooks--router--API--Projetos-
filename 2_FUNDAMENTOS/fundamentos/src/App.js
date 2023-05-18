//Components
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

// Style / CSS
import './App.css';


function App() {
  return (
    <div className="App">
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
