import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
     <LoadComments></LoadComments> 
    </div>
  );
}

function Counter(){
  const [count, setcount] = useState(0)
  const increment = ()=>setcount(count+1)
  const decrement=()=>setcount(count-1)
  return(
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  )
}

function LoadComments(){
const [comments, setcomments] = useState([])
useEffect(() => {
fetch(`https://jsonplaceholder.typicode.com/comments`)
.then(res=>res.json())
.then(data=>setcomments(data))
}, [])

return(
  <div>
    <h2>Comments:{comments.length}</h2>
    {
      comments.map(comment=><Comments email={comment.email} body={comment.body}></Comments>)
    }
  </div>
)
}

function Comments(props){
  return(
    <div style={{
      border:'2px solid green'
      ,margin:'20px'
    }}>
      <h4>
        email:{props.email}
      </h4>
      <p>
        {props.body}
      </p>
    </div>

  ) 
}
export default App;
