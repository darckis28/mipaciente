import { useState } from "react";
import getDatos from "../assets/services/person";
const usePerson = ({ dni }) => {
    const [state, setState] = useState(null);
    const [error, setError] = useState("");

    const getPerson = async (e) => {
        e.preventDefault();
        try {
            const person = await getDatos(dni)
            if (typeof (person) === 'string') {
                throw new Error(person);
            }
            setError('');
            return setState(person);
        } catch (error) {
            setError(error.message)
        }
    }

    return {
        error,
        state,
        getPerson
    }
};
export default usePerson;