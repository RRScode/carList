'use client'
import React, {useState, useEffect} from 'react';
import CarRows from './CarRows';
import NewCar from './NewCar';
import axios from 'axios';


export default function CarsTable({addNewCar, setAddNewCar}) {
  const [cars, setCars] = useState([]);

  useEffect(()=>{
      axios
      .get("http://localhost:3000/cars")
      .then((response)=>{
          const sortMostRecent = response.data.reverse()
          setCars(sortMostRecent);
      })
  }, []);

  return(
    <>
      {addNewCar && 
        <NewCar 
          cars={cars}
          setCars={setCars}
          setAddNewCar={setAddNewCar}
        />
      }
      <CarRows 
        cars={cars}
        setCars={setCars}/>
    </>
        

  )
}
