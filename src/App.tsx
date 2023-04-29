import { useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { motion } from 'framer-motion';

function App() {
  const navigate = useNavigate();
  return (
    <div className='w-full'>
      <Header site={'/'} />
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1 }}
        className='max-w-7xl m-auto'>
        <section>
          <video autoPlay muted loop>
            <source src='src/assets/TROPS.mp4' type='video/mp4' />
          </video>
          <div className='flex items-center flex-col mt-5'>
            <h1>Check out our products!</h1>
            <button
              onClick={() => {
                navigate('/products');
              }}
              className='border-[1px] mt-2 px-4 py-2 rounded-sm border-white'>
              PRODUCTS
            </button>
          </div>
        </section>
      </motion.div>
      
    </div>
  );
}

export default App;
