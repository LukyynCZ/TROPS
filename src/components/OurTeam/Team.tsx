import { motion } from 'framer-motion';

interface TeamProps {
  name: string;
  position1: string;
  position2: string;
  image: string;
  x: number;
}

const Team = ({ name, position1, position2, image, x }: TeamProps) => {
  return (
    <motion.div
      className='w-1/2 rounded-md text-center'
      viewport={{ once: true }}
      initial={{ opacity: 0, x: x }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}>
      <h1 className='mb-2 text-2xl font-semibold'>{name}</h1>
      <p>{position1}</p>
      <p>{position2}</p>
      <img src={image} className='mt-5 w-full h-full rounded-md border-gray-500 border-[1px]' />
    </motion.div>
  );
};

export default Team;
