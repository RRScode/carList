'use client'
import React, {useState, useEffect} from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import EditOrDeleteCar from './EditOrDeleteCar';


const CarRows = ({cars, setCars}) => {
    
    
    const CarItemRow = ({setCars, carItem}) => {
        const [editing, setEditing] = useState(false);
        const [deleting, setDeleting] = useState(false);

        const [make, setMake] = useState(`${carItem.make}`);
        const [model, setModel] = useState(`${carItem.model}`);
        const [year, setYear] = useState(`${carItem.year}`);
        const [color, setColor] = useState(`${carItem.color}`);

        const carData = {
            make,
            model,
            year,
            color,
            id :`${carItem.id}`
        }

        return(
            <>
                <TableRow>
                    <TableCell>
                        {editing ?
                        <input 
                        type="text"
                        value={make}
                        onChange={(e) => {setMake(e.target.value)}}
                        ></input> : carItem.make}
                    </TableCell>
                    <TableCell align="center">
                        {editing ? 
                        <input
                        type="text" 
                        value={model}
                        onChange={(e) => {setModel(e.target.value)}}
                        ></input> : carItem.model}
                    </TableCell>
                    <TableCell align="center">
                        {editing ? 
                        <input 
                        type="number"
                        value={year}
                        onChange={(e) => {setYear(e.target.value)}}
                        ></input> : carItem.year}
                    </TableCell>
                    <TableCell align="center">
                        {editing ? 
                        <input 
                        type="text"
                        value={color}
                        onChange={(e) => {setColor(e.target.value)}}
                        ></input> : carItem.color}
                    </TableCell>
                    <TableCell align="center">{carItem.id}</TableCell>
                    <TableCell size="small" align="right">
                        <EditOrDeleteCar
                            editing={editing}
                            setEditing={setEditing}
                            deleting={deleting}
                            setDeleting={setDeleting}
                            cars={cars}
                            setCars={setCars}
                            carData={carData}
                            />
                    </TableCell>
                </TableRow>
            </>
        )
    }
    
    
    return(
        <>

            {cars.map((x) => {
                return (
                    <CarItemRow
                        key={x.id}
                        carItem={x}
                        setCars={setCars}
                    />
                )
            })}
        </>
    )
}

export default CarRows