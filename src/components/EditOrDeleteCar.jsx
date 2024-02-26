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
        const carsListEditedItem = cars.map((x) => {
          if (x.id === data.id) {
            return data
          } else {
            return x
          }
        })
        setCars(carsListEditedItem)
        setEditing(false)
      })
    }

    const handleDelete = () => {
      axios
        .delete(`http://localhost:3000/cars/${data.id}`)
        .then((response) => {
          const carsListDeletedItem = cars.filter((x) => {
            if (x.id !== data.id){ 
              return x}
          })
          setCars(carsListDeletedItem)
          setDeleting(false)
          })
        .catch((error) => {console.log(error)})
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
          <CheckTwoToneIcon onClick={() => {handleDelete()}}></CheckTwoToneIcon>
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