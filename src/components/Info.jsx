import React from 'react'
import { MdOutlineShoppingBag } from "react-icons/md";
import { BsFillBagFill } from "react-icons/bs";
import { TbPackages } from "react-icons/tb";
import { RiGlobalFill } from "react-icons/ri";

const Info = () => {
  return (
    <>
        <div className='container grid grid-cols-4 mx-auto mt-10'>
            <div className='flex flex-col items-center leading-9 text-center'>
                <MdOutlineShoppingBag className='text-3xl text-gray-400'/>
                <h1 className='text-3xl capitalize'>Book An Appointment</h1>
                <p className='text-gray-500'>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
            </div>
            <div className='flex flex-col items-center leading-9 text-center'>
                <BsFillBagFill className='text-3xl text-gray-400'/>
                <h1 className='text-3xl capitalize'>Pick up in <br /> store</h1>
                <p className='text-gray-500'>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
            </div>
            <div className='flex flex-col items-center leading-9 text-center'>
                <TbPackages className='text-3xl text-gray-400'/>
                <h1 className='text-3xl capitalize'>Special <br /> packaging</h1>
                <p className='text-gray-500'>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
            </div>
            <div className='flex flex-col items-center leading-9 text-center'>
                <RiGlobalFill className='text-3xl text-gray-400'/>
                <h1 className='text-3xl capitalize'>free global <br /> returns</h1>
                <p className='text-gray-500'>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
            </div>
        </div>
    </>
  )
}

export default Info
