import Header from './Header';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const [load, setLoad] = useState(false);
  setTimeout(() => {
    setLoad(true);
  }, 300);

  const navigate = useNavigate();

  return (
    <div>
      <Header site={'hidden'} />

      <section className={`max-w-7xl m-auto md:px-8 md:mt-10 px-5 pb-20 ${load ? '' : 'hidden'}`}>
        <div className='flex flex-col mb-10  justify-between items-center'>
          <h1 className='text-5xl font-bold mb-10'>About Us</h1>
          <button
            onClick={() => {
              navigate('/team');
            }}
            className='border-[1px] mt-3 px-4 py-2 rounded-sm border-white'>
            Our Team
          </button>
        </div>

        <div className='md:mt-20 flex flex-col md:flex-row justify-between gap-10 mb-20 items-center'>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className='md:w-1/2'>
            <img src='src/assets/TROPS.png' style={{ boxShadow: '0 0 5px white' }} />
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className='text-center md:text-left md:w-1/2'>
            <p className='mb-5 text-xl text-gray-200'>
              TROPS is a company focused on the production of men's suits, which is characterized by
              the combination of elegance and comfort. The company focuses on modern men who want to
              be well dressed but also want to be comfortable throughout the day
            </p>
            <p className='mb-5 text-xl text-gray-200'>
              One of the main points of this company is the quality material they use for their
              suits. TROPS specializes in high quality fabrics that guarantee comfort and durability
              of the suits. These fabrics are selected for their quality, durability and and
              comfort, ensuring that TROPS suits are not only stylish, but also comfortable and easy
              to wear
            </p>
          </motion.div>
        </div>
        <IoIosArrowDown size={30} className='mb-40 m-auto' />
        <div className='flex flex-col-reverse md:flex-row justify-between gap-10 items-center'>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className='text-center md:text-left'>
            <p className='mb-5 text-xl text-gray-200'>
              Another important element is design. TROPS suits are designed with the modern fashion
              trends while being elegant and tasteful. The company focuses on details such as such
              as embroidery, buttons or pockets, giving TROPS suits a distinctive and unique look
            </p>
            <p className='mb-5 text-xl text-gray-200'>
              In addition, TROPS provides its customers with a high level of customer service. Their
              customer service is focused on a personal approach to customers and all
            </p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            <img src='src/assets/photo3.png' />
          </motion.div>
        </div>
        <div className='mt-20 text-center text-gray-200'>
          Create by <b>Lukas Macku </b> for team TROPS
        </div>
      </section>
    </div>
  );
};

export default About;
