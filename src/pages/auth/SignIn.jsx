import axios from 'axios'
import React, { useEffect, useState } from 'react'
// icons
import { FaRegUserCircle } from "react-icons/fa"
import { Link, useNavigate } from 'react-router-dom'
// componetns 
import { InputField } from '../../components'
// hooks
import { useAuthTimeout } from '../../hooks/useAuthTimeout'

function SignIn() {
    const [isPassword, setIsPassword] = useState(false)
    const [value, setValue] = useState({ userName: '', password: '' })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useAuthTimeout()

    useEffect(() => {
        const isAuth = sessionStorage.getItem('auth');
        if (isAuth) {
            navigate('/');
        }
    }, []);

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setValue((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            const resToken = await axios.post('http://165.232.87.222:5000/api/Auth/Post/authenticate',
                {
                    userName: value.userName,
                    password: value.password
                },
                { headers: { 'Content-Type': 'application/json' } }
            )

            if (resToken.statusText === 'OK') {
                const users = await axios.get('http://165.232.87.222:5000/api/Users/GetAll')

                const foundUser = users.data.data.users.find(user => user.userName === value.userName && user.password === value.password)

                // role
                if (foundUser) {
                    const role = foundUser.role === 1
                        ? (foundUser.userName === 'superadmin' || foundUser.userName === "superAdmin" ? 'superAdmin' : 'admin')
                        : 'user';

                    sessionStorage.setItem('auth', true);
                    sessionStorage.setItem('role', role);
                    sessionStorage.setItem('user', JSON.stringify(foundUser));

                    if (role === 'admin') navigate('/admin/panel');
                    else if (role === 'superAdmin') navigate('/admin/super-admin');
                    else navigate('/');
                }
            } else {
                setError("Email yoki parol noto‘g‘ri.")
            }

        } catch (err) {
            setError("Tizimda xatolik: ")
        } finally {
            setLoading(false)
            setValue({ userName: '', password: '' })
        }
    }

    return (
        <div className='w-full h-full flex items-center justify-center py-5'>
            <div className='max-w-md w-full shadow flex flex-col items-center justify-center py-4 px-10 rounded-lg'>
                <div>
                    <FaRegUserCircle className='text-7xl' />
                </div>
                <div className='pt-6 w-full'>
                    <form className='w-full' onSubmit={handleSubmit}>

                        <InputField
                            label="UserName:"
                            type="text"
                            name="userName"
                            value={value.userName}
                            onChange={handleOnChange}
                            placeholder="Emailingizni kiriting"
                            required
                        />

                        <InputField
                            label="Parol:"
                            type={isPassword ? 'text' : 'password'}
                            name="password"
                            value={value.password}
                            onChange={handleOnChange}
                            placeholder="Parolingizni kiriting"
                            required
                            showPasswordToggle={isPassword}
                            togglePasswordVisibility={() => setIsPassword(prev => !prev)}
                        />

                        {/* <label className='flex justify-end w-full pt-2'>
                            <Link
                                to='/forgot-password'
                                className='text-base text-primary hover:text-textColorSecound hover:underline transition-all duration-300 ease-in-out'
                            >
                                Parolingizni unutdingizmi?
                            </Link>
                        </label> */}

                        {error && (
                            <div className='text-red-600 text-center mt-4'>{error}</div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className={`bg-primary hover:bg-secound text-white px-6 py-2 mx-auto max-w-[150px] w-full block mt-10 text-xl font-medium cursor-pointer rounded-2xl ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Kirilmoqda...' : 'Kirish'}
                        </button>
                    </form>

                    <div className='mt-14 w-full flex justify-start'>
                        <p className='text-lg font-normal'>
                            Hisobingiz yo'qmi? <Link
                                className='text-primary hover:text-textColorSecound hover:underline transition-all'
                                to='/signup'
                            >
                                Hisob yaratish
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
