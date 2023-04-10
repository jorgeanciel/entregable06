import React from 'react';

import { Link, Navigate, Outlet } from 'react-router-dom';

const Layout = () => {
  const handleLogin = () => {
    <Navigate to="/purchase" />;
  };

  return (
    <>
      <header className="flex p-5">
        <h1 className="flex-1 font-mono font-bold text-rose-500 text-3xl">e-commerce</h1>

        <button
          className="flex-1 font-bold text-2xl text-cyan-500 hover:text-rose-500 text-end"
          onClick={handleLogin}
        >
          Login
        </button>
        <button className="flex-1 font-bold text-2xl text-cyan-500 hover:text-rose-500 text-end">
          Purchases
        </button>
        <button className="flex-1  font-bold text-2xl text-cyan-500 hover:text-rose-500 text-end pr-5">
          <i class="bx bxs-cart p-2  text-3xl text-orange-500"></i>
          Cart
        </button>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
