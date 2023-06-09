import React, { useContext, useEffect, useState } from 'react';
import Layout from './Layout/Layout';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './Login/AuthContext';

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state;
  const navigate = useNavigate();

  const { userId } = useContext(AuthContext);
  const productId = product.id;

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(`http://localhost:8000/user/${userId}`);
        if (response.ok) {
          const userData = await response.json();
          setCart(userData.cart);
        } else {
          console.error('Errore durante il recupero del carrello:', response.statusText);
        }
      } catch (error) {
        console.error('Errore durante il recupero del carrello:', error);
      }
    };

    fetchCart();
  }, [userId]);

  const [addMessage, setAddMessage] = useState("")

  const addProductToCart = () => {
    const existingProduct = cart.find(item => item[0] === productId);
    if(existingProduct){
      const updatedCart = cart.map(item => {
        if(item[0] === productId) {
          return [item[0], item[1]+1];
        } else {
          return item;
        }
      });
      updateCart(updatedCart);
    } else {
      const newProduct = [productId, 1];
      updateCart([...cart, newProduct]);
    }
    
  };

  const updateCart = async(updatedCart) => {
    try {
      const response = await fetch(`http://localhost:8000/user/${userId}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({cart:updatedCart})
      });
      if(response.ok){
        console.log("prodotto inserito nel carrello");
        navigate("/cart");
      } else {
        console.error("Errore durante l'inserimento del prodotto nel carrello", response.statusText);
      }
    } catch (error) {
      console.error("Errore durante l'inserimento del prodotto nel carrello", error);
    }
  };

  const [price, setPrice] = useState(product.priceNoIva);
  const [count, setCount] = useState(0);
  const [btnText, setBtnText] = useState("Calcola prezzo con IVA");

  const addIva = () => {
    if (count % 2 === 1) {
      setPrice(product.priceNoIva);
      setBtnText("Calcola prezzo con IVA");
    } else if (count % 2 === 0) {
      let diff = price * 22 / 100;
      setPrice(price + diff);
      setBtnText("Calcola prezzo senza IVA");
    }
    setCount(count + 1);
  }

  return (
    <Layout>
      <div className="productDetailsContainer">
        <div className="productDetails1">
          <ul>
            <li>
              <img className='img-product' src={product.image} alt="eng" />
            </li>
            <li><strong>Prezzo: </strong>  {price} €</li>
            <li><strong>iva: </strong> 22%</li>
            <li><button onClick={addIva}>{btnText}</button></li>
          </ul>
        </div>
        <div className="productDetails2">
          <ul>
            <li>
              <h1>Corso di {product.productName}</h1>
            </li>
            <li>
              <h2>Descrizione del corso:</h2>
            </li>
            <li>
              <p>
                <h4>{product.description}</h4>
              </p>
            </li>
            <li>
              <button onClick={addProductToCart}>Inserisci prodotto nel carrello</button>
            </li>
            <p>{addMessage}</p>
          </ul>
          
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
