import React from 'react';
import { Button, TextField, Typography } from '@mui/material'
import './Employeeform.css'

const Employeeform = () => {
  return (
    <div className='outer'> 
        <Typography sx={{textAlign:'center', fontSize:30, color:'White' , marginTop:10}}>Employee Form</Typography>
    <br/>
      <form/>
        <div className='form'>
        <Typography variant='h6'>Please fill the required fields:</Typography>
        <br/>
          <TextField fullWidth label="Employee Name" required id="fullWidth" />
          <br/><br/>
          <TextField fullWidth label="Designation"  required id="fullWidth" />
          <br/><br/>
          <TextField fullWidth label="Location" required id="fullWidth" />
          <br/><br/>
          <TextField fullWidth label="Salary" required id="fullWidth" />
          <br/><br/>
          <div className='button'>
          <Button variant="contained" color='warning'>Submit</Button>
          </div>
        </div>
    </div>
  )
}

export default Employeeform