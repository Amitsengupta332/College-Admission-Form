import React from 'react';

const Details = ({ selectedCollege }) => {

    return (
        <div className='mt-10'>
            <h2 className='text-center text-3xl'>Details  College: {selectedCollege?.name}</h2>
            <div className="px-5 py-5 mx-auto my-auto">
                <div className=" ">
                    <div className="bg-base-100 shadow-xl p-5 rounded-md">
                        <figure>
                            <img
                                className="w-full h-64 object-cover rounded-md"
                                src={selectedCollege?.image}
                                alt="Album"
                            />
                        </figure>

                        <div className="mt-4">
                            <h2 className="text-4xl font-bold">{selectedCollege?.name}</h2>
                            <p className="text-md">Admission process:</p>
                            <ul className="text-md list-disc ml-6">
                                <li>{selectedCollege?.admissionProcess?.requirements}</li>
                                <li>{selectedCollege?.admissionProcess?.procedures}</li>
                            </ul>
                            <p className="text-md">Our Events:</p>
                            <ul className="text-md list-disc ml-6">
                                <li>{selectedCollege?.events[0]?.name}</li>
                                <li>{selectedCollege?.events[1]?.name}</li>
                            </ul>
                            <p className="text-md">Our Sports:</p>
                            <ul className="text-md list-disc ml-6">
                                <li>{selectedCollege?.sports[0].name}</li>
                                <li>{selectedCollege?.sports[1].name}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-base-100 shadow-xl p-5 rounded-md">
                        <h3 className="text-2xl font-bold mb-4">Research Works</h3>
                        <ul className="text-md list-disc ml-6">
                            {selectedCollege?.researchPapers?.map((paper) => (
                                <li key={paper.id}>
                                    <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                        {paper.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-md">Total Research Works: {selectedCollege?.researchCount}</p>
                    </div>
                </div>

            </div>

            {/* <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        className="w-full h-64 object-cover rounded-md"
                        src={selectedCollege?.image}
                        alt="Album"
                    />
                </figure>
                <div className="mt-4">
                    <h2 className="text-4xl font-bold">{selectedCollege?.name}</h2>
                    <p className="text-md">Admission process:</p>
                    <ul className="text-md list-disc ml-6">
                        <li>{selectedCollege?.admissionProcess?.requirements}</li>
                        <li>{selectedCollege?.admissionProcess?.procedures}</li>
                    </ul>
                    <p className="text-md">Our Events:</p>
                    <ul className="text-md list-disc ml-6">
                        <li>{selectedCollege?.events[0]?.name}</li>
                        <li>{selectedCollege?.events[1]?.name}</li>
                    </ul>
                    <p className="text-md">Our Sports:</p>
                    <ul className="text-md list-disc ml-6">
                        <li>{selectedCollege?.sports[0].name}</li>
                        <li>{selectedCollege?.sports[1].name}</li>
                    </ul>
                </div>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default Details;