import React from 'react';
import { Link } from 'react-router-dom';

const CollegesCard = ({ college }) => {
    // console.log(college);
    const { _id, admissionDate, name, image, rating, researchCount } = college || {};
    return (
        <div className='mx-auto'>
            <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Rate:{rating}</p>
                    <p>Admission Date:{admissionDate}</p>
                    <p>ResearchPaper: {researchCount}</p>
                    {/* <div className="card-actions justify-center">
                        <Link to={`CollegeDetails/${_id}`} className="btn btn-primary">
                            View Details
                        </Link>
                        
                    </div> */}
                    <div className="card-actions justify-center">
                        <Link to={`CollegeDetails/${college._id}`} className="btn btn-primary">View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegesCard;