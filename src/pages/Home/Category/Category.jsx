import React from 'react'

const Category = ({image}) => {
    return (
        <div>
            <span className='w-[230px] h-[167px]'>
                <img src={image} alt="categoriesImages" className='w-[230px] h-[167px]' />
            </span>
        </div>
    )
}

export default Category;
