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


  return (
    <div className='cartItemContainer'>
        <ul className='cartList'>
            <li><img src={productItem.image} alt="course" /></li>
            <li><h2>{productItem.productName}</h2> </li>
        </ul>
        <ul  className='cartList'>
            <li><button>rimuovi</button></li>
            <li>  Quantità: {productNumber}</li>
            <li><button>aggiungi</button></li>
        </ul>
    </div>
  )
}

export default CartItem