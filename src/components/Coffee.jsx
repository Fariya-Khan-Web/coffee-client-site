import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({ coffee, coffees, setCoffees }) => {


    const handleDelete = id => {
        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:2000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Coffee removed from the list",
                                icon: "success"
                            });
                            const remaining = coffees.filter(coffee => coffee._id !== id)
                            setCoffees(remaining)
                        }
                    })
            }
        });
    }


    return (
        <div className=''>
            <div className="flex justify-around w-full rounded-md bg-base-100 shadow-xl">
                <figure>
                    <img src={coffee.photo} />
                </figure>
                <div className="card-body flex flex-col justify-center">
                    <div><span className='font-medium'>Name: </span> {coffee.name}</div>
                    <div><span className='font-medium'>Quantity: </span> {coffee.quantity}</div>
                    <div><span className='font-medium'>Taste: </span> {coffee.taste}</div>
                </div>
                <div className='my-auto mx-4'>
                    <button className='bg-[#D2B48C] p-1 rounded'><IoSearchSharp className='text-2xl text-white' /></button><br />
                    <Link to={`/updatecoffee/${coffee._id}`}>
                        <button className='bg-[#3C393B] p-1 rounded my-2'><IoPencil className='text-2xl text-white' /></button><br />
                    </Link>
                    <button onClick={() => handleDelete(coffee._id)} className='bg-[#EA4744] p-1 rounded'><MdDelete className='text-2xl text-white' /></button>
                </div>
            </div>
        </div>
    );
};

export default Coffee;