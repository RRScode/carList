'use client'
import React, {useState, useEffect} from 'react'
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


const NewCar = ({setAddNewCar}) => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');

    return (
        <TableRow>
                    <TableCell>
                        <input 
                        type="text"
                        placeholder="Make"
                        value={make}
                        onChange={(e) => {setMake(e.target.value)}}
                        ></input>
                    </TableCell>
                    <TableCell align="center">
                        <input
                        type="text" 
                        placeholder="Model"
                        value={model}
                        onChange={(e) => {setModel(e.target.value)}}
                        ></input>                    </TableCell>
                    <TableCell align="center">
                        <input 
                        type="number"
                        placeholder="Year"
                        value={year}
                        onChange={(e) => {setYear(e.target.value)}}
                        ></input>
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell size="small" align="right">
                        <CancelTwoToneIcon onClick={() => {setAddNewCar(false)}}></CancelTwoToneIcon>
                        <SaveTwoToneIcon onClick={() => {}}></SaveTwoToneIcon>
                    </TableCell>
                </TableRow>
  )
}

export default NewCar