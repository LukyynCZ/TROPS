import { Link, useNavigate } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';

interface Props {
  site: string;
}

const Header = ({ site }: Props) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className='max-w-7xl z-50 m-auto flex justify-between items-center px-2 md:px-5'>
      <div>
        <Link to='/'>
          <img src='src/assets/TROPS.png' width={100} height={100} />
        </Link>
      </div>

      <nav className='z-50'>
        <div
          className='absolute top-8 right-5 cursor-pointer md:hidden'
          onClick={() => setOpen(!open)}>
          {open ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
        </div>
        <ul
          className={`flex items-center md:flex-row flex-col md:pb-0 pb-[100px] absolute md:static bg-black
           left-0 w-full md:w-auto transition-all gap-4 md:gap-10 ${
             open ? 'top-20' : 'top-[-500px]'
           }`}>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <Link to='/vip'>VIP</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>

      <div
        onClick={() => navigate('/cart')}
        className={`bg-black rounded-full md:static fixed bottom-6 left-6 cursor-pointer p-2 md:block ${
          site == 'hidden' ? 'hidden' : 'block'
        }`}>
        <BsCart2 size={30} />
      </div>
    </header>
  );
};

export default Header;
