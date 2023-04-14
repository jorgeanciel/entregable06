import React, { useState } from 'react';

import { Link, Outlet, useNavigate } from 'react-router-dom';
import Cart from './Cart';
import { useSelector } from 'react-redux';

const Layout = () => {
  const navigate = useNavigate();
  const [isCartVisible, setIsCartVisible] = useState(false);
  const isLogged = useSelector((state) => state.user.isLogged);

  const cartHandleClick = () => {
    if (isLogged) setIsCartVisible(!isCartVisible);
    else navigate('/login');
  };

  return (
    <>
      <header className="sticky top-0 h-20 p-5 flex flex-row justify-between bg-white border border-b-4 border-stone-300 items-center">
        <Link to="/">
          <h1 className="flex-1 font-mono font-bold text-rose-500 text-3xl">
            e-commerce
          </h1>
        </Link>

        <div className="">
          <Link
            to="/purchases"
            className="flex-1 font-bold text-2xl text-cyan-500 hover:text-rose-500 p-20"
          >
            <i class="bx bxs-store-alt text-3xl text-orange-500 p-2"></i>
            purchases
          </Link>
          <button
            className="flex-1  font-bold text-2xl text-cyan-500 hover:text-rose-500 text-end pr-5"
            onClick={() => cartHandleClick()}
          >
            <i className="bx bxs-cart p-2  text-3xl text-orange-500"></i>
            Cart
          </button>
        </div>
      </header>
      <main className="relative">
        <Outlet />
      </main>
      <Cart isVisible={isCartVisible} />
    </>
  );
};

export default Layout;
