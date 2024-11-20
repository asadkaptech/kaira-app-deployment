import React from 'react'

const Shop = () => {
    return (
        <>
            <div className='grid grid-cols-3 container mx-auto gap-10 mt-10'>
                <div>
                    <img src="./assets/4.jpg" alt="" />
                    <div className='p-5'>
                        <button className='uppercase border-b-2'>shop for men</button>
                    </div>
                </div>
                <div>
                    <img src="./assets/5.jpg" alt="" />
                    <div className='p-5'>
                        <button className='uppercase border-b-2'>shop for women</button>
                    </div>

                </div>
                <div>
                    <img src="./assets/6.jpg" alt="" />
                    <div className='p-5'>
                        <button className='uppercase border-b-2'>shop accessories</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop
