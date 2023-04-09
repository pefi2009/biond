import React, { useState } from 'react'
import DataContext from '../Context/DataContext' 
import { useContext,useEffect } from 'react'
import UserItem from './UserItem'
import { Button } from 'react-bootstrap'
 

const UserResults = () => {
  const {fetchData} = useContext(DataContext)
useEffect(()=>{
  fetchData()
},[])
 
   
  return (
    <div>
        <div className='hole'>
         <UserItem></UserItem> 
        </div>
    </div>
  )
}

export default UserResults