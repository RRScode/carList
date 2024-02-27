import React from 'react';
import CarRows from './CarRows';
import NewCar from './NewCar';


export default function CarsTable({addNewCar, setAddNewCar}) {

  return(
    <>
      {addNewCar && 
        <NewCar setAddNewCar={setAddNewCar}
        />
      }
      <CarRows/>
    </>
        

  )
}
