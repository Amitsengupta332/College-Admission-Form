import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    const { googleSignIn, githubSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                navigate(from, { replace: true })
                console.log(result.user)

            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handelGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                navigate(from, { replace: true })
                console.log(result.user)

            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <div>
                <div className="flex h-20 w-full ">
                    <div className="   flex-grow card rounded-box place-items-center ">
                        <Link onClick={handleGoogleSignIn}>
                            <div className='flex justify-center items-center gap-2'>
                                <FaGoogle className='w-5 h-5'></FaGoogle>
                                Google
                            </div>
                        </Link>
                    </div>
                    <div className="divider divider-horizontal">OR</div>
                    <div className=" flex-grow card rounded-box place-items-center ">
                        <Link onClick={handelGithubSignIn}>
                            <div className='flex justify-center items-center gap-2'>
                                <FaGithub className='w-5 h-5'></FaGithub>
                                Github
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;