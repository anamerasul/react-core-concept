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
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h5>new component</h5>
      <Friend></Friend>
      <Friend></Friend>
      
    </div>
  
  );
}

function Person(){

  return ( 
  <div className='person'>
   <h1>sakib</h1>
   <p> profession :cricketer </p>
  </div>
 
  )

}

function Friend(){
  return(
    <div className="container">
      <h3>name:Joy dev gun</h3>
      <p>Job :mara mari</p>
    </div>
  )
}

export default App;
