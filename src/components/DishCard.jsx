import React from 'react'
import veg from '../assets/veg.svg'
import star from '../assets/star.svg'
import refregister from '../assets/refregister.svg'
import dish from '../assets/dish.png'

const DishCard = (props) => {
  return (
    <div className='w-[95%] flex flex-row z-20'>
        <div className='w-[50%] flex flex-col'>
            <div className='flex flex-row  justify-between items-center'>
                <div className='text-[14px] text-[#1C1C1C] font-medium'>Masala Mughlai</div>
                <img src={veg} width="10%"/>
                <div className='flex flex-row h-[10px] w-[22px] bg-[#51C452] rounded-[2px]
                    justify-center align-middle'>
                    <p className='text-[6px] text-white font-semibold '>4.2</p>
                    <img src={star} width="4px"/>
                </div>
            </div>
            <div className='flex flex-row mt-[5px] justify-around items-center'>
                <img src={refregister} width="9px" height="12px" />
                <img src={refregister} width="9px" height="12px" />

                <div className=' bg-[#D6D6D6CE]  w-[1px] h-[26px]'></div>

                <div className='flex flex-col'>
                    <p className='text-[8px] font-medium'>Ingredients</p>
                    <p className='text-[6px] text-[#FF8800]'>viewlist</p>
                </div>
            </div>
            <div className='text-[11px] text-[#707070] text-left'>
                    chicken fried in deep tomato sauce with delicous spices
            </div>
        </div>

        <div className='flex relative justify-center items-center w-[50%]'>
            <img src={dish} className="w-[7em]" />
            <div className='w-[58px] h-[21px] border-[1px] rounded-[3px] border-[#FF9A26] 
                absolute bg-[#FFFFFF] top-[85%]'>
                <p className='text-[11px] text-[#FF8800] font-semibold text-center leading-[19px]'>Add</p>
                <img/>
            </div>
        </div>
        
    </div>
  )
}

export default DishCard