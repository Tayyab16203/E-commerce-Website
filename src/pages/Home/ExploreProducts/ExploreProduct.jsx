import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { IoEyeOutline } from 'react-icons/io5'

const ExploreProduct = (props) => {
    return (
        <>
            <div className='group w-[270px] h-[322px] flex flex-col gap-[16px] border hover:border-green-500 rounded p-2'>
                {/* image and icons */}
                <div className='relative  w-full h-[250px] '>
                    {/* icons */}
                    <div className='absolute right-0 flex flex-col'>
                        <span className='p-1'>
                            <FaRegHeart className='w-[24px] h-[24px]' />
                        </span>
                        <span className='p-1'>
                            <IoEyeOutline className='w-[24px] h-[24px]' />
                        </span>
                    </div>
                    {/* image */}
                    <div className='absolute left-[25px] top-[35px] flex justify-center items-center w-[190px] h-[180px] overflow-hidden'>
                        <img src={props.image} alt="NewProducts" className='w-[190px] h-[180px]' />
                    </div>
                    {/* add to cart */}
                    <button className='hidden group-hover:block absolute bottom-0 left-0 w-full bg-black h-[41px] text-white rounded transition-all duration-300 ease-in-out'>Add to cart</button>
                </div>
                {/* item details */}
                <div className='w-full h-[56px] flex flex-col gap-[8px]'>
                    <div className='text-[16px] font-medium leading-[24px]'>
                        <p>{props.name}</p>
                    </div>
                    <div>
                        <p className='text-[#DB4444] font-medium text-[16px] leading-[24px]'>€{props.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExploreProduct
