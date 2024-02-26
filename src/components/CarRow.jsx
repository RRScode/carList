import React, {useState} from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import EditOrDeleteCar from './EditOrDeleteCar';

const CarRow = ({x, cars, setCars}) => {
    const [editing, setEditing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [make, setMake] = useState(`${x.make}`);
    const [model, setModel] = useState(`${x.model}`);
    const [year, setYear] = useState(`${x.year}`);
    const id = x.id;
    const data = {make, model, year, id};

    return(
        <TableRow>
            <TableCell>
                {editing ? 
                <input 
                    type="text"
                    value={make}
                    onChange={(e) => {setMake(e.target.value)}}
                ></input> : x.make}
            </TableCell>
            <TableCell align="center">
                {editing ? 
                <input
                    type="text" 
                    value={model}
                    onChange={(e) => {setModel(e.target.value)}}
                ></input> : x.model}
            </TableCell>
            <TableCell align="center">
                {editing ? 
                <input 
                    type="number"
                    value={year}
                    onChange={(e) => {setYear(e.target.value)}}
                ></input> : x.year}
            </TableCell>
            <TableCell align="center">{x.id}</TableCell>
            <TableCell size="small" align="right">
                <EditOrDeleteCar
                    editing={editing}
                    setEditing={setEditing}
                    deleting={deleting}
                    setDeleting={setDeleting}
                    data={data}
                    x={x}
                    cars={cars}
                    setCars={setCars}
                />
            </TableCell>
        </TableRow>
    )
}

export default CarRow