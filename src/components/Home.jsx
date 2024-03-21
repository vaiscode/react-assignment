import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import './Home.css';

const Home = () => {

    const [dataset,setData]=useState([]);
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
        console.log(res.data);
        setData(res.data);
      })
    },[]);
  
   
    return (
      <div>
      <br/>
      <Typography sx={{textAlign:'center', fontSize:25, color:'White'}}>Welcome to Employee Dashboard</Typography>
      <br/>
      
      <TableContainer component={Paper} style={{maxWidth:800, maxHeight:600, margin:'auto'}}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell style={{fontFamily:"-moz-initial",fontSize:20,color:'Darkgreen'}}>ID</TableCell>
              <TableCell style={{fontFamily:"-moz-initial",fontSize:20,color:'Darkgreen'}}>Name</TableCell>
              <TableCell style={{fontFamily:"-moz-initial",fontSize:20,color:'Darkgreen'}}>Email</TableCell>
              <TableCell style={{fontFamily:"-moz-initial",fontSize:20,color:'Darkgreen'}}>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataset.map((row) => (
          <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <Button variant="contained" color="success">Update</Button>
                  <Button variant="contained" color="error">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    )
  }

export default Home