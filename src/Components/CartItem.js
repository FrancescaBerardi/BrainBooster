import React, { useEffect, useState } from 'react'

const CartItem = ({ product }) => {

    debugger

    const initialState = {
        id: product[0],
        title: "",
        productName: "",
        category: "",
        description: "",
        priceNoIva: 0,
        image: ""
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

    const addItem = () => {
        setProductNumber(productNumber+1);
    }


    return (
        <div className='cartItemContainer'>
            <ul className='cartList1'>
                <li><h2>{productItem.productName}</h2> </li>
                <li><img src={productItem.image} alt="course" /></li>
            </ul>
            <ul className='cartList2'>
                <li><button>-</button></li>
                <li><h1>{productNumber}</h1></li>
                <li><button onClick={addItem}>+</button></li>
            </ul>
            <ul className='cartList2'>
                <li><h1>{productItem.priceNoIva} €</h1> </li>
            </ul>
        </div>
    )
}

export default CartItem