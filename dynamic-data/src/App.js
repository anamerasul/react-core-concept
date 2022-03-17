import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  return (
    <div className="App">
    <ExternalUsers></ExternalUsers>  
    </div>
  );
}


function ExternalUsers(){
const [users, setUsers] = useState([])
// const myfunc=()=>{}
// useEffect(()=>{} ,[])
useEffect(()=>{
fetch(`https://jsonplaceholder.typicode.com/users`)
.then(res=>res.json())
.then(data=>setUsers(data))
} ,[])

  return(
    <div>
      <h2>External:{users.length}</h2>
    {
        users.map(user=><Users name={user.name}email={user.email}></Users>)
      }
    </div>
  )
}

function Users(props){

  return(
    <div style={{
      border:'2px solid red',
      margin:'20px'
    } }>
      <h3>name:{props.name}</h3>
      <h3>email:{props.email}</h3>
    </div>
  )
}
export default App;
