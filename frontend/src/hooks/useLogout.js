import { toast } from "react-toastify";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();

    const logout = () => {
        //remove user from local storage
        localStorage.removeItem('user');

        //dispatch logout action
        dispatch({ type: 'LOGOUT' });

        navigate('/auth/login')
        setTimeout(() => {
            toast.success('You has been logged out')
        }, 100);
    }
    return { logout }
}