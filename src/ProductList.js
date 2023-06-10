import React, { useEffect, useState } from 'react'
import ProductCard from './Components/ProductCard'

const ProductList = () => {

    const [products, setProducts] = useState([]);

    const getData = ()=> {
      fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      }).catch((err) => {
        console.log(err.message);
      })
    };

    useEffect(()=>{
        getData();
    }, []);

    useEffect(() => {
        
    }, [products]);

    return (
        <div className='productContainer'>
            {
                products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))
            }
            
        </div>
    )
}

export default ProductList