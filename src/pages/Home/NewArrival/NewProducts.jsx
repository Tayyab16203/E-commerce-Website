import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const NewProducts = (props) => {
  return (
    <>
      <div className='group w-[270px] h-[322px] flex flex-col gap-[16px] border hover:border-green-500 rounded p-2'>
        {/* image, sale and icons */}
        <div className='relative  w-full h-[250px] p-[12px]'>
          <span className='absolute top-[12px] text-white bg-[#FF0000] py-[4px] px-[12px] rounded'>Sale</span>
          {/* icons */}
          <div className='absolute right-[12px] flex flex-col'>
            <span className='p-1'>
              <FaRegHeart className='w-[24px] h-[24px]' />
            </span>
            <span className='p-1'>
              <IoEyeOutline className='w-[24px] h-[24px]' />
            </span>
          </div>
          {/* image */}
          <div className='absolute left-[40px] top-[35px] flex justify-center items-center w-[190px] h-[180px] overflow-hidden'>
            <img src={props.image} alt="NewProducts" />
          </div>
          {/* add to cart */}
          <button className='hidden group-hover:block absolute bottom-0 left-0 w-[250px] bg-[#008000] h-[41px] text-white rounded transition-all duration-300 ease-in-out'>Add to cart</button>
        </div>
        {/* item details */}
        <div className='w-[224px] h-[56px] flex flex-col gap-[8px]'>
          <div className='flex justify-between text-[16px] font-medium leading-[24px]'>
            <p>{props.name}</p>
            <span>{props.weight}</span>
          </div>
          <div className='flex gap-[12px]'>
            <p className='text-[#DB4444] font-medium text-[16px] leading-[24px]'>€{props.newPrice}</p>
            <p className='text-gray-500 font-medium text-[16px] leading-[24px] line-through '>€{props.oldPrice}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewProducts
