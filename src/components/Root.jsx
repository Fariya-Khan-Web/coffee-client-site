import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;