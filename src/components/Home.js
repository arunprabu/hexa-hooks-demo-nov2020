import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyProfile from './MyProfile';
import Todo from './Todo';
import UserData from './UserData';
import { PageContext } from '../PageContext';

const Home = () => {

  // Step 3 of useContext()
  const context = useContext(PageContext);

  console.log(context);
  return (
    <div className='container'>
      <h2 className='text-center'>Home Page</h2>
      <Link to='/about'>Goto About Page!</Link>
      <hr/>
      <div className='row'>
        <div className='col-md-8'>
          <MyProfile />
        </div>
        <div className='col-md-8'>
          <UserData/>
        </div>
        <div className='col-md-8'>
          <Todo />
        </div>
      </div>

      <hr />
      <h2>useContext() Demo</h2>
      <p>User authenticated? {context.isLoggedIn? 'Yes' : 'No'}</p>
      <p>Last Login: {context.lastLogin}</p>
    </div>
  )
}

export default Home;
