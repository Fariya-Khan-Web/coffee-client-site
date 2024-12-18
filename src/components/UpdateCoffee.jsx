import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData()
    const { _id, name, quantity, supplier, taste, category, details, photo} = coffee

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updateCoffee)

        fetch(`http://localhost:2000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    Swal.fire({
                        title: 'Updated Successfully',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }


    return (
        <div>
        <div className='bg-[#F4F3F0] my-8 w-[80%] mx-auto'>
            <h1 className='text-2xl font-semibold text-center py-6'>Update '{name}' Details</h1>
            <p className='text-center w-2/3 mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleSubmit} className='md:grid gap-x-5 gap-y-2 grid-cols-2 w-[80%] mx-auto py-6'>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold">Coffee Name</span>
                    </div>
                    <input type="text" placeholder="Coffee Name" name='name' defaultValue={name} className="input input-bordered " />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold">Quantity</span>
                    </div>
                    <input type="text" placeholder="Quantity" name='quantity' defaultValue={quantity} className="input input-bordered" />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold">Supplier</span>
                    </div>
                    <input type="text" placeholder="Supplier" name='supplier' defaultValue={supplier} className="input input-bordered" />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold">Taste</span>
                    </div>
                    <input type="text" placeholder="Taste" name='taste' defaultValue={taste} className="input input-bordered" />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold">Category</span>
                    </div>
                    <input type="text" placeholder="Category" name='category' defaultValue={category} className="input input-bordered" />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold">Details</span>
                    </div>
                    <input type="text" placeholder="Details" name='details' defaultValue={details} className="input input-bordered" />
                </label>

                <label className="col-span-2 form-control w-full">
                    <div className="label">
                        <span className="label-text font-semibold">Photo URL</span>
                    </div>
                    <input type="text" placeholder="Photo URL" name='photo' defaultValue={photo} className="input input-bordered" />
                </label>

                <input type="submit" value="Update Coffee" className='col-span-2 p-2 border bg-[#D2B48C] rounded-md my-4 font-medium' />
            </form>
        </div>
    </div>
    );
};

export default UpdateCoffee;