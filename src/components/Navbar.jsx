import React, { useState } from 'react';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="relative w-full h-[60px] bg-[#f8f9fa] flex items-center justify-between px-4 lg:px-8 shadow-md">
            <div className="text-[#000aff] text-2xl lg:text-4xl font-bold font-['DM Sans']">
                InternLink
            </div>
            <div className="flex space-x-4 lg:space-x-6">
                {!isLoggedIn ? (
                    <>
                        <div className="text-[#8a8a8a] text-lg lg:text-2xl font-bold font-['DM Sans'] cursor-pointer">
                            Login
                        </div>
                        <div className="text-[#000aff] text-lg lg:text-2xl font-bold font-['DM Sans'] cursor-pointer">
                            Signup
                        </div>
                    </>
                ) : (
                    <div className="text-[#000aff] text-lg lg:text-2xl font-bold font-['DM Sans'] cursor-pointer" onClick={() => setIsLoggedIn(false)}>
                        Logout
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
