import logo from './logo.svg';
import './App.css';


const num=555;

const singer ={
  name:'Dr mahafux',job:'singer'
}
const singer2 ={
  name:'Dr mahafux 2',job:'singer 2'
}


const singerStyle={

  color:'purple',
  backgroundColor:'gray'

} 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello dude</h3>
          </div>

          <div className="music" id="music">
           <p>Name:{222+num}</p>
           <p style={singerStyle}>{singer.name}</p>
           <p>{singer.job}</p>
           <p>{singer2.name}</p>
           <p style={{color:'blue',backgroundColor:'yellow'}}>{singer2.job}</p>
            </div>
        <p></p>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <p>

          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
