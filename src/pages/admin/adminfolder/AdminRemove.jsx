import { useState, useEffect } from "react";
import axios from "axios";

const AdminRemove = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchUsers = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await axios.get("http://165.232.87.222:5000/api/Users/GetAll");
            const users = response.data.data.users.filter(user => user.role === 0);
            setUsers(users || [])
        } catch (err) {
            setError("Foydalanuvchilarni yuklashda xatolik: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    const deleteUser = async (id) => {
        const userToDelete = users.find(user => user.id === id);

        if (userToDelete && userToDelete.userName === "superadmin") {
            alert("Superadminni o'chirish mumkin emas!");
            return;
        }

        const confirmDelete = window.confirm("Haqiqatan ham o'chirmoqchimisiz?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://165.232.87.222:5000/api/Users/Delete/${id}`);
            fetchUsers()
        } catch (err) {
            setError("O'chirishda xatolik: ");
        }
    };

    const getRoleName = (user) => {
        if (user.role === 0) {
            return user.userName === "superadmin" ? "Super Admin" : "Admin";
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-primary">
                Foydalanuvchilar ro‘yxati
            </h1>

            {loading && <p className="text-center text-blue-500">Yuklanmoqda...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {!loading && users.length === 0 && (
                <p className="text-center text-gray-500">Foydalanuvchilar mavjud emas.</p>
            )}

            {!loading && users.length > 0 && (
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3 border">#</th>
                                <th className="p-3 border">Foydalanuvchi nomi</th>
                                <th className="p-3 border">Email</th>
                                <th className="p-3 border">Rol</th>
                                <th className="p-3 border">Amal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, idx) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="p-3 border text-center">{idx + 1}</td>
                                    <td className="p-3 border">{user.userName}</td>
                                    <td className="p-3 border">{user.email}</td>
                                    <td className="p-3 border text-center">{getRoleName(user)}</td>
                                    <td className="p-3 border text-center">
                                        <button
                                            onClick={() => deleteUser(user.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition"
                                        >
                                            O‘chirish
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminRemove;
