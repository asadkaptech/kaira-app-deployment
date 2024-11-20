import React from 'react'
import { useDispatch } from 'react-redux'
import { AddCart } from '../redux/cartSystem';

const Products = () => {

    const dispatch = useDispatch();


    const productData = [
        {
            id: 1,
            imgURL: "./assets/7.jpg",
            title: "dark flourish onepiece",
            price: "$95.00"
        },
        {
            id: 2,
            imgURL: "./assets/8.jpg",
            title: "baggy shirt",
            price: "$55.00"
        },
        {
            id: 3,
            imgURL: "./assets/9.jpg",
            title: "cotton off-white shirt",
            price: "$65.00"
        }
    ]


  return (
    <>
        <div className='container flex justify-between p-5 mx-auto'>
            <div>
                <h1 className='text-2xl uppercase'>our new arrivals</h1>
            </div>
            <div>
                <button className='uppercase border-b-2'>shop for women</button>
            </div>
        </div>

        <div className='container grid grid-cols-3 gap-5 mx-auto'>
            
        {productData.map((product) => (
                    <div key={product.id} className='relative p-5 transition-all duration-300 ease-in-out group hover:scale-95'>
                        <img src={product.imgURL} alt={product.title} className='w-full' />
                        <div className='p-5'>
                            <h1 className='text-xl uppercase'>{product.title}</h1>
                            <p className='text-gray-700 group-hover:hidden'>{product.price}</p>
                            <button 
                                onClick={() => dispatch(AddCart(product))} 
                                className='hidden uppercase group-hover:block'
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
        </div>
    </>
  )
}

export default Products
