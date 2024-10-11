import React, { useState } from 'react';

const Internships = () => {
    const [sortBy, setSortBy] = useState('Salary');
    const [salaryRange, setSalaryRange] = useState([500000, 1500000]);

    return (
        <div className="w-full bg-white py-10 px-4 lg:px-20">
            <div className="container mx-auto flex flex-col lg:flex-row gap-10">
                {/* Left: Internship Cards */}
                <div className="w-full lg:w-3/4">
                    <h1 className="text-3xl lg:text-5xl font-bold text-black">All Internships</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                        {/* Internship Card 1 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold">UX Designer for Product Based Company</h2>
                            <p className="text-gray-500 mt-2">Full Time | ₹15,00,000 a year | 2–3 years experience</p>
                            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Apply Now</button>
                        </div>
                        {/* Internship Card 2 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold">Product Designer</h2>
                            <p className="text-gray-500 mt-2">Full Time | ₹Undisclosed | 1–2 years experience</p>
                            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Apply Now</button>
                        </div>
                        {/* Internship Card 3 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold">Product Lead</h2>
                            <p className="text-gray-500 mt-2">Full Time | ₹Undisclosed | 10+ years experience</p>
                            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">Apply Now</button>
                        </div>
                    </div>
                </div>

                {/* Right: Filter Section */}
                <div className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-6">
                        <h2 className="text-lg font-bold">Sort By</h2>
                        <div className="flex items-center mt-2">
                            <input
                                type="radio"
                                id="salary"
                                name="sortBy"
                                value="Salary"
                                checked={sortBy === 'Salary'}
                                onChange={() => setSortBy('Salary')}
                                className="mr-2"
                            />
                            <label htmlFor="salary" className="mr-4">Salary</label>
                            <input
                                type="radio"
                                id="datePosted"
                                name="sortBy"
                                value="DatePosted"
                                checked={sortBy === 'DatePosted'}
                                onChange={() => setSortBy('DatePosted')}
                                className="mr-2"
                            />
                            <label htmlFor="datePosted">Date Posted</label>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-lg font-bold">Filters</h2>
                        <div className="mt-4">
                            <h3 className="font-semibold">Job Type</h3>
                            <div className="mt-2">
                                <input type="checkbox" id="fulltime" className="mr-2" />
                                <label htmlFor="fulltime">Fulltime</label>
                            </div>
                            <div className="mt-2">
                                <input type="checkbox" id="freelance" className="mr-2" />
                                <label htmlFor="freelance">Freelance</label>
                            </div>
                        </div>
                        
                        <div className="mt-6">
                            <h3 className="font-semibold">Experience Level</h3>
                            <div className="mt-2">
                                <input type="checkbox" id="expert" className="mr-2" />
                                <label htmlFor="expert">Expert</label>
                            </div>
                            <div className="mt-2">
                                <input type="checkbox" id="intermediate" className="mr-2" />
                                <label htmlFor="intermediate">Intermediate</label>
                            </div>
                            <div className="mt-2">
                                <input type="checkbox" id="beginner" className="mr-2" />
                                <label htmlFor="beginner">Beginner</label>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="font-semibold">Preferred Location</h3>
                            <div className="mt-2">
                                <input type="checkbox" id="remote" className="mr-2" />
                                <label htmlFor="remote">Remote</label>
                            </div>
                            <div className="mt-2">
                                <input type="checkbox" id="office" className="mr-2" />
                                <label htmlFor="office">Office</label>
                            </div>
                            <div className="mt-2">
                                <input type="checkbox" id="both" className="mr-2" />
                                <label htmlFor="both">Both</label>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="font-semibold">Location</h3>
                            <input type="text" className="w-full p-2 border rounded mt-2" placeholder="Anywhere" />
                        </div>

                        <div className="mt-6">
                            <h3 className="font-semibold">Company</h3>
                            <input type="text" className="w-full p-2 border rounded mt-2" placeholder="Type Company Name here..." />
                        </div>

                        <div className="mt-6">
                            <h3 className="font-semibold">Salary per year</h3>
                            <div className="flex items-center mt-2">
                                <input
                                    type="range"
                                    min="500000"
                                    max="1500000"
                                    value={salaryRange[0]}
                                    className="mr-2 w-full"
                                    onChange={(e) => setSalaryRange([e.target.valueAsNumber, salaryRange[1]])}
                                />
                                <input
                                    type="range"
                                    min="500000"
                                    max="1500000"
                                    value={salaryRange[1]}
                                    className="w-full"
                                    onChange={(e) => setSalaryRange([salaryRange[0], e.target.valueAsNumber])}
                                />
                            </div>
                            <div className="mt-2 text-sm text-gray-500">
                                Min: ₹{salaryRange[0].toLocaleString()} Max: ₹{salaryRange[1].toLocaleString()}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Internships;
