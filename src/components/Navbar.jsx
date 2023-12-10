import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery, } from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'


const Navbar = () => {
const [nav, setNav] = useState(false)
const [cartItems, setCartItems] = useState([
  { id: 1, name: 'Filter Price 1 ', price: 150, quantity: 0 },
  { id: 2, name: 'Filter Price 2 ', price: 200, quantity: 0 },
  { id: 3, name: 'Filter Price 3 ', price: 300, quantity: 0 },
  { id: 4, name: 'Filter Price 4 ', price: 1000, quantity: 0 },
  // Add more items as needed
]);

const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const handleUpdateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-orange-500 sm:text-3xl lg:text-4xl px-2'>
          Albertos <span className='font-bold'>Booking</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>
      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search foods'
        />
      </div>
      {/* Cart button */}
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'
      onClick={openCartModal}
      >
        <BsFillCartFill size={20} className='mr-2' /> My Cart
      </button>

       {/* Cart Modal */}
       {isCartModalOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-4 rounded-lg'>
            <h2 className='font-bold'>My Cart</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <span className='font-bold'>P{item.price}</span>
                  <span > Quantity: </span>                
                  <input
                    type='number'
                    min='1'
                    value={item.quantity}
                    onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value, 10))}
                  />
                </li>
              ))}
             </ul> 
             <div>
              <strong>Total Price: P {getTotalPrice()}</strong>
            </div>
            <button onClick={closeCartModal}>Close</button>
            <button onClick={openCartModal}>Order Now</button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          <span className='font-bold'>Menu</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
