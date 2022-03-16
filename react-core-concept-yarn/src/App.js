// import logo from './logo.svg';
import './App.css';


// const num=555;

// const singer ={
//   name:'Dr mahafux',job:'singer'
// }
// const singer2 ={
//   name:'Dr mahafux 2',job:'singer 2'
// }


// const singerStyle={

//   color:'purple',
//   backgroundColor:'gray'

// } 

const singers=[
  {name:'dr mahafuz',job:'singer'},
  {name:'dr mahafuz2',job:'singer'},
  {name:'dr mahafuz3',job:'singer'},
  {name:'dr mahafuz4',job:'singer'},
]

function App() {
  const nayoks=['rubel','Bapparaj','sakib' ,'jasim','salman','riaj','razzak']
  return (
    <div className="App">
      {/* {
        nayoks.map(nayok=><li>name:{nayok}</li>)
      } */}
      {
        nayoks.map(nayok=><Person name={nayok}></Person>)
      }
      {/* <Person name={nayoks[0]} profession='hero' id=""></Person> */}
      {/* <a href=""> f</a> */}
      {/* <Person name={nayoks[1]} profession='director' ></Person>
      <Person name={nayoks[2]}  profession='crickter'></Person> */}

      {
        singers.map(singer=><Singers name={singer.name}></Singers>)
      }
      {/* <h5>new component</h5> */}
      {/* <Friend name='bitto' phone='024466' job="business"></Friend>
      <Friend name='abdur' phone='89448' job='choching'></Friend> */}
      
    </div>
  
  );
}

function Person(props){
// console.log(props)
  return ( 
  <div className='person'>
   {/* <h1>sakib</h1> */}
   <h1>name:{props.name}</h1>
   <p> profession :{props.profession} </p>
  </div>
 
  )

}

// function Friend(props){
//   console.log(props)
//   return(
//     <div className="container">
//       <h3>name:{props.name}</h3>
//       <p>phone:{props.phone}</p>
//       <p>Job :{props.job}</p>
//     </div>
//   )
// }
function Singers(props){
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
