import React from 'react'
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import axios from 'axios';


const EditOrDeleteCar = ({editing, setEditing, deleting, setDeleting, carData, cars, setCars}) => {    

  const handleSave = () => {
    axios
      .put(`http://localhost:3000/cars/${carData.id}`, carData)
      .then(() => {
        const carsListEditedItem = cars.map((x) => {
          if (x.id === carData.id) {
            return carData
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
        .delete(`http://localhost:3000/cars/${carData.id}`)
        .then((response) => {
          const carsListDeletedItem = cars.filter((x) => {
            if (x.id !== carData.id){ 
              return x}
          })
          setCars(carsListDeletedItem)
          setDeleting(false)
          })
        .catch((error) => {console.log(error)})
        } 

    return (
      <>
        {editing ?
          <>
            <CancelTwoToneIcon onClick={() => {setEditing(false)}}></CancelTwoToneIcon>
            <SaveTwoToneIcon onClick={() => {handleSave()}}></SaveTwoToneIcon>
          </>
        : deleting ?
          <>
            <CheckTwoToneIcon onClick={() => {handleDelete()}}></CheckTwoToneIcon>
            <CancelTwoToneIcon onClick={() => {setDeleting(false)}}></CancelTwoToneIcon>
          </>
        :
          <>
            <ModeEditOutlineTwoToneIcon onClick={() => {setEditing(true)}}></ModeEditOutlineTwoToneIcon>
            <DeleteTwoToneIcon onClick={() => {setDeleting(true)}}></DeleteTwoToneIcon>
          </>
        }
      </> 
    )
  }


export default EditOrDeleteCar