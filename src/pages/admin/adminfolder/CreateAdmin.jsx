import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// axios import qilish
import axios from 'axios';

// icons
import { FaUserPlus } from "react-icons/fa6";

// componetns
import InputField from '../../../components/InputField';

function CreateAdmin() {
    const [isPassword, setIsPassword] = useState(false);
    const [isConfirmPassword, setIsConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const [value, setValue] = useState({
        userName: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setValue(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('http://165.232.87.222:5000/api/Users/Insert', value);
            const userId = response.data.data.id

            if (response.statusText === 'OK') {
                const resRole = await axios.post('http://165.232.87.222:5000/api/Users/AssignRole/assign-role', {
                    userId: userId,
                    role: 0
                })

                if (resRole.statusText === 'OK') {
                    alert(`Admin yaratildi`)
                } else {
                    alert("Admin yaratilmadi iltimos qayta urinib ko'ring")
                }

            }

        } catch (err) {
            setError('Nimadir xato ketdi! Iltimos, qayta urinib koʻring.');
        } finally {
            setLoading(false);
            setValue({
                userName: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        }
    };

    return (
        <div className='w-full h-full flex items-center justify-center px-10'>
            <div className='max-w-4xl mx-auto w-full shadow flex flex-col items-center justify-center py-4 px-10 rounded-lg'>
                <div>
                    <FaUserPlus className='text-7xl' />
                </div>
                <div className='w-full'>
                    <form
                        action=""
                        className='w-full flex flex-wrap items-center justify-between gap-3.5'
                        onSubmit={handleSubmit}
                    >
                        <InputField
                            label="User Name"
                            type="text"
                            name="userName"
                            value={value.userName}
                            onChange={handleOnChange}
                            placeholder="Admin nomi"
                            required
                        />
                        <InputField
                            label="Admin ismi"
                            type="text"
                            name="firstName"
                            value={value.firstName}
                            onChange={handleOnChange}
                            placeholder="Admin ismi"
                            required
                        />
                        <InputField
                            label="Admin familyasi"
                            type="text"
                            name="lastName"
                            value={value.lastName}
                            onChange={handleOnChange}
                            placeholder="Admin familyasi"
                            required
                        />
                        <InputField
                            label="Admin telefon raqami"
                            type="text"
                            name="phoneNumber"
                            value={value.phoneNumber}
                            onChange={handleOnChange}
                            placeholder="Admin Telefon raqami"
                            required
                        />
                        <InputField
                            label="Admin Email"
                            type="email"
                            name="email"
                            value={value.email}
                            onChange={handleOnChange}
                            placeholder="Admin Email"
                            required
                        />
                        <InputField
                            label="Parol"
                            type={isPassword ? 'text' : 'password'}
                            name="password"
                            value={value.password}
                            onChange={handleOnChange}
                            placeholder="Parolingizni kiriting"
                            required
                            showPasswordToggle={isPassword}
                            togglePasswordVisibility={() => setIsPassword(prev => !prev)}
                        />
                        <InputField
                            label="Parolni qayta kiriting"
                            type={isConfirmPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            value={value.confirmPassword}
                            onChange={handleOnChange}
                            placeholder="Parolni qayta kiriting"
                            required
                            showPasswordToggle={isConfirmPassword}
                            togglePasswordVisibility={() => setIsConfirmPassword(prev => !prev)}
                        />
                    </form>
                    <button
                        className='bg-primary hover:bg-secound text-white px-6 py-2 mx-auto max-w-[250px] w-full block mt-10 text-xl font-medium cursor-pointer rounded-2xl'
                        onClick={handleSubmit}
                    >
                        {loading ? 'Admin yaratilmoqda...' : 'Admin yaratish'}
                    </button>
                    {error && <div className="text-red-500 mt-4">{error}</div>}
                </div>
            </div>
        </div>
    );
}

export default CreateAdmin;
