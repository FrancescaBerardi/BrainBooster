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
        debugger
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

  const addProductToCart = () => {
    const newProduct = [productId, 1]; 

    const updateUserCart = async () => {
      try {
        const response = await fetch(`http://localhost:8000/user/${userId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ cart: [...cart, newProduct] }),
        });

        if (response.ok) {
          console.log('Prodotto inserito nel carrello');
          navigate('/cart'); 
        } else {
          console.error('Errore durante l\'inserimento del prodotto nel carrello:', response.statusText);
        }
      } catch (error) {
        console.error('Errore durante l\'inserimento del prodotto nel carrello:', error);
      }
    };

    updateUserCart();
  };

  return (
    <Layout>
      <div className="productDetailsContainer">
        <div className="productDetails1">
          <ul>
            <li>
              <img className='img-product' src={product.image} alt="eng" />
            </li>
            <li><strong>Prezzo: </strong>  {product.priceNoIva} €</li>
            <li><strong>iva: </strong> 22%</li>
            <li><button>calcola prezzo con iva</button></li>
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
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
