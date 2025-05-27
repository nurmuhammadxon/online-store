import { useEffect, useState } from "react";
import axios from "axios";

const AdminList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchUsers = async () => {
        setLoading(true);
        setError("");
        try {
            const res = await axios.get("http://165.232.87.222:5000/api/Users/GetAll");
            const filtered = res.data.data.users.filter(user => user.role === 0);
            setUsers(filtered || []);

        } catch (err) {
            setError("Adminlarni olishda xatolik: " + err.message);
        } finally {
            setLoading(false);
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
        <div className="p-6 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Foydalanuvchilar roʻyxati</h2>

            {loading && <p className="text-blue-500 text-center">Yuklanmoqda...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}

            {!loading && users.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2 border">#</th>
                                <th className="p-2 border">Foydalanuvchi nomi</th>
                                <th className="p-2 border">Email</th>
                                <th className="p-2 border">Rol</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, idx) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="p-2 border text-center">{idx + 1}</td>
                                    <td className="p-2 border">{user.userName}</td>
                                    <td className="p-2 border">{user.email}</td>
                                    <td className="p-2 border text-center">{getRoleName(user)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                !loading && <p className="text-center text-gray-500">Adminlar topilmadi.</p>
            )}
        </div>
    );
};

export default AdminList;
