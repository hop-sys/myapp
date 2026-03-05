import './App.css';
import Help from './components/Help';
import Contactus from './components/Contactus';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponent';
import Sixthcomponent from './components/Sixthcomponent';

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
       <Thirdcomponent/>
       <Fourthcomponent/>
       <Fifthcomponent/>
       <Sixthcomponent/>
    </div>
  );
}

export default App;

// App.js is route component
