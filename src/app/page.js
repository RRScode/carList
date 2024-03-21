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


  return (
    <>
      <h1>JC's Garage</h1>
      <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <PieChartMake
          cars={cars}
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