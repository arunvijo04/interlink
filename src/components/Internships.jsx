import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Internship Data (added image URLs for more appeal)
const internshipsData = [
    {
        title: 'UX Designer for Product Based Company',
        type: 'Fulltime',
        salary: 1500000,
        experience: 'Intermediate',
        location: 'Remote',
        company: 'ABC Tech',
        image: 'https://via.placeholder.com/150/ABC-Tech', // Placeholder image
    },
    {
        title: 'Product Designer',
        type: 'Fulltime',
        salary: 0, // Undisclosed
        experience: 'Beginner',
        location: 'Office',
        company: 'XYZ Ltd.',
        image: 'https://via.placeholder.com/150/XYZ-Ltd', // Placeholder image
    },
    {
        title: 'Product Lead',
        type: 'Freelance',
        salary: 0, // Undisclosed
        experience: 'Expert',
        location: 'Remote',
        company: 'Startup Inc.',
        image: 'https://via.placeholder.com/150/Startup-Inc', // Placeholder image
    },
    // Add more internship opportunities here...
];

const Internships = () => {
    const [sortBy, setSortBy] = useState('Salary');
    const [salaryRange, setSalaryRange] = useState([500000, 1500000]);
    const [filters, setFilters] = useState({
        type: '',
        experience: '',
        location: '',
        company: '',
        search: '',
    });
    const [filteredInternships, setFilteredInternships] = useState(internshipsData);
    const [showFiltered, setShowFiltered] = useState(false);
    const location = useLocation();

    // Apply search filters based on hero section query or filters
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const search = queryParams.get('search') || '';
        const locationFilter = queryParams.get('location') || '';

        setFilters((prev) => ({
            ...prev,
            search,
            location: locationFilter,
        }));
    }, [location]);

    // Function to filter internships based on input and button click
    const filterInternships = () => {
        const filtered = internshipsData.filter((internship) => {
            const matchesSearch =
                filters.search === '' ||
                internship.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                internship.company.toLowerCase().includes(filters.search.toLowerCase());
            const matchesType = filters.type === '' || internship.type === filters.type;
            const matchesExperience = filters.experience === '' || internship.experience === filters.experience;
            const matchesLocation = filters.location === '' || internship.location.toLowerCase().includes(filters.location.toLowerCase());
            const matchesSalary = internship.salary >= salaryRange[0] && (internship.salary <= salaryRange[1] || internship.salary === 0);
            const matchesCompany = filters.company === '' || internship.company.toLowerCase().includes(filters.company.toLowerCase());

            return matchesSearch && matchesType && matchesExperience && matchesLocation && matchesSalary && matchesCompany;
        });

        if (sortBy === 'Salary') {
            filtered.sort((a, b) => b.salary - a.salary);
        }

        setFilteredInternships(filtered);
        setShowFiltered(true);
    };

    return (
        <div className="w-full bg-gray-100 py-10 px-4 lg:px-20">
            <div className="container mx-auto flex flex-col lg:flex-row gap-10">
                {/* Left: Internship Cards */}
                <div className="w-full lg:w-3/4">
                    <h1 className="text-4xl font-bold text-black mb-8">All Internships</h1>
                    <div className="flex mb-6">
                        <input
                            type="text"
                            placeholder="Search for internships..."
                            value={filters.search}
                            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        <button
                            onClick={filterInternships}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600"
                        >
                            Search
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {(showFiltered ? filteredInternships : internshipsData).length > 0 ? (
                            (showFiltered ? filteredInternships : internshipsData).map((internship, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                                >
                                    <img
                                        src={internship.image}
                                        alt={internship.company}
                                        className="w-full h-40 object-cover rounded-md mb-4"
                                    />
                                    <h2 className="text-2xl font-bold">{internship.title}</h2>
                                    <p className="text-gray-600 mt-2">
                                        {internship.type} | ₹{internship.salary ? internship.salary.toLocaleString() : 'Undisclosed'} | {internship.experience} experience
                                    </p>
                                    <p className="text-gray-500 mt-1">Location: {internship.location}</p>
                                    <p className="text-gray-500 mt-1">Company: {internship.company}</p>
                                    <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600">
                                        Apply Now
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p>No internships found.</p>
                        )}
                    </div>
                </div>

                {/* Right: Filter Section */}
                <div className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-6">
                        <h2 className="text-xl font-bold">Sort By</h2>
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
                        <h2 className="text-xl font-bold">Filter By</h2>
                        {/* Filter inputs can be expanded here for more options */}
                        <input
                            type="text"
                            placeholder="Company"
                            value={filters.company}
                            onChange={(e) => setFilters({ ...filters, company: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-md mt-2"
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            value={filters.location}
                            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-md mt-2"
                        />
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-bold">Salary Range</h2>
                        <div className="flex justify-between mt-2">
                            <span>₹{salaryRange[0].toLocaleString()}</span>
                            <span>₹{salaryRange[1].toLocaleString()}</span>
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={2000000}
                            value={salaryRange[0]}
                            onChange={(e) => setSalaryRange([Number(e.target.value), salaryRange[1]])}
                            className="w-full mt-2"
                        />
                        <input
                            type="range"
                            min={0}
                            max={2000000}
                            value={salaryRange[1]}
                            onChange={(e) => setSalaryRange([salaryRange[0], Number(e.target.value)])}
                            className="w-full mt-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Internships;
