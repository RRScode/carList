'use client'
import React, {useState, useEffect} from 'react'
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import Stack from '@mui/material/Stack';

import NewCar from './NewCar.jsx';
import CarRows from './CarRows.jsx';


const CarsTable = () => {
  const [addNewCar, setAddNewCar] = useState(false)
  const [cars, setCars] = useState([]);

  useEffect(()=>{
      axios
      .get("http://localhost:3000/cars")
      .then((response)=>{
          const sortMostRecent = response.data.reverse()
          setCars(sortMostRecent);
      })
  }, []);


  return (
    <div>
        <h1>JC's Garage</h1>
      <>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
          spacing={3}
          m='15px'
        >
          <AddCircleOutlineTwoToneIcon onClick={() => {setAddNewCar(true)}}/>
        </Stack>

        <TableContainer component={Paper}>
            <Table size="small" aria-label="simple table">        
              <TableHead>
                <TableRow>
                  <TableCell>Make</TableCell>
                  <TableCell align="center">Model</TableCell>
                  <TableCell align="center">Year</TableCell>
                  <TableCell align="center">Item #</TableCell>
                  <TableCell align="right">Edit / Delete</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
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
              </TableBody>
            </Table>
          </TableContainer>
      </>
    </div>
  )
}

export default CarsTable