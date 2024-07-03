import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HeaderH = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed w-full z-10 top-0 left-0 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button onClick={() => setIsScrolled(!isScrolled)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded={isScrolled}>
                            <span className="sr-only">Open main menu</span>
                            {isScrolled ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-center sm:justify-around">
                        <div className="flex-shrink-0">
                            <img className="h-14 w-auto" src="assets/media/logo.png" alt="Logo" />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <NavLink to="/" label="Home" currentPath={location.pathname} isScrolled={isScrolled} />
                                <NavLink to="/about" label="About" currentPath={location.pathname} isScrolled={isScrolled} />
                                <NavLink to="/services" label="Services" currentPath={location.pathname} isScrolled={isScrolled} />
                                <NavLink to="/gallery" label="Gallery" currentPath={location.pathname} isScrolled={isScrolled} />
                                <NavLink to="/contact" label="Contact" currentPath={location.pathname} isScrolled={isScrolled} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isScrolled && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <NavLink to="/" label="Home" currentPath={location.pathname} isScrolled={isScrolled} />
                        <NavLink to="/about" label="About" currentPath={location.pathname} isScrolled={isScrolled} />
                        <NavLink to="/services" label="Services" currentPath={location.pathname} isScrolled={isScrolled} />
                        <NavLink to="/gallery" label="Gallery" currentPath={location.pathname} isScrolled={isScrolled} />
                        <NavLink to="/contact" label="Contact" currentPath={location.pathname} isScrolled={isScrolled} />
                    </div>
                </div>
            )}
        </nav>
    );
};

const NavLink = ({ to, label, currentPath, isScrolled }) => (
    <Link to={to} className={`px-3 py-2 rounded-md text-sm font-medium ${currentPath === to ? (isScrolled ? 'text-gray-900' : 'text-gray-800') : (isScrolled ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-400 hover:text-white hover:bg-gray-700')}`}>
        {label}
    </Link>
);

export default HeaderH;
