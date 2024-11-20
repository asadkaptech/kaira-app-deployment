import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const {cart} = useSelector(item=>item.name)
    console.log(cart);
    
  return (
    <>
        <h1 className='container p-10 mx-auto text-2xl font-semibold text-center'>Total Cart Items: {cart.length}</h1>

<div className='container grid grid-cols-3 mx-auto'>
        {cart.map((item) => (
                <div key={item.id}>
                    <img src={item.imgURL} width={100} alt="" />
                    <div>
                        <h1 className='text-xl uppercase'>{item.title}</h1>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                    </div>
                </div>
            ))}
            </div>
    </>
  )
}

export default Cart