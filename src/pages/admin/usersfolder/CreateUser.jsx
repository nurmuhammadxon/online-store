import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// axios import qilish
import axios from 'axios';

// icons
import { FaUserPlus } from "react-icons/fa6";

// componetns
import InputField from '../../../components/InputField';

function CreateUser() {
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
        role: 1,
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
            const response = await axios.post('https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/api/Users/Insert', value);

            if (response.statusText === 'OK') {
                alert('User yaratildi')
            } else {
                alert("User yaratilmadi iltimos qayta urinib ko'ring")
            }

        } catch (err) {
            setError('Nimadir xato ketdi! Iltimos, qayta urinib koʻring.');
        } finally {
            setLoading(false);
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
                            placeholder="User nomi"
                            required
                        />
                        <InputField
                            label="User ismi"
                            type="text"
                            name="firstName"
                            value={value.firstName}
                            onChange={handleOnChange}
                            placeholder="User ismi"
                            required
                        />
                        <InputField
                            label="User familyasi"
                            type="text"
                            name="lastName"
                            value={value.lastName}
                            onChange={handleOnChange}
                            placeholder="User familyasi"
                            required
                        />
                        <InputField
                            label="User telefon raqami"
                            type="text"
                            name="phoneNumber"
                            value={value.phoneNumber}
                            onChange={handleOnChange}
                            placeholder="User Telefon raqami"
                            required
                        />
                        <InputField
                            label="User Email"
                            type="email"
                            name="email"
                            value={value.email}
                            onChange={handleOnChange}
                            placeholder="User Email"
                            required
                        />
                        <InputField
                            label="Parol"
                            type={isPassword ? 'text' : 'password'}
                            name="password"
                            value={value.password}
                            onChange={handleOnChange}
                            placeholder="Parolni kiriting"
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
                        {loading ? 'User yaratilmoqda...' : 'User yaratish'}
                    </button>
                    {error && <div className="text-red-500 mt-4">{error}</div>}
                </div>
            </div>
        </div>
    );
}

export default CreateUser;
