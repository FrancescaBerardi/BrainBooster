import React from 'react'

const ProductCard = ({ product }) => {



  return (
    <div className='productCard'>
        <img className='card-image' src={product.image} alt="js" />
        <h3>{product.productName}</h3>
        <p>{product.category}</p>
        <p>{product.priceNoIva} €</p>
    </div>
  )
}

export default ProductCard