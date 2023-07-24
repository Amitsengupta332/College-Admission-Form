import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16  text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>

                <img className=" h-64 w-64 rounded-full" src="https://i.ibb.co/CP7r6WK/91351-404-error-page-animation-with-sky.gif" alt="" />
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-red-500'>
                        <span className='sr-only'>Error</span> {status || 404}
                    </h2>

                    <p className='text-xl font-semibold md:text-3xl mb-8'>
                        {error.message}
                    </p>
                    <Link
                        to='/'
                        className='btn btn-error'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;