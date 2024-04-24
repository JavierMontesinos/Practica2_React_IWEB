import Header from './Header.js';
import SearchPage from './SearchPage.js';
import Producto from './Producto.js';
import NoMatch from './NoMatch.js';
import config from './config/config.js';
import {Routes, Route} from "react-router-dom"
import {mockdata} from './constants/products.js';
import {useState} from 'react';
import {useEffect} from 'react';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  
  
  const download = async () => {
    let listaproductos;
    if(config.use_server){
			const res = await fetch(config.server_url);
			listaproductos = await res.json();
      setProductos(listaproductos.products);
    }else{
      listaproductos = mockdata.products;
      setProductos(listaproductos);
    }
	}
  useEffect(() => {
    async function fetchData() {
      await download();
			setTimeout(()=>{
			setLoading(false);
		  },500);}
    fetchData();
  }, []);
  return (
    <div className="App">
    {loading 
      ? <img src={process.env.PUBLIC_URL + "/spinner.gif"} className="spinner" id="loading"/>
      : <div>
        <Header/>
          <Routes>
            <Route path="/" element={<SearchPage theproducts={productos}/>}/>
            <Route path="/products/:productId" element={<Producto product={productos}/>}/>
            <Route path="*" element={<NoMatch/>} />
          </Routes>
        </div>
      }
    </div>
  );
}

export default App;
