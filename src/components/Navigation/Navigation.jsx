import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartThin } from "react-icons/pi";
import { TbLayoutNavbarExpandFilled, TbLayoutNavbarCollapseFilled } from "react-icons/tb";
import SmallNavigation from "./SmallNavigation";

const Navigation = () => {

    const [nav, setNav] = useState(false);

    const location = useLocation();

    const isHomePage = location.pathname === "/";
    const isSignupPage = location.pathname === "/signup";
    const isLoginPage = location.pathname === "/login";

    const showNavbar = () => {
        return setNav(!nav);
    }
    console.log(nav);

    return (
        <>
            <nav className={`max-w-[1440px] mx-auto max-h-[140px] flex flex-col border-b-2`}>
                {isLoginPage && (
                    <div className="hidden w-full h-[48px] lg:flex items-center justify-center bg-black text-white ">
                        <div className="flex items-center gap-[231px]">
                            <div className="flex items-center gap-[8px]">
                                <p className="font-medium">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                                <h3 className="font-bold border-white border-b-[1px]">ShopNow</h3>
                            </div>
                            <div className="flex items-center">
                                <p className="w-[49px] h-[21px] text-[14px] leading-[21px]">English</p>
                                <IoIosArrowDown />
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex items-center justify-around">
                    {/* Navigation Logo */}
                    <span className="w-[128px] h-[78px]">
                        <img
                            src={`${isHomePage ? "./images/Home/homeLogo.png" : "./images/navigation/NavigationLogo.png"}`}
                            alt="NavLogo"
                            className="w-[128px] h-[78px]"
                        />
                    </span>
                    {/* home contact about Signup */}
                    <div className={`max-w-[1170px] h-[38px] hidden lg:flex justify-center items-center`}>
                        {/* Navlinks */}
                        <div className="max-w-[717px] h-[24px] flex gap-[48px] font-medium">
                            <NavLink to="/" className={` border-transparent ${isHomePage ? "hover:border-[#DB7B04] hover:text-[#DB7B04]" : " hover:border-[#000000] hover:text-black"} text-[#008000] hover:border-b-[1px] transition-all duration-200 `} >Home</NavLink>
                            <NavLink to="/" className={` border-transparent ${isHomePage ? "hover:border-[#DB7B04] hover:text-[#DB7B04]" : " hover:border-[#000000] hover:text-black"} text-[#008000] hover:border-b-[1px] transition-all duration-200 `}>Contact</NavLink>
                            <NavLink to="/" className={` border-transparent ${isHomePage ? "hover:border-[#DB7B04] hover:text-[#DB7B04]" : " hover:border-[#000000] hover:text-black"} text-[#008000] hover:border-b-[1px] transition-all duration-200 `} >About</NavLink>
                            <NavLink to="/signup" className={` border-transparent ${isHomePage ? "hover:border-[#DB7B04] hover:text-[#DB7B04]" : " hover:border-[#000000] hover:text-black"} text-[#008000] hover:border-b-[1px] transition-all duration-200 `} >Sign Up</NavLink>
                        </div>
                    </div>
                    {/* for small devices Navbar icons */}
                    <div onClick={showNavbar} className="lg:hidden block hover:cursor-pointer z-20">
                        {nav ? <TbLayoutNavbarCollapseFilled className="w-[30px] h-[30px] text-[#E18804]" /> : <TbLayoutNavbarExpandFilled className="w-[30px] h-[30px]" />}
                    </div>
                    {/* Search and icon section */}
                    <div className="flex flex-row gap-[24px]">
                        {/* search */}
                        <div className={`${isHomePage ? "w-[347]" : "w-[243px]"} h-[38px] bg-[#F5F5F5] text-[#000000]`}>
                            <div className="w-[211px] h-[24px] my-[7px] ml-[20px] mr-[12px] flex gap-[34px] items-center">
                                <input type="text" placeholder="What are you looking for?" className="w-[153px] h-[18px] text-[12px] leading-[18px] outline-none bg-[#F5F5F5]" />
                                {/* search icon */}
                                <div className="p-[4px]">
                                    <IoIosSearch className="font-bold" />
                                </div>
                            </div>
                        </div>

                        {/* icons and select language */}
                        {isHomePage && (
                            <div className="flex items-center gap-[16px]">
                                <div className="p-1">
                                    <FaRegHeart className="w-[20px] h-[20px]" />
                                </div>
                                <div className="p-1">
                                    <PiShoppingCartThin className="w-[20px] h-[20px]" />
                                </div>
                                {/* select language */}
                                <div>
                                    <div className="flex items-center gap-[3px]">
                                        <span className="w-[27px] h-[17px] overflow-hidden rounded">
                                            <img src="./images/Home/Flag.png" alt="" />
                                        </span>
                                        <p className="w-[49px] h-[21px] text-[14px] leading-[21px]">English</p>
                                    </div>

                                </div>
                            </div>
                        )}

                        {/* select language */}
                        {isSignupPage && (
                            <div className="flex items-center gap-[3px]">
                                <p className="w-[49px] h-[21px] text-[14px] leading-[21px]">English</p>
                                <svg width="11.64" height="18.56" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.28069 7.21875L16.4994 0L18.5615 2.06208L9.28069 11.3429L-0.000144958 2.06208L2.06194 0L9.28069 7.21875Z" fill="black" />
                                </svg>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            {/* For small Devices Navigation */}
            <nav className={` ${nav ? "translate-y-0" : "-translate-y-[100vh]"} absolute w-full lg:hidden block transition-all ease-in-out duration-500`}>
                <SmallNavigation showNavbar={showNavbar} />
                <div onClick={showNavbar} className={`${nav ? "translate-x-0" : "-translate-x-[100vw]"} w-[100vw] h-[100vh] bg-[#0000007a] transition-all duration-500`}></div>
            </nav>
        </>
    );
};

export default Navigation;
