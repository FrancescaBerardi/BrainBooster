import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {

    const initialState = {
        id: product.id,
        title: product.title,
        productName: product.productName,
        category: product.category,
        description: product.description,
        priceNoIva: product.priceNoIva,
        image: product.image
    }

    const [state, setState] = useState(initialState);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/product-details", {
            state: state
        });
    }
  return (
    <div className='productCard'>
        <img className='card-image' src={product.image} alt="js" />
        <h3>{product.productName}</h3>
        <p>{product.category}</p>
        <p>{product.priceNoIva} €</p>
        <button onClick={handleClick} className='buttonCards'><strong>Dettagli</strong></button>
    </div>
  )
}

export default ProductCard