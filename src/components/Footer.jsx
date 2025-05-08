import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="py-10 text-white bg-gray-800 mt-2.5">
            <div className="container px-6 mx-auto md:px-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div>
                        <h3 className="mb-4 text-2xl font-semibold">Aloqa</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <FaPhoneAlt className="mr-2 text-red-500" />
                                <a href="tel:+998901234567" className="hover:text-red-500">+998 90 123 45 67</a>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-2 text-red-500" />
                                <a href="#" className="hover:text-red-500">info@shopuz.uz</a>
                            </li>
                            <li className="flex items-center">
                                <FaLocationDot className="mr-2 text-red-500" />
                                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">O'zbekiston</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-2xl font-semibold">Ijtimoiy tarmoqlar</h3>
                        <div className="flex space-x-6">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-600 hover:text-red-500">
                                <FaFacebook />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-600 hover:text-red-500">
                                <FaInstagram />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-400 hover:text-red-500">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-2xl font-semibold">Foydali havolalar</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="hover:text-red-500">Shartlar</Link>
                            </li>
                            <li>
                                <Link to="/" className="hover:text-red-500">Maxfiylik siyosati</Link>
                            </li>
                            <li>
                                <Link to="/" className="hover:text-red-500">Aloqa</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-4 mt-8 text-center border-t border-gray-700">
                    <p>&copy; {new Date().getFullYear()} Shop Uz. Barcha huquqlar himoyalangan.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
