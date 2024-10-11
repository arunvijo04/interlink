import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import p1 from '../assets/p1.png'; // Add your image path here

const Hero = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/internships?search=${searchTerm}&location=${location}`);
    };

    return (
        <div className="hero-section relative bg-gray-100 py-10 px-4 lg:px-20">
            <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url(${p1})`, opacity: 0.5 }}
            />
            <div className="container mx-auto flex flex-col items-center relative z-10">
                <h1 className="text-4xl lg:text-5xl font-bold text-white">Find Your Dream Internship</h1>
                <form onSubmit={handleSearch} className="mt-6 w-full lg:w-1/2 flex gap-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search internships by title, company..."
                        className="flex-grow p-3 border border-gray-300 rounded shadow-md"
                    />
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location"
                        className="flex-grow p-3 border border-gray-300 rounded shadow-md"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-3 rounded shadow-md hover:bg-blue-600 transition">
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Hero;
