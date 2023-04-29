import Header from './Header';

const Cart = () => {
  return (
    <>
      <Header site={'hidden'} />
      <section className='text-center mt-20'>
        <h1>Your cart is empty!</h1>
      </section>
    </>
  );
};

export default Cart;
