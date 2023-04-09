import React from 'react'
import UserResults from '../Components/Users/UserResults'
import UserSelection from '../Components/Users/UserSelection'
import Bar from './Bar'
 

const Home = () => {
  return (
    <div>
      <Bar></Bar>
   {/*    <UserSelection></UserSelection> */}
      <UserResults></UserResults>
    </div>
  )
}

export default Home
