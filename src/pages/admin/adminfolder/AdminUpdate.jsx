import { useState, useEffect } from "react";
import axios from "axios";
import { InputField } from "../../../components";

const AdminUpdate = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isConfirmPassword, setIsConfirmPassword] = useState(false);
    const [value, setValue] = useState({
        userName: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        id: ''
    });

    const fetchUsers = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await axios.get("https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/api/Users/GetAll");
            const users = response.data.data.users.filter(user => user.role === 0 && user.userName !== 'superadmin');
            setUsers(users || []);
        } catch (err) {
            setError("Foydalanuvchilarni yuklashda xatolik: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    const openModal = (user) => {
        setValue({
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            email: user.email,
            password: '',
            confirmPassword: '',
            id: user.id
        });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValue(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const updateUser = async () => {
        try {
            await axios.put(
                `https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/api/Users/Update/${value.id}`,
                value,
                { headers: { "Content-Type": "application/json" } }
            );
            fetchUsers();
            closeModal();
        } catch (err) {
            setError("Yangilashda xatolik: " + err.message);
        } finally {
            setValue({
                userName: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                password: '',
                confirmPassword: '',
                id: ''
            })
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-primary">Foydalanuvchilar ro‘yxati</h1>

            {loading && <p className="text-center text-blue-500">Yuklanmoqda...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {!loading && users.length === 0 && (
                <p className="text-center text-gray-500">Foydalanuvchilar mavjud emas.</p>
            )}

            {!loading && users.length > 0 && (
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-3 border">#</th>
                                <th className="p-3 border">Foydalanuvchi nomi</th>
                                <th className="p-3 border">Ismi</th>
                                <th className="p-3 border">Familyasi</th>
                                <th className="p-3 border">Telefon raqami</th>
                                <th className="p-3 border">Email</th>
                                <th className="p-3 border">Amal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, idx) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="p-3 border text-center">{idx + 1}</td>
                                    <td className="p-3 border">{user.userName}</td>
                                    <td className="p-3 border">{user.firstName}</td>
                                    <td className="p-3 border">{user.lastName}</td>
                                    <td className="p-3 border">{user.phoneNumber}</td>
                                    <td className="p-3 border">{user.email}</td>
                                    <td className="p-3 border text-center">
                                        <button
                                            onClick={() => openModal(user)}
                                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded cursor-pointer"
                                        >
                                            Tahrirlash
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Modal */}
            {isModalOpen && value && (
                <div className="fixed inset-0 w-full flex items-center justify-center z-50 bg-[#00000080]">
                    <div className="bg-white p-6 rounded-md w-full max-w-lg">
                        <h2 className="text-xl font-semibold mb-4 text-center">Foydalanuvchini tahrirlash</h2>

                        <div className="grid grid-cols-2 gap-3">
                            <InputField
                                label="User Name"
                                type="text"
                                name="userName"
                                value={value.userName}
                                onChange={handleInputChange}
                                placeholder="Admin nomi"
                                required
                            />
                            <InputField
                                label="Ismi"
                                type="text"
                                name="firstName"
                                value={value.firstName || ""}
                                onChange={handleInputChange}
                                placeholder="Admin ismi"
                                required
                            />
                            <InputField
                                label="Familyasi"
                                type="text"
                                name="lastName"
                                value={value.lastName || ""}
                                onChange={handleInputChange}
                                placeholder="Admin familyasi"
                                required
                            />
                            <InputField
                                label="Telefon raqami"
                                type="text"
                                name="phoneNumber"
                                value={value.phoneNumber || ""}
                                onChange={handleInputChange}
                                placeholder="Telefon raqami"
                                required
                            />
                            <InputField
                                label="Email"
                                type="email"
                                name="email"
                                value={value.email || ""}
                                onChange={handleInputChange}
                                placeholder="Email"
                                required
                            />
                            <InputField
                                label="Parol"
                                type={isPassword ? "text" : "password"}
                                name="password"
                                value={value.password || ""}
                                onChange={handleInputChange}
                                placeholder="Parol"
                                required
                                showPasswordToggle={isPassword}
                                togglePasswordVisibility={() => setIsPassword(prev => !prev)}
                            />
                            <InputField
                                label="Parolni tasdiqlang"
                                type={isConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={value.confirmPassword || ""}
                                onChange={handleInputChange}
                                placeholder="Parolni tasdiqlang"
                                required
                                showPasswordToggle
                                togglePasswordVisibility={() => setIsConfirmPassword(prev => !prev)}
                            />
                        </div>

                        <div className="flex justify-end gap-3 mt-6">
                            <button
                                onClick={closeModal}
                                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded cursor-pointer"
                            >
                                Bekor qilish
                            </button>
                            <button
                                onClick={updateUser}
                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded cursor-pointer"
                            >
                                Saqlash
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminUpdate;
