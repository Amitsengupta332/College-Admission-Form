import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Admission = () => {

    const { user } = useContext(AuthContext);
    const defaultCandidateName = user?.displayName || '';
    const defaultEmail = user?.email || '';

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const selectCollege = form.selectCollege.value;
        const subject = form.subject.value;
        const name = form.name.value;
        const email = user?.email;
        const Phone = form.phone.value;
        const address = form.address.value;
        const image = form.imageUrl.value;
        const date = form.date.value;

        const admissionData = {
            selectCollege,
            subject,
            name, email, Phone, address, image, date
        }
        console.log(admissionData);

        // fetch('https://toy-marketplace-server-hazel.vercel.app/addToys', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newToy)
        // }

        // )
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Toy Added Successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'Added Successful'
        //             })
        //         }
        //     })


        fetch(`http://localhost:5000/admission`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(admissionData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Admission Apply Successfully',
                        icon: 'success',
                        confirmButtonText: 'Added Successful'
                    })
                }
            })
        // .then((res) => {
        //     if (!res.ok) {
        //         throw new Error('Network response was not ok');
        //     }
        //     return res.json();
        // })
        // .then((data) => {
        //     console.log(data);
        //     if (data.insertedId) {
        //         Swal('Good job!', 'Admission Form Fill Up Successfully', 'success');
        //     }
        // })
        // .catch((error) => {
        //     console.error('Error submitting form:', error);
        //     Swal('Oops!', 'An error occurred while submitting the form', 'error');
        // });


    }

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
                                name="selectCollege"
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
                                name='subject'
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
                                defaultValue={user?.displayName}
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