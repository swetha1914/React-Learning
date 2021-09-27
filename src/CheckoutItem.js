import React from 'react'
const CheckoutItem = ({ id, img, title, price, amount }) => {
  
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
      </div>
      <p> {amount} x Rs.{price}</p>
    </article>
  )
}

export default CheckoutItem;
