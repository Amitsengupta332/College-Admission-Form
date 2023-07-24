import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Admission = () => {

    const { user } = useContext(AuthContext);
    const defaultCandidateName = user?.displayName || '';
    // const defaultEmail = user?.email || '';


    const [admissionData, setAdmissionData] = useState({
        imageUrl: '',
        user: defaultCandidateName,
        email: user?.email,
        collegeName: '',
        candidatePhone: '',
        address: '',
        dateOfBirth: '',
        subject: '', // New field for the subject category
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setAdmissionData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://college-applicatio-form-server.vercel.app/admission`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(admissionData),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal('Good job!', 'Admission Form Fill Up Successfully', 'success');
                }
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
                Swal('Oops!', 'An error occurred while submitting the form', 'error');
            });

        setAdmissionData({
            imageUrl: '',
            candidateName: defaultCandidateName,
            email: defaultEmail,
            collegeName: '',
            candidatePhone: '',
            address: '',
            dateOfBirth: '',
            subject: '', // Reset subject field
        });
    };

    const handlecollegeNameChange = (e) => {
        const { value } = e.target;

        e
        setAdmissionData((prevState) => ({
            ...prevState,
            collegeName: value,

        }));
    };

    const handleSubjectChange = (e) => {
        const { value } = e.target;
        setAdmissionData((prevState) => ({
            ...prevState,
            subject: value,
        }));
    };

    return (
        <div>
            <div className="container w-[60%] mx-auto p-4">
                <h1 className="text-4xl text-center font-semibold">Admission Form Fill up</h1>
                <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                        <label className="label">
                            <span className="label-text text-xl">Select College:</span>
                        </label>
                        <label className="input-group">
                            <select
                                id="collegeName"
                                value={admissionData.collegeName}
                                onChange={handlecollegeNameChange}

                                className="input input-bordered w-full"
                                required
                            >
                                <option value="" disabled>
                                    Select a college
                                </option>
                                <option value="Harvard University">Harvard University</option>
                                <option value="Stanford University">Stanford University</option>
                                <option value="Massachusetts Institute of Technology (MIT)">Massachusetts Institute of Technology (MIT)</option>
                                <option value="Yale University">Yale University</option>
                                <option value="California Institute of Technology (Caltech)">University of Pennsylvania</option>
                                <option value="Princeton University">Princeton University</option>
                            </select>
                        </label>
                        {/* Add more colleges here */}
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-xl">Subject:</span>
                        </label>

                        <label className="input-group">
                            <select
                                id="subject"

                                value={admissionData.subject}
                                onChange={handleSubjectChange}
                                className="input input-bordered w-full"
                                required
                            >
                                <option value="" disabled>
                                    Select a subject
                                </option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Business">Business</option>
                                <option value="Engineering">Engineering</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-xl">Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                id="candidateName"
                                name='name'
                                value={admissionData.candidateName}
                                onChange={handleChange}
                                defaultValue={user}
                                readOnly
                                className="input input-bordered w-full"
                                required
                            />
                        </label>
                    </div>
                    {/* email */}
                    <div>
                        <label className="label">
                            <span className="label-text text-xl">Email</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            defaultValue={user?.email}
                            readOnly
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Additional fields for candidate information */}
                    <div>
                        <label className="label">
                            <span className="label-text text-xl">Phone Number:</span>
                        </label>

                        <input
                            type="tel"
                            id="candidatePhone"
                            name='phone'
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-xl">Address:</span>
                        </label>

                        <input
                            type="text"
                            id="address"
                            name='address'
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-xl"> Date of Birth:</span>
                        </label>

                        <input
                            type="date"
                            id="dateOfBirth"
                            name="date"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-xl">Image URL:</span>
                        </label>

                        <input
                            type="text"
                            id="imageUrl"
                            name='imageUrl'
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    {/* End of additional fields */}
                    <div className="col-span-2">

                        <input type="submit" value="Submit" className="btn   btn-success btn-block" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Admission;