import React, { useState } from 'react';
import axios from 'axios';
import { FaUserPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { InputField } from '../../components';

function SignUp() {
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    const { name, value: val } = e.target;
    setValue(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const insertRes = await axios.post(
        'https://165.232.87.222/api/Users/Insert',
        {
          userName: value.userName,
          firstName: value.firstName,
          lastName: value.lastName,
          phoneNumber: value.phoneNumber,
          email: value.email,
          password: value.password,

        },
        { headers: { 'Content-Type': 'application/json' } }
      )

    } catch (err) {
      console.error('Xatolik:', err.response?.data);
      setError('Xatolik yuz berdi: ' + (err.response?.data?.message || err.message));
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
    <div className='w-full h-full flex items-center justify-center py-5'>
      <div className='max-w-4xl w-full shadow flex flex-col items-center justify-center py-4 px-10 rounded-lg'>
        <FaUserPlus className='text-7xl mb-4' />
        <form
          className='w-full flex flex-wrap items-center justify-between gap-2'
          onSubmit={handleSubmit}
        >
          <InputField
            label="User Name"
            type="text"
            name="userName"
            value={value.userName}
            onChange={handleOnChange}
            placeholder="Foydalanuvchi nomi"
            required
          />
          <InputField
            label="Foydalanuvchi ismi"
            type="text"
            name="firstName"
            value={value.firstName}
            onChange={handleOnChange}
            placeholder="Foydalanuvchi ismi"
            required
          />
          <InputField
            label="Foydalanuvchi familyasi"
            type="text"
            name="lastName"
            value={value.lastName}
            onChange={handleOnChange}
            placeholder="Foydalanuvchi familyasi"
            required
          />
          <InputField
            label="Foydalanuvchi telefon raqami"
            type="text"
            name="phoneNumber"
            value={value.phoneNumber}
            onChange={handleOnChange}
            placeholder="Telefon raqamini kiriting"
            required
          />
          <InputField
            label="Foydalanuvchi Email"
            type="email"
            name="email"
            value={value.email}
            onChange={handleOnChange}
            placeholder="Emailingizni kiriting"
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
          type="submit"
          className='bg-primary hover:bg-secound text-white px-6 py-2 mx-auto max-w-[250px] w-full block mt-5 text-xl font-medium cursor-pointer rounded-2xl'
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? 'Hisob yaratilmoqda...' : 'Hisob yaratish'}
        </button>

        {error && <div className="text-red-500 mt-4">{error}</div>}
        <div className='w-full'>
          <p className='mt-4 text-lg text-start'>
            <Link
              className='text-primary hover:text-textColorSecound hover:underline'
              to='/signin'
            >
              Hisobga kirish
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
