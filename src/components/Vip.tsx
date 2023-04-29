import Accordion from './Accordion/Accordion';
import Header from './Header';
import { motion } from 'framer-motion';

const Vip = () => {
  return (
    <>
      <Header site={'hidden'} />
      <div className='max-w-7xl m-auto md:px-8 md:mt-10 px-5'>
        <h1 className='text-5xl font-bold'>Join our VIP club!</h1>
        <button
          onClick={() => alert('The VIP club is full')}
          className='border-[1px] mt-5 px-4 py-2 rounded-sm border-white'>
          Join now!
        </button>
        <div className='flex items-start flex-col md:flex-row mt-6'>
          <motion.div
            className='w-full mr-10'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            <img src='src/assets/photo2.png' className='md:pt-10 mb-10' />
          </motion.div>
          <motion.div
            transition={{ duration: 1 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}>
            <Accordion />
          </motion.div>
        </div>
      </div>
      <div className='mt-36 mb-20 text-center text-gray-200'>
        Create by <b>Lukas Macku </b> for team TROPS
      </div>
    </>
  );
};

export default Vip;
