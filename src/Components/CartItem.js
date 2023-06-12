import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from './Login/AuthContext';

const CartItem = ({ product }) => {

    const { userId } = useContext(AuthContext);

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

    const updateProductQuantity = (prodId, quantity) => {
        fetch("http://localhost:8000/user/" + userId)
            .then(response => response.json())
            .then(userData => {
                const { cart } = userData;
                const updatedCart = cart.map(item => {
                    if (item[0] === prodId) {
                        return [item[0], quantity];
                    }
                    return item;
                });
                const requestOptions = {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ cart: updatedCart })
                };
                return fetch("http://localhost:8000/user/" + userId, requestOptions);
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    const removeItem = () => {
        fetch("http://localhost:8000/user/" + userId)
            .then(response => response.json())
            .then(userData => {
                const { cart } = userData;
                const updatedCart = cart.filter(item => item[0] !== product[0]);
                const requestOptions = {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ cart: updatedCart })
                };
                return fetch("http://localhost:8000/user/" + userId, requestOptions);
            })
            .then(response => response.json())
            .then(data => {
                window.location.reload();
            }).catch(error => {
                console.log(error.message);
            });
    };

    const decreaseItem = () => {
        if (productNumber > 1) {
            const newQuantity = productNumber - 1;
            setProductNumber(newQuantity);
            updateProductQuantity(product[0], newQuantity);
        } else {
            removeItem();
        }
    }

    const addItem = () => {
        const newQuantity = productNumber + 1;
        setProductNumber(newQuantity);
        updateProductQuantity(product[0], newQuantity);
    }


    return (
        <div className='cartItemContainer'>
            <ul className='cartList1'>
                <li><h2>{productItem.productName}</h2> </li>
                <li><img src={productItem.image} alt="course" /></li>
            </ul>
            <ul className='cartList2'>
                <li><button onClick={decreaseItem}>-</button></li>
                <li><h1>{productNumber}</h1></li>
                <li><button onClick={addItem}>+</button></li>
            </ul>
            <ul className='cartList2'>
                <li><h1>{Number(productNumber * productItem.priceNoIva * 1.22).toFixed(2)} €</h1> </li>
            </ul>
        </div>
    )
}

export default CartItem