import React, { useContext, useEffect } from 'react'
import DishCard from './DishCard'
import { AppContext } from '../context/AppContext'
import { NavLink } from 'react-router-dom'
import { baseUrl } from '../baseUrl'

const DishesContainer = (props) => {

  // const {dishes, fetchDishes} = useContext(AppContext);
  
  // const fetchDetails = async() => {
  //   await fetchDishes();
  // }

  useEffect(() => {
    console.log(props.dishes)
  }, []);

  return (
    <div className='flex flex-col w-full items-center mt-[20px] gap-6 absolute'>
        
        <NavLink to={"/dish/1"}>
          <DishCard/>
        </NavLink>
        <NavLink to={"/dish/1"}>
          <DishCard/>
        </NavLink>
        <NavLink to={"/dish/1"}>
          <DishCard/>
        </NavLink>
        <NavLink to={"/dish/1"}>
          <DishCard/>
        </NavLink>
        <NavLink to={"/dish/1"}>
          <DishCard/>
        </NavLink>
        <NavLink to={"/dish/1"}>
          <DishCard/>
        </NavLink>
        
        
        {/* {
          props.dishes?.map((dish) => (
            <NavLink to={`/dish/${dish.id}`} className="flex flex-col items-center">
              <DishCard key={dish.id} dish={dish} />
            </NavLink>
          ))
        } */}
    </div>
  )
}

export default DishesContainer