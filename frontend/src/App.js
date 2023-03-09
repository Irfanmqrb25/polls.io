import LandingPage from "./Pages/LandingPage";
import DashboardPage from "./Pages/DashboardPage";
import { LoginPage } from "./Pages/LoginPage";
import { RegisterPage } from "./Pages/RegisterPage";
import { Route, Routes } from "react-router-dom";
import { CreateVotePage } from "./Pages/CreateVotePage";
import { JoinRoomPage } from "./Pages/JoinRoomPage";
import RoomPage from "./Pages/RoomPage";
import { useAuthContext } from "./hooks/useAuthContext";
import { RestrictedPage } from "./Pages/RestrictedPage";
import 'react-toastify/dist/ReactToastify.css';
import DetailPage from "./Pages/DetailPage";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/auth/signup' element={<RegisterPage />} />
        <Route path='/auth/login' element={<LoginPage />} />
        <Route path='/dashboard' element={user ? <DashboardPage /> : <RestrictedPage />} />
        <Route path='/create-vote' element={user ? <CreateVotePage /> : <RestrictedPage />} />
        <Route path='/room' element={user ? <JoinRoomPage /> : <RestrictedPage />} />
        <Route path='/room/:code' element={user ? <RoomPage /> : <RestrictedPage />} />
        <Route path='/vote/:code' element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
