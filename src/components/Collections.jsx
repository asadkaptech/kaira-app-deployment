import React from 'react'

const Collections = () => {
    return (
        <>
            <div className='flex justify-center py-24'>
                <div className='max-w-xl text-center'>
                    <h1 className='text-7xl'>New Collections</h1>
                    <p className='max-w-lg p-3 text-justify text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ut dolorum consequuntur, adipisci repellat! Eveniet commodi voluptatem voluptate, eum minima, in suscipit explicabo voluptatibus harum, quibusdam ex repellat eaque!</p>
                </div>
            </div>
            <div className='container grid grid-cols-3 gap-10 mx-auto products1'>
                <div className='py-3'>
                    <img src="./assets/1.jpg" alt="" />
                    <div className='p-5'>
                        <p className='text-2xl uppercase'>soft leather jackets</p>
                        <p className='text-justify text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perspiciatis ducimus. Quam, id beatae quidem minima quos, commodi suscipit enim nam sapiente provident voluptatum nemo, error inventore adipisci itaque sequi!</p>
                        <button className='mt-2 text-xl uppercase border-b-2 border-gray-300'>discover now</button>
                    </div>
                </div>
                <div className='py-3'>
                    <img src="./assets/2.jpg" alt="" />
                    <div className='p-5'>
                        <p className='text-2xl uppercase'>out crop sweater</p>
                        <p className='text-justify text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perspiciatis ducimus. Quam, id beatae quidem minima quos, commodi suscipit enim nam sapiente provident voluptatum nemo, error inventore adipisci itaque sequi!</p>
                        <button className='mt-2 text-xl uppercase border-b-2 border-gray-300'>discover now</button>
                    </div>
                </div>
                <div className='py-3'>
                    <img src="./assets/3.jpg" alt="" />
                    <div className='p-5'>
                        <p className='text-2xl uppercase'>soft leather jackets</p>
                        <p className='text-justify text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, perspiciatis ducimus. Quam, id beatae quidem minima quos, commodi suscipit enim nam sapiente provident voluptatum nemo, error inventore adipisci itaque sequi!</p>
                        <button className='mt-2 text-xl uppercase border-b-2 border-gray-300'>discover now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collections
