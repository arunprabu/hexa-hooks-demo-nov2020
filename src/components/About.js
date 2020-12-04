import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PageContext } from '../PageContext';

const About = () => {
  // Step 3 of useContext()
  const context = useContext(PageContext);

  return (
    <div>
      <h2>About</h2>
      <Link to='/'>Goto Home Page!</Link>
      <hr />
      <h2>useContext() Demo</h2>
      <p>User authenticated? {context.isLoggedIn? 'Yes' : 'No'}</p>
      <p>Last Login: {context.lastLogin}</p>
    </div>
  )
}

export default About
