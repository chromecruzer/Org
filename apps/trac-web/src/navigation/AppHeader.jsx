import React from 'react';
import {Link} from 'react-router-dom';
import {MdOutlineAccountCircle} from "react-icons/md";
import logo from '../assets/Bausch and Lomb Logo with Tagline.png'
import {Menu, MenuButton, MenuItem} from "@szhsin/react-menu";
import {UseLoginUser} from "./UseLoginUser";

export const AppHeader = () => {
  const {appUser, clearAppUser} = UseLoginUser();
  const logout = () => {
    clearAppUser();
  }

  const ShowChangePwd = () => {
															  
  }

  const ShowNewUser = () => {
															  
  }

  return (
    <div>
      <div id='app-bar' className='flex justify-between bg-bl-text-light'>
        <div className='flex items-center justify-between flex-grow'>
          <Link to='/'>
            <button aria-label='menu' className='w-72 p-5 flex-grow-0'>
              <img src={logo} alt='Home'/>
            </button>
          </Link>
          <span className='flex items-stretch flex-grow'>
          <h6 className='font-bold text-5xl self-center text-bl-text-main'>Track and Analyze Consignments (TRAC)</h6>
        </span>
        </div>
        <Menu menuButton={<MenuButton className='flex justify-items-start items-center'>{appUser}
          <MdOutlineAccountCircle/>
        </MenuButton>}>
          <div id="usrMenu"><MenuItem onClick={ShowChangePwd}><Link to="/changepwd">Change Password</Link></MenuItem></div>
          <div id="admMenu"><MenuItem onClick={ShowNewUser}><Link to="/signup">Add New User</Link></MenuItem></div>
          <div id="logMenu"><MenuItem onClick={logout}>Log Out</MenuItem></div>
        </Menu>
      </div>
      <div className='bg-bl-text-main'/>
    </div>
  );
};
