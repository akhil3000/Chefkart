import React from 'react'
import arrow from '../assets/arrow.svg'
import star from '../assets/star.svg'
import clock2 from '../assets/clock2.png'
import vegetable1 from '../assets/vegetables1.png'
import vegetable2 from '../assets/vegetables2.png'
import downArrow from '../assets/downArrow.svg'
import fridge from '../assets/fridge.png'
import { useNavigate, useNavigation, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'
import { useEffect } from 'react'

const DishPage = () => {
    let {id} = useParams();
    const navigate = useNavigate();
    const {dish, fetchDish} = useContext(AppContext);

    const fetchDetails = async() => {
        await fetchDish(id);
        console.log(dish);
    }

    const goback = (e) => {
        navigate("/", {replace: true});
    }

    useEffect(() => {
        fetchDetails();
    }, []);

  return (
    <div className='w-full flex flex-col h-full justify-center max-w-sm'>
        <button className='mt-4  mb-10  w-[90%] mx-auto ' onClick={goback}>
            <img src={arrow} alt="" />
        </button>
        <div className='flex flex-col w-[90%] h-full mx-auto relative'>
            <div className='flex flex-row items-center z-10'>
                <p className='text-[23px] font-semibold mr-[4%]'>{dish?.name}</p>
                <div className='flex flex-row h-[15px] w-[27px] bg-[#51C452] rounded-[2px]
                    justify-evenly items-center '>
                    <p className='text-[7px] text-white font-semibold '>4.2</p>
                    <img src={star} width="4px" height="4px" />
                </div>
            </div>
            <p className='text-[#A3A3A3] text-[8px] w-[57%] z-10'>
                Mughlai Masala is a style of cookery developed in the Indian 
                Subcontinent by the imperial kitchens of the Mughal Empire.
            </p>
            <div className='flex flex-row items-center gap-1 mt-[26px] mb-4'>
                <img src={clock2} className='w-[12px] h-[12px]' />
                <p className='text-[10px]'>1 hour</p>
            </div>
            <div className='w-[200px] h-[200px] bg-[#FFF9F2] rounded-full absolute 
                left-[160px] top-[-20px]'>
            </div>
            <img src={vegetable1} className="w-[321px] absolute left-[52%] top-[55px]" />
            <img src={vegetable2} className="w-[215px] absolute left-[78%]" />

            <div className='flex flex-col gap-1 mt-[56px] mb-[16px]'>
                <p className='text-[17px] font-semibold'>Ingredients</p>
                <p className='text-[8px] text-[#8A8A8A]'>For 2 people</p>
            </div>

            <div className='border-[0.5px] border-[#D6D6D6CE]'></div>

            <div className='flex flex-col mt-[32px]'>
                <div className='flex flex-row gap-3'>
                    <p className='text-[15px] font-medium'>Vegetables (05)</p>
                    <img src={downArrow} className="w-[10px]" />
                </div>
                <div className='flex flex-col mt-3 gap-2'>
                    <div className='flex flex-row text-[10px] justify-between'>
                        <p>Cauliflower</p>
                        <p>01 pc</p>
                    </div>
                    <div className='flex flex-row text-[10px] justify-between'>
                        <p>Tomato</p>
                        <p>10 pc</p>
                    </div>
                    <div className='flex flex-row text-[10px] justify-between'>
                        <p>spinach</p>
                        <p>1/2 Kg</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-[32px]'>
                <div className='flex flex-row gap-3'>
                    <p className='text-[15px] font-medium'>Spices (10)</p>
                    <img src={downArrow} className="w-[10px]" />
                </div>
                <div className='flex flex-col gap-2 mt-3'>
                    <div className='flex flex-row text-[10px] justify-between'>
                        <p>Coriander</p>
                        <p>100 gram</p>
                    </div>
                    <div className='flex flex-row text-[10px] justify-between'>
                        <p>Mustard oil</p>
                        <p>1/2 liters</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col mt-[32px]'>
                <div className='flex flex-row gap-3'>
                    <p className='text-[20px] font-semibold'>Appliances</p>
                </div>
                <div className='flex flex-row gap-5 mt-4'>
                    <div className='flex flex-col h-[95px] w-[72px] bg-[#F5F5F5] rounded-lg justify-center 
                        gap-1 items-center'>
                        <img src={fridge} alt="" />
                        <p className='text-[11px]'>Refrigerator</p>
                    </div>
                    <div className='flex flex-col h-[95px] w-[72px] bg-[#F5F5F5] rounded-lg justify-center 
                        gap-1 items-center'>
                        <img src={fridge} alt="" />
                        <p className='text-[11px]'>Refrigerator</p>
                    </div>
                    <div className='flex flex-col h-[95px] w-[72px] bg-[#F5F5F5] rounded-lg justify-center 
                        gap-1 items-center'>
                        <img src={fridge} alt="" />
                        <p className='text-[11px]'>Refrigerator</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DishPage