'use client'
import React, {useState, useEffect} from 'react'
import CarsTable from '@/components/CarTableComponents/CarsTable';
import {PieChart} from '@/components/PieChartComponents/PieChart';
import axios from 'axios';


const Page = () => {
  const [cars, setCars] = useState([]);
  const [data, setData] = useState([]);

  
  useEffect(()=>{
    axios
    .get("http://localhost:3000/cars")
    .then((response)=>{
      const sortMostRecent = response.data.reverse()
      setCars(sortMostRecent);
      
    })
  }, []);

// // const makeCount = () => {  
  
// // }
 
//   const sortedCars = cars.sort();

//   const itemListByMake = sortedCars.map((x) => {

//     const carMake = [{ 
//       make: x.make,
//       value: 0
//     }]
    
//     return carMake
//   });
  
//   const makeCount = [];

//   itemListByMake.forEach((x) => {
//     makeCount[y] = {
//       make: x.make,
//       value: x.value
//     }
//     if (x = makeCount[y]){
//        y.value += 1
//     } else {y.value = 1}
    
//   })
  
//   console.log(makeCount)
//   // if (make = carMake.make) {
//   //   carMake.value += 1
//   // } else { carMake.value = 1}
  
//   // const makeList = itemListByMake.forEach((x) => {
//   //     itemListByMake.filter()
//   //   })



  

  

  // itemListByMake.sort()
  
  // // const counter = listOfMakers.map((x) => {
  //   //   if (x == prev)
  //   // })
    
  // console.log(itemListByMake)
  // }

  const newData = [];
  cars.map((car) => {
    /**
     * check if newData Array contains object with make that matches current car make
     * if the newData array contains match, increment count of that matching newData array object
     * if no match, create new object in newData array with matching make and set count to 1
     */

    newData.length === 0 ? newData.push({make: car.make, count: 0}) :
    newData.forEach((dataItem, dataIndex) => {
      if (dataItem.make === car.make) {
        console.log(newData[dataIndex])
        // console.log(dataIndex)
      }
      // newData.push({make: car.make, count: 1})
    });
  });
  // console.log(newData)
  
  return (
    <>
      <h1>JC's Garage</h1>
      <PieChart
        data={data}
        width={100} 
        height={100} 
      />
      <CarsTable
        cars={cars}
        setCars={setCars}
      />
    </>
  )
}

export default Page