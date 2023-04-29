import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProductProps {
  name: string;
  description: string;
  price: string;
  image: string;
  index: number;
}

const Product = ({ name, description, price, image, index }: ProductProps) => {
  const isEven = index % 2 === 0;
  const [load, setLoad] = useState(false);
  setTimeout(() => {
    setLoad(true);
  }, 200);

  return (
    <div
      className={`flex mb-24 ${
        isEven ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-4 flex-col-reverse ${load ? '' : 'hidden'}`}>
      <motion.div
        className='w-full md:w-1/2'
        viewport={{ once: true }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}>
        <img src={image} className='w-full' />
      </motion.div>
      <motion.div
        className='w-full md:w-1/2'
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}>
        <h1 className='text-5xl font-bold mb-2'>{name}</h1>
        <p>{description}</p>
        <p className='text-2xl mt-1'>{price}</p>
        <button
          onClick={() => {
            alert('We are so sorry but it is sold out :(');
          }}
          className='border-[1px] mt-3 px-4 py-2 rounded-sm border-white'>
          Buy now
        </button>
      </motion.div>
    </div>
  );
};

export default Product;
