import React from 'react';

const Navbar = () => {
    return (
        <div className="relative w-full h-[107px] bg-[#f8f9fa] flex items-center justify-between px-6 lg:px-10">
            <div className="text-[#000aff] text-3xl lg:text-5xl font-bold font-['DM Sans']">InternLink</div>
            <div className="flex space-x-4 lg:space-x-10">
                <div className="text-[#8a8a8a] text-xl lg:text-4xl font-bold font-['DM Sans']">Login</div>
                <div className="text-[#000aff] text-xl lg:text-4xl font-bold font-['DM Sans']">Signup</div>
            </div>
        </div>
    );
};

export default Navbar;
