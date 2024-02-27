import React from 'react';
import CarRows from './CarRows';


export default function CarsTable({addNewCar, setAddNewCar}) {

  return(
    <>
      {addNewCar && <NewCar/>}
      <CarRows/>
    </>
        

  )
}
