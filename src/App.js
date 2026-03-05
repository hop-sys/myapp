import './App.css';
import Help from './components/Help';
import Contactus from './components/Contactus';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Welcome to learning reactjs</h1>
       <h2>React is Fun</h2>

  
      </header>
      {/* Below is how we render/show/display our components */}
       <Firstcomponent />
       <Secondcomponent/>
       <Contactus/>
       <Help/>
    </div>
  );
}

export default App;
