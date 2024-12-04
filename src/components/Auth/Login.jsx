import React from 'react';

const Login = () => {

    const handleSubmit = e =>{
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const pass = form.password.value

        console.log(email, pass)
    }

    return (
        <div className=' flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D2B48C]">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;