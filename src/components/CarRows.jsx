'use client'
import React, {useState, useEffect} from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import EditOrDeleteCar from './EditOrDeleteCar';
import axios from 'axios';

const CarRows = () => {
    const [cars, setCars] = useState([]);

    
    // const id = x.id;
    // const data = {make, model, year, id};
    
    
    
    useEffect(()=>{
        axios
        .get("http://localhost:3000/cars")
        .then((response)=>{
            setCars(response.data);
        })
    }, []);
    
    
    const CarItemRow = ({carItem}) => {
        const [editing, setEditing] = useState(false);
        const [deleting, setDeleting] = useState(false);

        const [make, setMake] = useState(`${carItem.make}`);
        const [model, setModel] = useState(`${carItem.model}`);
        const [year, setYear] = useState(`${carItem.year}`);

        const carData = {
            make,
            model,
            year,
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
                    />
                )
            })}
        </>
    )
}

export default CarRows