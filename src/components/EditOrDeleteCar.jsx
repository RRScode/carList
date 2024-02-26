import React from 'react'
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import axios from 'axios';


const EditOrDeleteCar = ({editing, setEditing, deleting, setDeleting, data, cars, setCars}) => {    

  const handleSave = () => {
    axios
      .put(`http://localhost:3000/cars/${data.id}`, data)
      .then(() => {
        const updatedCarsList = cars.map((x) => {
          if (x.id === data.id) {
            return data
          } else {
            return x
          }
        })
        setCars(updatedCarsList)
        setEditing(false)
      })
    }

    if (editing === true) {
      return(
        <div>
          <CancelTwoToneIcon onClick={() => {setEditing(false)}}></CancelTwoToneIcon>
          <SaveTwoToneIcon onClick={() => {handleSave()}}></SaveTwoToneIcon>
        </div>
      )
    } else if (deleting === true) {
      return(
        <div>
          <CheckTwoToneIcon></CheckTwoToneIcon>
          <CancelTwoToneIcon onClick={() => {setDeleting(false)}}></CancelTwoToneIcon>
        </div>
      )
    } else {
      return(
        <div>  
          <ModeEditOutlineTwoToneIcon onClick={() => {setEditing(true)}}></ModeEditOutlineTwoToneIcon>
          <DeleteTwoToneIcon onClick={() => {setDeleting(true)}}></DeleteTwoToneIcon>
        </div>
      )
    }

  }


export default EditOrDeleteCar