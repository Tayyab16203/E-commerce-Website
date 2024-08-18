import React from 'react'
import { useLocation } from 'react-router-dom';
import { TiSocialFacebook } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { PiCopyrightBold } from "react-icons/pi";

const Footer = () => {

    const location = useLocation();

    const getFooterBgColor = () => {
        switch (location.pathname) {
            case '/login':
                return 'bg-black text-white';
            case '/signup':
                return 'bg-[#71B86B]';
            default:
                return 'bg-[#71B86B]'; // Default footer color
        }
    };

    const getBorderColor = () => {
        switch (location.pathname) {
            case '/login':
                return 'border-white';
            case '/signup':
                return 'border-black';
            default:
                return 'border-black'; 
        }
    };

    const isHomePage = location.pathname === "/";

    
    return (
        <>
            <footer className={` ${getFooterBgColor()} ${isHomePage ? "text-white bg-[#008000]" : ""} max-w-[1440px] mx-auto flex flex-col justify-around items-center`}>
                <div className='max-w-[1440px]  p-[50px] grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-[60px]'>
                    {/* LOGO and Subscribe */}
                    <div className='flex flex-col gap-[16px]'>
                        {/* footer image */}
                        <span className='w-[178px] h-[98px]' >
                            <img src="./images/footer/footerlogo.png" alt="footerlogo" className='w-[178px] h-[98px]' />
                        </span>
                        <h3 className='text-[20px] leading-[28px] font-[500]'>Subscribe</h3>
                        <p>Get 10% off your first order</p>
                        <div className={`flex justify-around items-center gap-[32px] border-[2px] ${getBorderColor()} rounded px-[12px] py-[12px]`}>
                            <input type="email" placeholder='Enter your email' className={`placeholder:text-gray-700 w-[130px] h-[24px] ${getFooterBgColor()} ${isHomePage ? "text-white bg-[#008000]" : ""} outline-none font-[400] text-[16px] leading-[24px]`} />
                            <HiOutlineArrowCircleRight className='w-[24px] h-[24px]'/>
                        </div>
                    </div>
                    {/* Support */}
                    <div className='flex flex-col gap-[24px]'>
                        <h3 className='text-[20px] leading-[28px] font-[500] mt-[16px]'>Support</h3>
                        <div className='flex flex-col gap-[16px]'>
                            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                            <p>exclusive@gmail.com</p>
                            <p>+88015-88888-9999</p>
                        </div>
                    </div>
                    {/* Account */}
                    <div className='flex flex-col gap-[24px] text-nowrap'>
                        <h3 className='text-[20px] leading-[28px] font-[500] mt-[16px]'>Account</h3>
                        <div className='flex flex-col gap-[16px]'>
                            <p>My Account</p>
                            <p>Login / Register</p>
                            <p>Cart</p>
                            <p>Wishlist</p>
                            <p>Shop</p>
                        </div>
                    </div>
                    {/* Quick link */}
                    <div className='flex flex-col gap-[24px]  text-nowrap'>
                        <h3 className='text-[20px] leading-[28px] font-[500] mt-[16px] text-nowrap'>Quick Link</h3>
                        <div className='flex flex-col gap-[16px]'>
                            <p>Privacy Policy</p>
                            <p>Terms Of Use</p>
                            <p>FAQ</p>
                            <p>Contact</p>
                        </div>
                    </div>
                    {/* Dawnload App */}
                    <div className='flex flex-col gap-[24px] text-nowrap'>
                        <h3 className='text-[20px] leading-[28px] font-[500] mt-[16px]'>Dawnload App</h3>
                        <div className='flex flex-col gap-[16px]'>
                            <p className='text-[12px] leading-[18px]'>Save €3 with App New User Only</p>
                            <div className='flex gap-[8px]'>
                                {/* QRcode Image */}
                                <div className='w-[80px] h-[80px]'>
                                    <img src="./images/footer/QRcode.jpeg" alt="QRcode" className='w-[80px] h-[80px]' />
                                </div>
                                <div className='flex flex-col items-center'>
                                    {/* GooglePlay image */}
                                    <div className='w-[90px] h-[30px]'>
                                        <img src="./images/footer/GooglePlay.png" alt="googleplay" className='w-[90px]' />
                                    </div>
                                    {/* Appstore image */}
                                    <div className='w-[80px] h-[40px] p-0'>
                                        <img src="./images/footer/Appstore.png" alt="Appstore" className='w-[80px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Social media icons  */}
                        <div className='flex items-center gap-[24px]'>
                            {/* Facebook */}
                            <div className='w-[24px] h-[24px]'>
                                <TiSocialFacebook className='w-[24px] h-[24px]' />
                            </div>
                            {/* twitter */}
                            <div className='w-[24px] h-[24px]'>
                                <CiTwitter className='w-[24px] h-[24px]' />
                            </div>
                            {/* Instagram */}
                            <div className='w-[24px] h-[24px]'>
                                <FaInstagram className='w-[24px] h-[24px]' />
                            </div>
                            {/* Linkedin */}
                            <div className='w-[24px] h-[24px]'>
                                <RiLinkedinLine className='w-[24px] h-[24px]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`flex gap-[8px] justify-center items-center h-[40px] w-full border-t-[1px] ${getBorderColor()}`}>
                   <PiCopyrightBold className='w-[21px] h-[20px]'/>
                    <p>Copyright Rimel 2022. All right reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
