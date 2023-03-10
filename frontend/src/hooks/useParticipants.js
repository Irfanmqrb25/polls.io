import useSWR from "swr";
import axios from "axios";

export default function useParticipant(code, token) {
    const fetcher = async (url) => {
        try {
            const res = await axios.get(url, {
                headers: { 'Authorization': `Bearer ${token}` },
            });
            return res.data;
        } catch (error) {
            throw error.response.data;
        }
    };

    const { data, mutate, error } = useSWR(code ? `http://localhost:5000/api/participant/participants/${code}` : null, fetcher);

    return {
        data,
        error,
        mutate,
        isLoading: !error && !data,
    };
}
