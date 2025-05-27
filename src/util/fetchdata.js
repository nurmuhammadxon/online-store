import axios from "axios";

export const fetchData = async (
    api,
    dataName,
    setData,
    setError,
    setLoading
) => {
    try {
        if (setLoading) setLoading(true);
        const res = await axios.get(`http://165.232.87.222:5000/api/${api}`);
        setData(res.data.data[dataName]);
    } catch (error) {
        if (setError) setError("Ma'lumotni olishda xatolik yuz berdi: " + error.message);
    } finally {
        if (setLoading) setLoading(false);
    }
};
