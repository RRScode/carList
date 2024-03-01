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


 
 
  const listByMake = cars.map((x) => {
    return x.make
  })
  const sortedListByMake = listByMake.sort();
  const WIPData = sortedListByMake.map((x) => {
    let makeData = {
      make: x,
      count: 1
    }
    return makeData
  });
  const WIPData1 = WIPData.map((x, y, arr) => {
    if (y == 0){
      return  x
    }else if (x.make == arr[y-1].make){
      x.count = x.count + arr[y-1].count;
      arr[y-1].count = 0;
      return x
    } else {
      return x
    }
   })
   const makeCount = WIPData1.filter((x) => {
    if (x.count > 0)
    return x
   })

console.log(makeCount)








/** 
const makeCount = () => {  
  
}
 
const sortedCars = cars.sort();

const itemListByMake = sortedCars.map((x) => {

  const carMake = [{ 
       make: x.make,
     value: 0
     }]
    
     return carMake
  });
  
   const makeCount = [];

   itemListByMake.forEach((x) => {
     makeCount[y] = {
       make: x.make,
       value: x.value
     }
    if (x = makeCount[y]){
        y.value += 1
     } else {y.value = 1}
    
   })
  
   
    if (make = carMake.make) {
      carMake.value += 1
   } else { carMake.value = 1}
  
    const makeList = itemListByMake.forEach((x) => {
        itemListByMake.filter()
     })



  

  

   itemListByMake.sort()
  
    const counter = listOfMakers.map((x) => {
   if (x == prev)
   })
    
  
   }

   const newData = [];
   cars.map((car) => {
     newData.length === 0 ? newData.push({make: car.make, count: 0}) :
   newData.forEach((dataItem, dataIndex) => {
     if (dataItem.make === car.make) {
       
      // }
      // newData.push({make: car.make, count: 1})
     });
   });
 
*/

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