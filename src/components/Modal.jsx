import React, { useEffect } from 'react';

function Modal({ message, type, onClose }) {
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [message, onClose]);

    const getBackgroundColor = () => {
        switch (type) {
            case 'error':
                return 'bg-red-500';
            case 'success':
                return 'bg-green-500';
            case 'info':
                return 'bg-blue-500';
            case 'warning':
                return 'bg-yellow-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        message && (
            <div className="fixed top-10 left-0 w-full flex justify-center z-50">
                <div className={`p-6 rounded-lg ${getBackgroundColor()} text-white`}>
                    <p>{message}</p>
                    <button
                        className="absolute top-2 right-2 text-xl font-semibold"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>
            </div>
        )
    );
}

export default Modal;
