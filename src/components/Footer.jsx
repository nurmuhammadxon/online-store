import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Aloqa</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <FaPhoneAlt className="mr-2 text-red-500" />
                                <a href="tel:+998901234567" className="hover:text-red-500">+998 90 123 45 67</a>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-2 text-red-500" />
                                <a href="#" className="hover:text-red-500">info@laptopsuz.uz</a>
                            </li>
                            <li className="flex items-center">
                                <FaLocationDot className="mr-2 text-red-500" />
                                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">Samarqand, O'zbekiston</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Ijtimoiy tarmoqlar</h3>
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
                        <h3 className="text-2xl font-semibold mb-4">Foydali havolalar</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/terms" className="hover:text-red-500">Shartlar</Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="hover:text-red-500">Maxfiylik siyosati</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-red-500">Aloqa</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                    <p>&copy; {new Date().getFullYear()} Laptops Uz. Barcha huquqlar himoyalangan.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
