'use client'
import React, { useState, useEffect } from 'react'
import CarsTable from '@/components/CarTableComponents/CarsTable';
import { PieChartMake } from '@/components/PieChartComponents/PieChartMake';
import { BarPlotColor } from '@/components/BarPlotComponents/BarPlotColor';
import { BarPlotDataColor } from '@/components/BarPlotComponents/BarPlotDataColor';
import axios from 'axios';


const Page = () => {
  
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cars")
      .then((response) => {
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
    if (y == 0) {
      return x
    } else if (x.make == arr[y - 1].make) {
      x.count = x.count + arr[y - 1].count;
      arr[y - 1].count = 0;
      return x
    } else {
      return x
    }
  })

  const data = WIPData1.filter((x) => {
    if (x.count > 0)
      return x
  })



  return (
    <>
      <h1>JC's Garage</h1>
      <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <PieChartMake
          data={data}
          width={450}
          height={450}
        />
        <BarPlotColor
          BarPlotDataColor={BarPlotDataColor} 
          width={400} 
          height={400}
        />
      </div>
      
      
      <CarsTable
        cars={cars}
        setCars={setCars}
      />
    </>
  )
}

export default Page