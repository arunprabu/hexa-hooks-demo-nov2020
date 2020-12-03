import React, { useState } from 'react';

// We will have state within this fn comp -- using useState()
const MyProfile = () => {

  // useState will return an array with getter and setter
  let [ personName, setPersonName ] = useState('Arun');
  
  const [ courseInfo, setCourseInfo ] = useState({
    companyName: 'Hexaware',
    courseName: 'React'
  });

  const changeNameHandler = () =>{
    setPersonName('John'); // changing state will result in re-render
  }

  return (
    <div className="text-left">
      <h3>Profile | useState() Example</h3>
      <p>{personName}</p>
      <button type='button' onClick={changeNameHandler}>Update Name</button>

      <hr />
      <p>{courseInfo.courseName}</p>
      <button type='button' onClick={ ()=> { 
        setCourseInfo({
          companyName: 'Hexaware',
          courseName: 'React JS with Hooks!'
        }) 
      } }>Change Course Name</button>

    </div>
  )
}

export default MyProfile;
