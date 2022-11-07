import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl w-48 font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" />
                        
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Dont have account? Please <Link to='/register' className='text-red-400'>Register.</Link></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;