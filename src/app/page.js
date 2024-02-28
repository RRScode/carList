import React from 'react'
import CarsTable from '@/components/CarTableComponents/CarsTable';
import {PieChart} from '@/components/PieChartComponents/PieChart';
import { data } from '@/components/PieChartComponents/data';


const Page = () => {
  return (
    <>
      <h1>JC's Garage</h1>
      <PieChart
        data={data} 
        width={400} 
        height={400} 
      />
      <CarsTable/>
    </>
  )
}

export default Page