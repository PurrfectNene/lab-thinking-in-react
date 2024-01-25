import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar></SearchBar>
      </div>    
  )
}

export default ProductsPage