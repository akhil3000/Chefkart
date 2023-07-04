import React, { useContext, useEffect } from 'react'
import arrow from '../assets/arrow.svg'
import calender from '../assets/calender.svg'
import clock from '../assets/clock.svg'
import downArrow from '../assets/downArrow.svg'
import DishesContainer from '../components/DishesContainer'
import { AppContext } from '../context/AppContext'

const Home = () => {

  const {dishes, fetchDishes} = useContext(AppContext);

  const fetchDetails = async() => {
    await fetchDishes();
    console.log(dishes)
  }

  useEffect(() => {
    fetchDetails();

  }, []);

  return (
    <div className='flex flex-col w-[100vw] h-[100vh] relative'>
      <div className='flex mt-[10px] ml-2 mb-4'>
            <img src={arrow} ></img>
            <div className='font-semi text-base ml-3'>Select Dishes</div>
        </div>

        <div className='w-full h-[42px] bg-black ' > </div>
        {/* white-box */}
        <div className='flex flex-row w-[86%] h-[63px] shadow-lg absolute 
          top-[70px] left-[23px] bg-[#FFFFFF] rounded-lg items-center justify-around'>
          <div className='flex flex-row'>
            <img src={calender} alt="" height="16px" width="16px"/>
            <p className='text-xs ml-[5px] font-semibold'>21 May 2021</p>
          </div>
          <div className=' bg-[#D6D6D6CE]  w-[1px] h-[26px]'></div>
          <div className='flex flex-row'>
            <img src={clock} alt="" height="16px" width="15px" />
            <p className='text-xs ml-[5px] font-semibold'>10:30 Pm-12:30 Pm</p>
          </div>
        </div>
        {/* navbar */}
        <div className='flex flex-row ml-[8px] mr-[8px] mt-[62px] justify-between'>
          <div className='h-[24px] w-[76px] rounded-[19px] bg-[#FFF9F2] 
           font-semibold  text-sm text-center text-[#FF941A] border-[#FF941A] border-[1px]'>
            Italian
          </div>
          <div className='h-[24px] w-[76px] rounded-[19px] 
             text-sm text-center text-[#BDBDBD] border-[#8A8A8A] border-[1px]'>
            Indian
          </div>
          <div className='h-[24px] w-[76px] rounded-[19px] 
             text-sm text-center text-[#BDBDBD] border-[#8A8A8A] border-[1px]'>
            Indian
          </div>
          <div className='h-[24px] w-[76px] rounded-[19px]  
             text-sm text-center text-[#BDBDBD] border-[#8A8A8A] border-[1px]'>
            Indian
          </div>
          
        </div>

        <p className='ml-[23px] mt-[21px] text-[19px] font-semibold'>Popular Dishes</p>

        <div className='flex flex-row justify-around mt-[15px]'>
          {/* <div className='h-[57px] w-[57px] rounded-full border-[#FF941A] border-[1px]'>
            <img></img>
          </div> */}
          {
            dishes.popularDishes?.map((dish) => (
              <div className='flex h-[57px] w-[57px] rounded-full border-[#FF941A] border-[1px]  
                  box-border items-center  justify-center ' key={dish.id}>
                <div className=' flex relative text-center  w-[95%] h-[95%] justify-center items-center rounded-full
                  bg-gradient-to-br from-black via-gray-900 to-black'> 
                  <img src={dish.image} className="object-cover rounded-full h-[100%] w-[100%] 
                    opacity-80" /> 
                  <p className='absolute text-[9px] font-medium text-[#FFFFFF] break-words max-w-[95%]'>{dish.name}</p>
                </div>
            </div>
            ))
          }
        </div>

      <div className='w-full h-[3px] bg-[#F2F2F2] mt-[20px]'></div>

      <div className='relative flex flex-col overflow-x-hidden overflow-y-scroll z-10'>
        <div className=' flex flex-row w-[95%] mt-[19px] mx-auto  '>
          <div className='flex  flex-row justify-between w-full'>
            <div className='flex flex-row'>
              <p className='mr-[5px]'>Recommended </p>
              <img src={downArrow}/>
            </div>
            <div className='h-[22px] w-[56px] bg-[#1C1C1C] rounded-[6px] text-white 
              text-[11px] font-semibold text-center leading-[20px] '>
              Menu
            </div>
          </div>
        </div>
        <div className=' h-[600px] w-full  mt-7'>
         <DishesContainer dishes={dishes.dishes}/>
        </div>
      </div>
    </div>
  )
}

export default Home
