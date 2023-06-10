import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProductDetails from './Components/ProductDetails'

export const MyCard = ({ prod, prodImg }) => {

  const navigate = useNavigate();

  const initialState = {
    id: prod.id,
    title: prod.title,
    productName: prod.productName,
    category: prod.category,
    description: prod.description,
    priceNoIva: prod.priceNoIva,
    image: prod.image
}

const [state, setState] = useState(initialState);

  const handleClick = () => {
    navigate("/product-details", {
      state: state
    })
  }

  return (
    <div className='myCard'>
      <img id="test" src={prodImg} onClick={handleClick} ></img>

    </div>
  )
}
