import logo from './logo.svg';
import './App.css';


function App() {

  const products=[
    {name:'laptop',price:167000},
    {name:'phone',price:30000},
    {name:'watch',price:7000},
    {name:'sunglass',price:1000}
  ]
  return (
    <div className="App">
      
       {/* <header className="App-header">

      </header> */}
      {/* <Product name="laptop" price="32000"></Product>
      <Product name="phone"></Product>
      <Product name="watch" price='250'></Product> */}

    {/* <Product ></Product> */}

    {
      products.map(product=><Product name={product.name} price={product.price}></Product>)
    }
    </div>
  );
}


function Product(props){
  return(
    <div className='product'>
      <h3>Name:{props.name}</h3>
      <p>price:{props.price}</p>
    </div>
  )
}
export default App;
