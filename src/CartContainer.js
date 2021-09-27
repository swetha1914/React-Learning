import React from 'react'
import CartItem from './CartItem'
import CheckoutItem from './CheckoutItem'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const { cart, total, clearCart, isCheckOut, checkOut } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <section className='cart'>
        <header>
          <h2>Hello</h2>
          <h4 className='empty-cart'>Your cart is currently empty !!</h4>
        </header>
      </section>
    )
  }
  if(isCheckOut){
    return(
      <section className='cart'>
        <header>
          <h2>Books selected</h2>
        </header>
        
        <div>
          {cart.map((item) => {
            return <CheckoutItem key={item.id} {...item} />
          })}
        </div>
        <footer>
          <hr/>
          <div className='cart-total'>
            <h4>
              total <span>Rs {total}</span>
            </h4>
          </div>
          <button className='btn'>Proceed to pay</button>
        </footer>
        
      </section>
    );
  }

  return (
    <section className='cart'>
      <header>
        <h2>your cart</h2>
      </header>

      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>

      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>Rs {total}</span>
          </h4>
        </div>
        <div>
          <button className='btn'> Continue shopping </button>
          <button className='btn clear-btn' onClick={clearCart}>
          clear cart
          </button>
          <button className='btn' onClick={checkOut}> checkout </button>
        </div>
      </footer>
    </section>
  )
}

export default CartContainer
