import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';

const Signup = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated');
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User Created Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/')
                    })
                    .catch(error => console.log(error))
            })
    };

    console.log(watch("example"));

    // const handleSubmit = event => {
    //     event.preventDefault();
    // }


    return (
        <div>
            <div className="hero mt-5 flex items-center justify-center">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600"> Name is required</span>}
                        </div>
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600"> Email is required</span>}
                        </div>
                        {/* photourl */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo Url" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-600"> PhotoURL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password",
                                {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="password" className="input input-bordered" />

                            {errors.password?.type === 'required' && <p className="text-red-600"> Password  is required</p>}

                            {errors.password?.type === 'minLength' && <p className="text-red-600"> Password  must be 6 characters </p>}

                            {errors.password?.type === 'maxLength' && <p className="text-red-600"> Password must be less than 20 characters</p>}

                            {errors.password?.type === 'pattern' && <p className="text-red-600"> Password must have one Upper case, one lower case, one special character</p>}
                        </div>
                        <div className="form-control mt-6">
                            {/* <button className="btn btn-primary">Login</button> */}
                            <input className="btn btn-primary" type="submit" value="SignUp" />
                        </div>
                    </form>
                    <p className='text-center mb-5 mt-0'><small>Already have an account?
                        <Link to='/login'> Sign In</Link></small>
                    </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Signup;