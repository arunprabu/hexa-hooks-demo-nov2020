import React, { useState, useEffect } from 'react';

const UserData = () => {

  let [name, setName ] = useState('Welcome to Hooks!');

  useEffect(() => {
    document.title = name;
  }, [name]); // second arg is dependency
  // if the dependency is changed by any means, useEffect() callback will get executed.
  // by default useEffect will be called once automatically.
  // check the page title before and after removing dependency

  return (
    <div>
      <hr/>
      <h3>useEffect() Demo</h3>
      <p>{ name }</p>
      <input type='text' value={name} onChange={(event)=> setName(event.target.value)}/>
    </div>
  )
}

export default UserData;
