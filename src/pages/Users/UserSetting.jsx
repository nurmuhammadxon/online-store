import React, { useEffect, useState } from 'react';
import axios from 'axios';

// icons
import { FaUserCircle } from 'react-icons/fa';
import { CiLogout } from 'react-icons/ci';

// hook
import { useAuth } from '../../hooks/useAuth';

function UserSetting() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { handleLogout } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = JSON.parse(sessionStorage.getItem('user')).id;
        const response = await axios.get(`http://165.232.87.222:5000/api/Users/GetById/${userId}`);
        setUser(response.data.data);
      } catch (error) {
        console.error("Foydalanuvchi ma'lumotlarini olishda xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-lg font-medium text-blue-600">Ma'lumotlar yuklanmoqda...</div>;
  }

  if (!user) {
    return <div className="text-center mt-10 text-red-600">Foydalanuvchi topilmadi.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto px-8 py-4 bg-white shadow-xl rounded-2xl border border-gray-200">
      <div className="flex flex-col items-center space-y-4">
        <FaUserCircle className="w-24 h-24 text-blue-500" />
        <h2 className="text-2xl font-bold text-gray-800">
          {user.firstName} {user.lastName}
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 overflow-x-auto">
        <div>
          <p className="text-sm text-gray-500">Ism</p>
          <p className="text-base font-medium text-gray-800">{user.firstName}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Familiya</p>
          <p className="text-base font-medium text-gray-800">{user.lastName}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Username</p>
          <p className="text-base font-medium text-gray-800">{user.userName}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="text-base font-medium text-gray-800">{user.email}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Telefon raqam</p>
          <p className="text-base font-medium text-gray-800">{user.phoneNumber}</p>
        </div>
      </div>

      <div className='flex justify-end'>
        <button
          className="mt-6 text-strongBlue hover:text-red-500 transition-colors duration-300 ease-in-out cursor-pointer font-medium text-lg flex items-center gap-1.5 p-2 rounded-lg border border-gray-300 hover:bg-gray-100"
          onClick={handleLogout}
        >
          <CiLogout className="text-xl" />
          <span>Chiqish</span>
        </button>
      </div>
    </div>
  );
}

export default UserSetting;
