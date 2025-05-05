import axios from "axios";

export const fetchData = async (
    api,
    dataName,
    setData,
    setError = false,
    setLoading = false
) => {
    try {
        const res = await axios.get(`https://techstationapi-epe0ggbffchncbbc.canadacentral-01.azurewebsites.net/api/${api}`);
        setData(res.data.data[dataName]);
    } catch (error) {
        setError('Ma\'lumotni olishda xatolik yuz berdi: ' + error.message);
    } finally {
        setLoading(false);
    }
}