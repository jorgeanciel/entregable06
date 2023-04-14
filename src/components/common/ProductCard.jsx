import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProductToCart } from '../../store/slice/cartSlice';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogged, token } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  const isProductInCart = cart.products.some(
    (cartProduct) => cartProduct.id === product.id,
  );

  const handleAddProduct = (e) => {
    e.stopPropagation();
    if (isLogged)
      dispatch(addProductToCart({ token, quantity: 1, productId: product.id }));
    else navigate('/login');
  };

  return (
    <article
      key={product.id}
      onClick={() => navigate(`/products/${product.id}`)}
      className="cursor-pointer border-2 border-b p-4 min-w-[550px]"
    >
      <div className="min-w-[200px] min-h-[200px] flex justify-center items-center">
        <img className="w-32 h-full" src={product.images[0].url} alt={product.title} />
      </div>
      <section className="">
        <p>{product.brand}</p>
        <h2 className="text-semibold text-xl ">{product.title}</h2>
        <article className="flex justify-between pt-0">
          <div>
            <h3>Price</h3>
            <p>{product.price}</p>
          </div>

          {!isProductInCart && (
            <button
              className="text-3xl flex flex-row justify-center items-center bg-orange-500 rounded-xl p-2"
              onClick={handleAddProduct}
              disabled={cart.loading}
            >
              <i className="bx bx-cart-add"></i>
            </button>
          )}
          {isProductInCart && <p>this product is</p>}
        </article>
      </section>
    </article>
  );
};

export default ProductCard;
