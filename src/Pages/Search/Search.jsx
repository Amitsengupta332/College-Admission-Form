import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5000/searchColleges?name=${searchTerm}`);
            setSearchResults(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setSearchResults([]);
            setLoading(false);
        }
    };

    return (
        <div className='container mx-auto'>
            {/* <div className="flex justify-center items-center mb-4 mt-4">
                <input type="text" placeholder="Search…" className="input input-bordered" />
                <button className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div> */}

            {/* style={{ backgroundImage: "url('https://img.freepik.com/free-photo/group-diverse-grads-throwing-caps-up-sky_53876-56031.jpg?size=626&ext=jpg&uid=R71766098&ga=GA1.2.1935858399.1683099883&semt=sph)" }} */}

            {/* className="min-h-screen bg-cover bg-center flex items-center justify-center" */}

            {/* className="w-full max-w-5xl rounded-lg shadow-md px-4 py-6 md:flex" */}

            {/* className=" md:w-1/2 md:mr-4 " */}
            <div >
                <div >
                    {/* Left Side - Search Functionality */}
                    {/* <div >
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleChange}
                            placeholder="Search for colleges..."
                            className="w-[100] px-4 py-2 text-gray-800 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                        <button
                            type="button"
                            onClick={handleSearch}
                            className="  mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            Search
                        </button>
                    </div> */}

                    <div className="flex justify-center items-center mb-4 mt-4">
                        <input type="text" value={searchTerm}
                            onChange={handleChange} placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>

                    {/* Right Side - Search Result Cards */}

                    {/* className="md:w-1/2 mt-4 md:mt-0 md:ml-4" */}

                    {/* <div
                                            key={college._id}
                                            className="h-auto p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                                        >
                                            <img src="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFydmFyZCUyMHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" className="w-full h-32 object-cover rounded-md" />
                                            <p className="text-gray-700 font-semibold text-lg mt-2">{college.name}</p>
                                            <p className="text-gray-600">{college.details}</p>
                                            <Link to={`/collegeDetails/${college._id}`} className="mt-4 inline-block px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 focus:outline-none">
                                                Details
                                            </Link>
                                        </div> */}

                    {/* className="mt-4 md:mt-0 md:ml-4" */}
                    <div >
                        {loading ? (
                            <div className="text-center text-gray-500">
                                <p>Loading...</p>
                            </div>
                        ) : searchResults.length > 0 ? (
                            <div>
                                <h2 className="text-lg font-semibold mb-2 text-center">Search Results:</h2>
                                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
                                    {searchResults.map((college) => (
                                        <div key={college._id}>
                                            <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
                                                <figure><img src={college.image} alt="Shoes" /></figure>
                                                <div className="card-body">
                                                    <h2 className="card-title">{college.name}</h2>
                                                    <p>Rate:{college.rating}</p>
                                                    <p>Admission Date:{college.admissionDate}</p>
                                                    <p>ResearchPaper: {college.researchCount}</p>
                                                    <div className="card-actions justify-center">
                                                        <Link to={`CollegeDetails/${college._id}`} className="btn btn-primary">View Details
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center text-gray-500">
                                <p>No results found.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;