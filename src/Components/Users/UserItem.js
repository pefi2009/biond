import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import DataContext from '../Context/DataContext';

function UserItem( ) {
  const {kamal} = useContext(DataContext)

  const sima = kamal.map((k)=>(
    <Card className='card'>
        <Card.Img className='card-img' variant="top" src={k.image} />
          
        <Card.Body>
          <Card.Title className='sib'>{k.title}</Card.Title>

           <Button className='butt' variant="primary">Buy</Button>
        </Card.Body>
      </Card>
       ))
       console.log()
       const [arian,setArian] = useState(sima)
  
  
       
       const pefi = sima.filter((k)=>{
         return k.category === 'jewelery'}).map((k)=>{
           return <Card className='card'>
  <Card.Img className='card-img' variant="top" src={k.image} />
    
  <Card.Body>
    <Card.Title className='sib'>{k.title}</Card.Title>

     <Button className='butt' variant="primary">Buy</Button>
  </Card.Body>
</Card>
})
  
    return (
    <div className='kol'>

      <Button onClick={()=>setArian(pefi)}  >Button</Button> 
         {arian}
          
       
    </div>
        
    );
  }
  
  export default UserItem;