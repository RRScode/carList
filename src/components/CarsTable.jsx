'use client'
import React, {useState, useEffect}from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import CarRow from './CarRow';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import Stack from '@mui/material/Stack';



export default function CarsTable() {
  const [cars, setCars] = useState([]);

  useEffect(()=>{
      axios
        .get("http://localhost:3000/cars")
        .then((response)=>{
          setCars(response.data);
        })
      }, []);
      
 return (
  <>
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="flex-end"
      spacing={3}
      m='15px'
    >
      <AddCircleOutlineTwoToneIcon/>

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
            {cars.map((x) => {
              return(
                <CarRow
                  x={x}
                  cars={cars}
                  setCars={setCars}
                  />
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
  </>
  );
}
