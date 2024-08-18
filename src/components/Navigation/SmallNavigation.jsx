import React from 'react'
import { NavLink } from 'react-router-dom'

const SmallNavigation = ({ showNavbar }) => {
    return (
        <>
            {/* home contact about Signup */}
            <div className={`max-w-[1170px] h-full flex flex-col gap-[10px] bg-[#E18804] text-xl font-semibold text-white p-5`}>
                <NavLink to="/">
                    <div onClick={showNavbar} className='p-3 hover:bg-white hover:text-black rounded-xl transition-all'>
                        Home
                    </div>
                </NavLink>
                <NavLink to="/">
                    <div onClick={showNavbar} className='p-3 hover:bg-white hover:text-black rounded-xl transition-all'>
                        Contact
                    </div>
                </NavLink>
                <NavLink to="/">
                    <div onClick={showNavbar} className='p-3 hover:bg-white hover:text-black rounded-xl transition-all'>
                        About
                    </div>
                </NavLink>
                <NavLink to="/signup">
                    <div onClick={showNavbar} className='p-3 hover:bg-white hover:text-black rounded-xl transition-all'>
                        Sign Up
                    </div>
                </NavLink>
            </div>
        </>
    )
}

export default SmallNavigation
