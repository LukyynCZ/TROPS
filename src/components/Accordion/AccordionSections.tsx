import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface Props {
  title: string;
  content: string;
}

const AccordionSections = ({ title, content }: Props) => {
  const [isOpen, setItOpen] = useState(false);

  return (
    <div className='cursor-pointer  pb-4 mb-4' onClick={() => setItOpen(!isOpen)}>
      <div className='flex justify-between items-center mb-2'>
        <h3 className='text-xl font-medium md:text-2xl'>{title}</h3>
        <IoIosArrowDown
          size={30}
          className={`${isOpen ? 'rotate-180' : 'rotate-0'} duration-500 transition`}
        />
      </div>
      <div
        className={`${
          isOpen ? 'max-h-[500px]' : ''
        }  max-h-0 overflow-hidden duration-1000 transition-all`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AccordionSections;
