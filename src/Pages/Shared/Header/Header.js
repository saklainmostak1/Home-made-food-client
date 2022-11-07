import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItems = <>
        <li className='font-semibold'><Link className='mr-5' to='/'>Home</Link></li>
        <li className='font-semibold'><Link className='mr-5' to='/services'>Services</Link></li>
        <li className='font-semibold'><Link className='mr-5' to='/blog'>Blog</Link></li>
        <li className='font-semibold'><Link className='mr-5' to='/login'>Login</Link></li>
        <li className='font-semibold'><Link className='mr-5' to='/register'>Register</Link></li>
        {/* {
      user?.uid ?
        <>
         <li className='font-semibold mr-5'><Link to='/orders'>Orders</Link></li>
        <button className="btn btn-outline btn-success" onClick={signOut} >LogOut</button>
        </>
        :
        <>
          <li className='font-semibold'><Link to='/login'>Login</Link></li>
          <li className='font-semibold'><Link to='/register'>Register</Link></li>
        </>
    } */}


    </>
    return (
        <div>
            <div className="navbar h-20 mb-12 pt-12 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                        <Link to='/' className="btn btn-ghost normal-case text-xl">My Home Made Food</Link>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img src='' alt="" />

                    </Link>
                </div>
                
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 ">
                        {menuItems}
                    </ul>
                </div>
                
                <div>
                </div>
                
                <div className="navbar-end">
                    <button className="btn btn-outline btn-info">Appointment</button>
                </div>
            </div>


        </div>
    );
};

export default Header;