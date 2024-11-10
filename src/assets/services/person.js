
const API_URL = "https://dniruc.apisperu.com/api/v1/dni/";
const TOKEN =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFndWlycmUyODA5MTJAZ21haWwuY29tIn0.FJGMhh8X9SrR-gCwbLL_-vjX6JbuS8KAs2D2F9JgHfE";
const getDatos = async (dni) => {
    try {
        const call = await fetch(`${API_URL}${dni}?token=${TOKEN}`);
        const data = await call.json();
        if (!data.success) {
            throw new Error("Nose encontro a la persona ingrese manualmente");
        }
        return data;
    } catch (e) {
        return e.message
    }
};
export default getDatos;