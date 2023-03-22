import useSWR from "swr";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useVote(code, token) {
    const navigate = useNavigate();
    const fetcher = async (url) => {
        try {
            const res = await axios.get(url, {
                headers: { 'Authorization': `Bearer ${token}` },
            });
            return res.data;
        } catch (error) {
            if (error.response && error.response.status === 403) {
                navigate('/dashboard');
            }
            throw error.response.data;
        }
    };

    const { data, mutate, error } = useSWR(code ? `http://localhost:5000/api/vote/votes/${code}` : null, fetcher);

    return {
        data,
        error,
        mutate,
        isLoading: !error && !data,
    };
}




