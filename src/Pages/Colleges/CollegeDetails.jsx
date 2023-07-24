import React, { useEffect, useState } from 'react';
 
import useCollege from '../../hook/useCollege';
import { useParams } from 'react-router-dom';
import Details from './Details';

const CollegeDetails = () => {

    const [colleges] = useCollege();
    const { id } = useParams()
    // const [detailsCollege, setDetailsCollege] = useState([]);

    const selectedCollege = colleges.find(college => college._id == id)


    // useEffect(() => {
    //     fetch('https://college-applicatio-form-server.vercel.app/Colleges')
    //         .then(res => res.json())
    //         .then(result => {
    //             setDetailsCollege(result)
    //             console.log(result);
    //         })
    // }, [])

    // const selectedCollege = colleges.find(college => college._id == id)


    return (
        <div>
            <Details selectedCollege={selectedCollege}></Details>
            {/* <h2 className='text-5xl text-center'>College Details: {detailsCollege.length}</h2>
            <div>
                {
                    detailsCollege.map(details =>
                        <Details key={details} details={details}>
                        </Details>)
                }
            </div> */}
        </div>
    );
};

export default CollegeDetails;