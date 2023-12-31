import React, { useContext, useEffect, useState } from 'react';
import useCollege from './../../hook/useCollege';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';

const College = () => {
    const [colleges] = useCollege();
    const [selectedColleges, setSelectedColleges] = useState([]);

    // const { user } = useContext(AuthContext)

    // useEffect(() => {

    //     fetch(`https://college-applicatio-form-server.vercel.app/admission/email/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setSelectedColleges(data);
    //         });
    // }, [user])


    useEffect(() => {

        const delay = setTimeout(() => {
            // setLoading(false);
        }, 300);

        return () => clearTimeout(delay);
    }, []);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://college-applicatio-form-server.vercel.app/admission/search`);
            setSelectedColleges(response.data || []);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // const filteredColleges = colleges?.filter((college) =>
    //     selectedColleges.some((selectedCollege) =>
    //         selectedCollege?.collegeName?.toLowerCase() === college?.name?.toLowerCase()
    //     )
    // );

    const filteredColleges = colleges?.filter((college) =>
        selectedColleges.some((selectedCollege) =>
            selectedCollege?.collegeName?.toLowerCase() === college?.name?.toLowerCase()
        )
    );

    console.log(filteredColleges);

    // console.log(filteredColleges);
    return (
        <div>
            <h2>My Selected College {selectedColleges.length}</h2>

            <div className="px-5 py-5 mx-auto my-auto">
                {filteredColleges?.map((college) => (
                    <div key={college?._id} className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div className="bg-base-100 shadow-xl p-5 rounded-md mb-5">
                            <figure>
                                <img
                                    className="w-full h-64 object-cover rounded-md"
                                    src={college?.image}
                                    alt="Album"
                                />
                            </figure>

                            <div className="mt-4">
                                <h2 className="text-4xl font-bold">{college?.name}</h2>
                                <p className="text-md">Admission process:</p>
                                <ul className="text-md list-disc ml-6">
                                    <li>{college?.admissionProcess?.requirements}</li>
                                    <li>{college?.admissionProcess?.procedures}</li>
                                </ul>

                            </div>
                        </div>

                        <div className="bg-base-100 shadow-xl p-5 rounded-md mb-5">
                            <h3 className="text-2xl font-bold mb-4"> College Information</h3>
                            <p className="mt-4 text-md"> {college?.details}</p>
                            <p className="mt-4 text-md">Total Research Works: {college?.researchCount}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default College;