import React from 'react';
import { Link } from 'react-router-dom';
import MyProfile from './MyProfile';
import Todo from './Todo';
import UserData from './UserData';

const Home = () => {
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
    </div>
  )
}

export default Home;
