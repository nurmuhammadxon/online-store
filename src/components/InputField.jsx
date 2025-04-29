import React from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

function InputField({ label, type, name, value, onChange, placeholder, required, showPasswordToggle, togglePasswordVisibility }) {
    return (
        <label className='mt-4 max-w-[350px] flex flex-col items-start w-full'>
            <span>{label}</span>
            <div className='w-full flex items-center gap-0'>
                <input
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className='w-full h-11 outline-none bg-gray-300 pl-3.5 rounded-l-md'
                />
                {showPasswordToggle !== undefined && (
                    <span
                        className='h-11 pr-1.5 bg-gray-300 rounded-r-md flex items-center justify-center cursor-pointer'
                        onClick={togglePasswordVisibility}
                    >
                        {showPasswordToggle ? <IoEye className='text-2xl' /> : <IoEyeOff className='text-2xl' />}
                    </span>
                )}
            </div>
        </label>
    );
}

export default InputField;
