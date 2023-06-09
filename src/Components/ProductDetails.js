import React from 'react'
import Layout from './Layout/Layout'
import { useLocation, useNavigate } from 'react-router-dom'

const ProductDetails = () => {

    const location = useLocation();
    const product = location.state;
    const navigate = useNavigate();



    return (
        <Layout>
            <div className="productDetailsContainer">
                <div className="productDetails1">
                    <ul>
                        <li><img className='img-product' src={product.image} alt="eng" /></li>
                        <li> <strong>Prezzo: </strong>  {product.priceNoIva} €</li>
                        <li><strong>iva: </strong> 22%</li>
                        <li><button>calcola prezzo con iva</button></li>

                    </ul>
                </div>
                <div className="productDetails2">
                    <ul>
                        <li><h1>Corso di {product.productName}</h1></li>
                        <li><h2>Descrizione del corso:</h2></li>
                        <li><p>
                            <h4>{product.description}</h4>
                        </p></li>
                        <li><button>Inserisci prodotto nel carrello</button></li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default ProductDetails