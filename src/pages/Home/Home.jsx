import React from 'react'
import Category from './Category/Category';
import categories from './Category/Categories';
import NewProducts from './NewArrival/NewProducts';
import products from './NewArrival/Products';
import BestSellers from './BestSellers/BestSellers';
import product from './BestSellers/Product';
import product1 from './ExploreProducts/Product';
import BreakLine from './components/BreakLine';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiHeadphones } from "react-icons/pi";
import { AiOutlineSafety } from "react-icons/ai";
import ExploreProduct from './ExploreProducts/ExploreProduct';


const Home = () => {
  return (
    <>
      <div className='max-w-[1350px] my-[13px] mx-auto px-[10px]'>
        {/* 1st section Images */}
        <div className='flex flex-col items-center justify-center gap-[21px]'>
          {/* Images */}
          <div className='flex gap-[20px] justify-between'>
            <span className='max-w-[674px] h-[376px]'>
              <img src="./images/Home/home1.jpeg" alt="home1" className='w-[674px] h-[376px]' />
            </span>
            <div className='flex flex-col gap-[18px]'>
              <span className='max-w-[630px] h-[199px] bg-contain bg-center'>
                <img src="./images/Home/home2.jpeg" alt="home2" className='w-[630px] h-[199px] bg-contain bg-center' />
              </span>
              <span className='max-w-[630px] h-[160px]'>
                <img src="./images/Home/home3.jpeg" alt="home3" className='w-[630px] h-[160px] bg-contain bg-center' />
              </span>
            </div>
          </div>
          {/* Dots */}
          <div className='flex gap-[9px] justify-center items-center'>
            <div className='w-[16px] h-[16px] bg-green-400 rounded-full'></div>
            <div className='w-[16px] h-[16px] bg-green-700 rounded-full'></div>
            <div className='w-[16px] h-[16px] bg-green-400 rounded-full'></div>
          </div>
        </div>
        {/* Browse By Category */}
        <div className='flex flex-col items-center justify-center gap-[60px]'>
          {/* heading */}
          <div className='w-full flex justify-between items-center font-semibold'>
            <h4 className='text-[#008000] text-[36px] leading-[48px]'>Browse By Category</h4>
            <p className='flex gap-[8px] text-[24px] leading-[24px] text-[#008000]'>
              See all
              <MdOutlineKeyboardArrowRight />
            </p>
          </div>
          {/* Images */}
          <div className='grid sm:grid-cols-3 lg:grid-cols-5 gap-[30px] items-center '>
            {categories.map(category => (
              <Category
                key={category.id}
                image={category.image}
              />
            ))}
          </div>
        </div>
        <BreakLine />
        {/* New Arrival */}
        <div className='flex flex-col items-center justify-center gap-[60px]'>
          {/* heading */}
          <div className='w-full flex justify-between items-center font-semibold'>
            <h4 className='text-[#008000] text-[36px] leading-[48px]'>New Arrival</h4>
            <p className='flex gap-[8px] text-[24px] leading-[24px] text-[#008000]'>
              See all
              <MdOutlineKeyboardArrowRight />
            </p>
          </div>
          {/* cards */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] items-center '>
            {products.map(item => (
              <NewProducts
                key={item.id}
                image={item.image}
                name={item.name}
                weight={item.weight}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
              />
            ))}
          </div>
        </div>
        <BreakLine />
        {/* Best Sellers */}
        <div className='flex flex-col items-center justify-center gap-[60px]'>
          {/* heading */}
          <div className='w-full flex justify-between items-center font-semibold'>
            <h4 className='text-[#008000] text-[36px] leading-[48px]'>Best Sellers</h4>
            <p className='flex gap-[8px] text-[24px] leading-[24px] text-[#008000]'>
              See all
              <MdOutlineKeyboardArrowRight />
            </p>
          </div>
          {/* cards */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] items-center '>
            {product.map(item => (
              <BestSellers
                key={item.id}
                image={item.image}
                name={item.name}
                weight={item.weight}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
              />
            ))}
          </div>
        </div>
        <BreakLine />
        {/* Explore Our Product */}
        <div className='max-w-[1170px] flex flex-col items-center justify-center mx-auto gap-[60px] '>
          {/* heading */}
          <div className='w-full flex justify-between items-center font-semibold'>
            <h4 className='text-[#008000] text-[36px] leading-[48px]'>Explore Our Products</h4>
            <div className='flex gap-[8px] text-[30px] '>
              <IoArrowBackCircleOutline />
              <IoArrowForwardCircleOutline />
            </div>
          </div>
          {/* cards */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] items-center '>
            {product1.map(item => (
              <ExploreProduct
                key={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
          {/* View All Product btn */}
          <button className='w-[234px] py-[16px] px-[48px] text-white font-medium bg-[#008000] rounded '>View All Products</button>
        </div>
        {/* Last section Images */}
        <div className='max-w-[1170] mx-auto mt-[90px] flex flex-col items-center justify-center gap-[21px]'>
          {/* Images */}
          <div className='flex gap-[20px] justify-between'>
            <span className='max-w-[614px] h-[470px]'>
              <img src="./images/Home/home1.jpeg" alt="home1" className='w-[614px] h-[470px]' />
            </span>
            <div className='flex flex-col gap-[18px]'>
              <span className='max-w-[494px] h-[217px]'>
                <img src="./images/Home/home2.jpeg" alt="home2" className='w-[494px] h-[217px]' />
              </span>
              <span className='max-w-[494px] h-[235px]'>
                <img src="./images/Home/home3.jpeg" alt="home3" className='w-[494px] h-[235px]' />
              </span>
            </div>
          </div>
        </div>
        {/* Last Services and Delivery */}
        <div className='max-w-[945px] mx-auto mt-[50px] mb-[100px] grid grid-cols-2 lg:grid-cols-3'>
          {/* 1st FREE AND FAST DELIVERY */}
          <div className='w-full flex flex-col gap-[24px] justify-center items-center'>
            <div className='grid place-items-center w-[80px] h-[80px] bg-gray-300 rounded-full'>
              <span className='grid place-items-center w-[58px] h-[58px] bg-black rounded-full'>
                <CiDeliveryTruck className='text-white w-[40px] h-[40px]' />
              </span>
            </div>
            <div className='flex flex-col gap-[8px]'>
              <h5 className='text-[20px] font-semibold leading-[28px] text-nowrap'>FREE AND FAST DELIVERY</h5>
              <p className='text-[14px] font-[400] leading-[21px] text-nowrap'>Free delivery for all orders over €140</p>
            </div>
          </div>
          {/* 2nd 24/7 CUSTOMER SERVICE */}
          <div className='w-full flex flex-col gap-[24px] justify-center items-center'>
            <div className='grid place-items-center w-[80px] h-[80px] bg-gray-300 rounded-full'>
              <span className='grid place-items-center w-[58px] h-[58px] bg-black rounded-full'>
                <PiHeadphones className='text-white w-[40px] h-[40px]' />
              </span>
            </div>
            <div className='flex flex-col justify-center items-center gap-[8px]'>
              <h5 className='text-[20px] font-semibold leading-[28px] text-nowrap'>24/7 CUSTOMER SERVICE</h5>
              <p className='text-[14px] font-[400] leading-[21px] text-nowrap'>Friendly 24/7 customer support</p>
            </div>
          </div>
          {/* 3rd MONEY BACK GUARANTEE */}
          <div className='w-full flex flex-col gap-[24px] justify-center items-center'>
            <div className='grid place-items-center w-[80px] h-[80px] bg-gray-300 rounded-full'>
              <span className='grid place-items-center w-[58px] h-[58px] bg-black rounded-full'>
                <AiOutlineSafety className='text-white w-[40px] h-[40px]' />
              </span>
            </div>
            <div className='flex flex-col gap-[8px] justify-center items-center'>
              <h5 className='text-[20px] font-semibold leading-[28px] text-nowrap'>MONEY BACK GUARANTEE</h5>
              <p className='text-[14px] font-[400] leading-[21px] text-nowrap'>We reurn money within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
