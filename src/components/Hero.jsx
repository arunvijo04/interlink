import React, { useState } from 'react';
import p1 from '../assets/p1.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    // State to store selected options
    const [internshipType, setInternshipType] = useState('');
    const [mode, setMode] = useState('');

    const handleSearch = () => {
        navigate('/internships');
    };

    return (
        <div className="relative w-full h-screen bg-neutral-100 flex flex-col justify-center items-center overflow-hidden">
            {/* Content Wrapper */}
            <div className="relative w-[90%] lg:w-[1365px] h-auto lg:h-[507px] mx-auto flex flex-col lg:flex-row items-center justify-between transition-all duration-1000 ease-in-out transform lg:-translate-y-0 translate-y-10 opacity-0 lg:opacity-100 animate-fadeInUp">
                {/* Text Section */}
                <div className="max-w-lg text-center lg:text-left space-y-4 lg:space-y-6">
                    <h1 className="text-black text-4xl lg:text-[64px] font-extrabold font-['Abhaya Libre ExtraBold']">
                        Find freelance and fulltime<br /> developer jobs.
                    </h1>
                    <p className="text-[#787878] text-lg lg:text-2xl font-normal font-['Inter'] mt-4">
                        InternLink is your one-stop-centre for thousands of digital freelance and fulltime internships.
                    </p>
                </div>
                {/* Image Section */}
                <img
                    className="w-[300px] h-[300px] lg:w-[568px] lg:h-[485px] mt-6 lg:mt-0 transition-all duration-700 ease-in-out transform lg:scale-100 scale-75 animate-slideInRight"
                    src={p1}
                    alt="Developer Jobs"
                />
            </div>

            {/* Search Section */}
            <div className="w-full lg:w-[70%] h-auto lg:h-[94px] bg-[#d9d9d9] flex flex-col lg:flex-row items-center justify-around mt-10 lg:mt-20 px-6 lg:px-0 py-5 rounded-[40px] shadow-lg animate-fadeInUp transition-all duration-1000 ease-in-out transform opacity-0 lg:opacity-100">
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 w-full lg:w-auto justify-center">
                    {/* Dropdown for selecting internship type */}
                    <select
                        value={internshipType}
                        onChange={(e) => setInternshipType(e.target.value)}
                        className="w-full lg:w-[297px] h-[50px] bg-[#f8f9fa] rounded-[40px] border-2 border-black px-4 text-black"
                    >
                        <option value="" disabled>
                            Select Internship Type
                        </option>
                        <option value="freelance">Freelance</option>
                        <option value="fulltime">Fulltime</option>
                        <option value="internship">Internship</option>
                    </select>

                    {/* Dropdown for selecting mode */}
                    <select
                        value={mode}
                        onChange={(e) => setMode(e.target.value)}
                        className="w-full lg:w-[318px] h-[50px] bg-[#f8f9fa] rounded-[40px] border-2 border-black px-4 text-black"
                    >
                        <option value="" disabled>
                            Select Mode
                        </option>
                        <option value="remote">Remote</option>
                        <option value="on-site">On-site</option>
                        <option value="hybrid">Hybrid</option>
                    </select>
                </div>

                {/* Search Button */}
                <div className="relative w-[179px] h-12 mt-6 lg:mt-0" onClick={handleSearch}>
                    <div className="absolute w-full h-[47.28px] bg-[#000aff] rounded-[40px] cursor-pointer hover:bg-[#0000ff] transition-colors duration-300" />
                    <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center text-white text-[32px] font-extrabold font-['Inter'] leading-[45.13px]">
                        Search
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
