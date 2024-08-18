import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className='max-w-[1440px] mx-auto h-[781px] my-[30px] lg:my-[60px] flex items-center lg:justify-start justify-center'>
        {/* signup Image */}
        <span className='hidden lg:block w-full h-[781px]'>
          <img src="./images/Signup/signupImage.jpeg" alt="signupImage" className='w-[100%] h-[100%] ' />
        </span>
        {/* Enter Data */}
        <div className='w-[371px] h-[530px] mx-[80px]'>
          {/* heading */}
          <div className='w-[339px] h-[78px] flex flex-col gap-[24px] mb-[48px]'>
            <h1 className='text-[36px] leading-[30px] text-nowrap'>Log in to Exclusive</h1>
            <p className='w-[191px] h-[24px] text-[16px] leading-[24px] text-nowrap'>Enter your details below</p>
          </div>
          {/*  Email and password */}
          <div className='w-[370px] flex flex-col gap-[40px] mb-[40px]'>
            <input type="email" placeholder='Email or Phone Number' className='h-[32px] w-full border-black border-b-[1px] outline-none' />
            <input type="password" placeholder='Password' className='h-[32px] w-full border-black border-b-[1px] outline-none' />
          </div>
          {/* Create Account Btn, Signup with google, Login link */}
          <div className='w-full flex justify-between items-center gap-[16px]'>
            {/* Create Accout btn */}
            <button className='w-[143px] h-[56px] bg-[#DB4444] text-[#FAFAFA] text-[16px] font-[500] leading-[24px] rounded'>Log in</button>
            <NavLink to="/">
            <p className='text-[#DB4444] font-[400]'>
            Forget Password?
            </p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
