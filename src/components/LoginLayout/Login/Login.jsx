import React, { useContext, useRef } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {


    const { signIn, passwordReset } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const emailRef = useRef();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })

                navigate(from, { replace: true });
            })

    }

    // const handleResetPassword = event => {
    //     // const email = emailRef.current.value;
    //     // if (!email) {
    //     //     alert('Please Provide your email address to reset password')
    //     //     return
    //     // }

    //     // passwordReset(email)
    //     //     .then(() => {
    //     //         alert('Please Check Your Email')
    //     //     })
    //     //     .catch(error => console.log(error))
    // }


    return (
        <div>
            {/* <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card  w-full  shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}


            <div className="hero mt-5 flex items-center justify-center">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' ref={emailRef} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                {/* <Link   className="label-text-alt link link-hover">Forgot password? Please Reset</Link> */}
                                {/* onClick={handleResetPassword} */}
                                <p><small>Forget Password? Please<button  className='btn btn-active btn-link btn-xs'>Reset password</button> </small></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            {/* <button className="btn btn-primary">Login</button> */}
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center mb-5 mt-0'><small>New Here?
                        <Link to='/signup'>Create an Account</Link></small>
                    </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;