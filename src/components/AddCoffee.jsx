import React from 'react';

const AddCoffee = () => {
    return (
        <div>
            <div className='bg-[#F4F3F0] my-8 w-[80%] mx-auto'>
                <h1 className='text-2xl font-semibold text-center py-6'>Add New Coffee</h1>
                <p className='text-center w-2/3 mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form className='md:grid gap-x-5 gap-y-2 grid-cols-2 w-[80%] mx-auto py-6'>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold">Coffee Name</span>
                        </div>
                        <input type="text" placeholder="Coffee Name" name='name' className="input input-bordered " />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold">Name</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold">Name</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-semibold">Name</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered" />
                    </label>
                    <input type="submit" value="Add Coffee" className='col-span-2 p-2 border bg-[#D2B48C] rounded-md my-4 font-medium' />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;