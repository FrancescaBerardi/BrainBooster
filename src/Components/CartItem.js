import React, { useEffect, useState } from 'react'

const CartItem = ({product}) => {

    const initialState = {
        id: product[0],
        title: "",
        productName: "",
        category: "",
        description: "",
        priceNoIva: 0,
        image : ""
      };

    const [productItem, setProductItem] = useState(initialState);

    const [productNumber, setProductNumber] = useState(product[1]);

    const getData = () => {
        fetch("http://localhost:8000/products/" + product[0])
            .then((response) => response.json())
            .then((data) => {
                setProductItem(data);
            }).catch((err) => {
                console.log(err.message);
            })
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        //console.log(productItem.title);
    }, [productItem]);

    const addItem = ()=>{

    }
    const removeItem = ()=>{
        
    }

  return (
    <div className='cartItemContainer'>
        <ul className='cartList'>
            <li><img src={productItem.image} alt="wb" /></li>
            <li><h2>{productItem.productName}</h2> </li>
            <li><button onClick={addItem}>rimuovi</button></li>
            <li>  Quantità: {productNumber}</li>
            <li><button onClick={removeItem}>aggiungi</button></li>
        </ul>
    </div>
  )
}

export default CartItem