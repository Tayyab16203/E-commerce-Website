import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <div className='max-w-[1440px] mx-auto h-[781px] my-[30px] lg:my-[60px] flex items-center lg:justify-start justify-center'>
        {/* signup Image */}
        <span className='hidden lg:block w-full h-[781px]'>
          <img src="./images/Signup/signupImage.jpeg" alt="signupImage" className='w-[805px] h-[781px] bg-contain' />
        </span>
        {/* Enter Data */}
        <div className='w-[371px] h-[530px] mx-[80px]'>
          {/* heading */}
          <div className='w-[339px] h-[78px] flex flex-col gap-[24px] mb-[48px]'>
            <h1 className='text-[36px] leading-[30px] text-nowrap'>Create an account</h1>
            <p className='w-[191px] h-[24px] text-[16px] leading-[24px] text-nowrap'>Enter your details below</p>
          </div>
          {/* Name Email password */}
          <div className='w-[370px] h-[176px] flex flex-col gap-[40px] mb-[40px]'>
            <input type="text" placeholder='Name' className='h-[32px] w-full border-black border-b-[1px] outline-none' />
            <input type="email" placeholder='Email or Phone Number' className='h-[32px] w-full border-black border-b-[1px] outline-none' />
            <input type="password" placeholder='Password' className='h-[32px] w-full border-black border-b-[1px] outline-none' />
          </div>
          {/* Create Account Btn, Signup with google, Login link */}
          <div className='w-[371px] h-[188px] flex flex-col items-center gap-[16px]'>
            {/* Create Accout btn */}
            <button className='w-full h-[56px] bg-[#DB4444] text-[#FAFAFA] text-[16px] font-[500] leading-[24px] rounded'>Create Account</button>
            {/* Sign up With google */}
            <button className='w-full h-[56px] border-black border-[1px] text-[16px] leading-[24px] rounded flex justify-center items-center gap-[16px]'>
              {/* Gooogle svg */}
              <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1312_3366)">
                  <path d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z" fill="#4285F4" />
                  <path d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z" fill="#34A853" />
                  <path d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z" fill="#FBBC04" />
                  <path d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z" fill="#EA4335" />
                </g>
                <defs>
                  <clipPath id="clip0_1312_3366">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <p className='text-[16px] leading-[24px] font-[400]'>Sign up with Google</p>
            </button>
            {/* Login link */}
            <div className='p-[2px] flex gap-[16px] mt-[16px]'>
              <label htmlFor="login">Already have account?</label>
              <NavLink to="/login">
                <p id='login' className='border-b-[1px] border-black'>Login</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
