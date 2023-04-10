import React from 'react';
import { useDispatch } from 'react-redux';
import { reset } from '../store/slice/userSlice';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => dispatch(reset())}>LogOut</button>
    </div>
  );
};

export default Home;
