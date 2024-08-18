import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { IoEyeOutline } from 'react-icons/io5'

const BestSellers = (props) => {
  return (
    <>
      <div className='group w-[230px] h-[322px] flex flex-col gap-[16px] border hover:border-green-500 rounded p-2'>
              {/* image and icons */}
              <div className='relative  w-full h-[250px] p-[8px]'>
                {/* icons */}
                <div className='absolute right-[8px] flex flex-col'>
                  <span className='p-1'>
                    <FaRegHeart className='w-[24px] h-[24px]' />
                  </span>
                  <span className='p-1'>
                    <IoEyeOutline className='w-[24px] h-[24px]' />
                  </span>
                </div>
                {/* image */}
                <div className='absolute left-[20px] top-[35px] flex justify-center items-center w-[190px] h-[180px] overflow-hidden'>
                  <img src={props.image} alt="NewProducts" />
                </div>
              </div>
              {/* item details */}
              <div className='w-full h-[56px] flex flex-col gap-[8px]'>
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

export default BestSellers
