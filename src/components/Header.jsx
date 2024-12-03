import React from 'react';
import bannerimg from '../assets/more/3.png'

const Header = () => {
    return (
        // bg-[url("https://i.ibb.co.com/VH3V5GQ/3.png")] bg-cover bg-center h-96 w-full
        <div className='relative'>
            <img src={bannerimg} />
            <div className='absolute top-52 -right-96 text-white'>
                <h2 className='text-3xl font-medium'>Would you like a Cup of Delicious Coffee?</h2>
                <p className='w-[50%] my-4'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='btn bg-[#E3B577]'>Learn more</button>
            </div>
        </div>
    );
};

export default Header;