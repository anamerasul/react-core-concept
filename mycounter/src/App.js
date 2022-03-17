// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
    </div>
  );
}

function Counter(){

  const [count,setCount] = useState(0);
  // const increaseCount=()=>{
  //   const newCount=count+1;
  //   setCount(newCount)
  // }
  const increaseCount=()=>setCount(count+1)
  const dcreaseCount=()=>setCount(count-1)
  
  return(
  <div>
  <h1>Count:{count}</h1>
  <button onClick={increaseCount} className="btn">Increase</button>
  <button onClick={dcreaseCount} className="btn">Dcrease</button>
  </div>
  
  )
}

export default App;
