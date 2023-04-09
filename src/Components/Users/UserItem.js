import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext,useEffect } from 'react';
import DataContext from '../Context/DataContext';

function UserItem( ) {
  const {kamal} = useContext(DataContext)
 
  
  
  const products = kamal?.map((k)=>(
    <Card className='card'>
        <Card.Img className='card-img' variant="top" src={k.image} />
          
        <Card.Body>
          <Card.Title className='sib'>{k.title}</Card.Title>

           <Button className='butt' variant="primary">Buy</Button>
        </Card.Body>
      </Card>
       ))
       
       const [baha,setBaha] = useState(products)
          const handleFilter = () =>{
           
            const pefi = kamal.filter((k)=>{
               return k.category === 'jewelery'}).map((k)=>{
                 return <Card className='card'>
        <Card.Img className='card-img' variant="top" src={k.image} />
          
        <Card.Body>
          <Card.Title className='sib'>{k.title}</Card.Title>
      
           <Button className='butt' variant="primary">Buy</Button>
        </Card.Body>
      </Card>
      })
      console.log(pefi) 
      //return pefi 
          }  
         
      
    return (
    <div className='kol'>
        
        {products}
      <Button onClick={handleFilter}  >Button</Button> 
          
      
    </div>
        
    );
  }
  
  export default UserItem;