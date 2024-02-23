'use client'
import React, {useState, useEffect}from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import axios from 'axios';


export default function CarsTable() {
  const [cars, setCars] = useState([]);

  useEffect(()=>{
      axios
        .get("http://localhost:3000/cars")
        .then((response)=>{
          setCars(response.data);
        })
      }, []);
      

  const EditOrDeleteCar = () => {
    const [editing, setIsEditing] = useState(false);
    const [deleting, setIsDeleting] = useState(false);

    if (editing === true) {
      return(
        <div>
          <CancelTwoToneIcon onClick={() => {setIsEditing(false)}}></CancelTwoToneIcon>
        </div>
    )} else if (deleting === true) {
      return(
        <div>
          <CancelTwoToneIcon onClick={() => {setIsDeleting(false)}}></CancelTwoToneIcon>
        </div>
    )} else {
      return(
        <div>  
          <ModeEditOutlineTwoToneIcon onClick={() => {setIsEditing(true)}}></ModeEditOutlineTwoToneIcon>
          <DeleteTwoToneIcon onClick={() => {setIsDeleting(true)}}></DeleteTwoToneIcon>
        </div>

  )}}   
    

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="simple table">
      {/* sx={{ minWidth: 650 }} */}
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
              <TableRow>
                <TableCell>{x.make}</TableCell>
                <TableCell align="center">{x.model}</TableCell>
                <TableCell align="center">{x.year}</TableCell>
                <TableCell align="center">{x.id}</TableCell>
                <TableCell size="small" align="right">
                    <EditOrDeleteCar/>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
