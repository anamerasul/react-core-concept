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
      <Person name="rubel" profession='hero' id=""></Person>
      {/* <a href=""> f</a> */}
      <Person name='baparaj'profession='director' ></Person>
      <Person name='sakib' profession='crickter'></Person>
      <h5>new component</h5>
      <Friend name='bitto' phone='024466' job="business"></Friend>
      <Friend name='abdur' phone='89448' job='choching'></Friend>
      
    </div>
  
  );
}

function Person(props){
// console.log(props)
  return ( 
  <div className='person'>
   {/* <h1>sakib</h1> */}
   <h1>{props.name}</h1>
   <p> profession :{props.profession} </p>
  </div>
 
  )

}

function Friend(props){
  console.log(props)
  return(
    <div className="container">
      <h3>name:{props.name}</h3>
      <p>phone:{props.phone}</p>
      <p>Job :{props.job}</p>
    </div>
  )
}

export default App;
