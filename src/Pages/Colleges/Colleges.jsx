import React, { useEffect, useState } from 'react';
import CollegesCard from './CollegesCard';
import { Link } from 'react-router-dom';

const Colleges = () => {
    const [allCollege, setAllCollege] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/Colleges')
            .then(res => res.json())
            .then(result => {
                setAllCollege(result)
                console.log(result);
            })
    }, [])


    return (
        <div>
            <h2 className='text-5xl text-center'>College List are: {allCollege.length}</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-5'>
                {
                    allCollege.map(college =>
                        // <CollegesCard
                        // key={college._id}
                        // college={college}
                        // >
                        // </CollegesCard>
                        <div key={college._id}>
                            <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
                                <figure><img src={college.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{college.name}</h2>
                                    <p>Rate:{college.rating}</p>
                                    <p>Admission Date:{college.admissionDate}</p>
                                    <p>ResearchPaper: {college.researchCount}</p>
                                    <div className="card-actions justify-center">
                                        <Link to={`/CollegeDetails/${college._id}`} className="btn btn-primary">View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Colleges;