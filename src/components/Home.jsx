import React, { useState } from 'react';
import Header from './Header';
import { Link, useLoaderData } from 'react-router-dom';
import Coffee from './Coffee';

const Home = () => {

    const loadedCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffees)

    console.log(coffees)

    return (
        <div>
            <Header/>
            <div className='mx-auto text-center my-6'>
                <h1 className='text-2xl font-semibold my-6'>Our Popular Products</h1>
                <Link to={'/addcoffee'} className='btn bg-[#D2B48C] mx-auto'>Add Coffee</Link>
            </div>
            <div className='grid gap-5 md:grid-cols-2 my-6 w-10/12 mx-auto'>
                {
                    coffees.map(coffee => <Coffee coffee={coffee} coffees={coffees} setCoffees={setCoffees}/>)
                }
            </div>
            
        </div>
    );
};

export default Home;