import React from 'react'
import Images from '../Components/Images'
import Credentials from '../Components/Credentials'
const userInfo = {name: "Charaf", lastName: "reggui", age: 24, profilePhoto: "https://picsum.photos/350"}

function Propslearn() {
  return (
    <div>
     <Images photo={userInfo.profilePhoto } />
     <Credentials N={userInfo.name} lN={userInfo.lastName} />
      
    </div>
  )
}

export default Propslearn
