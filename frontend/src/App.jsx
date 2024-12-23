import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Navbar from "./components/Navbar.jsx";
import { useAuthStore } from "./store/useAuthStore.js";
import { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);


  if (isCheckingAuth && !authUser)
    return (
      <Box sx={{width: '100%', display: 'flex', height: '100vh',}}>
        <CircularProgress sx={{margin: "auto"}}/>
      </Box>
    );
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={authUser? <HomePage />: <Navigate to="/login"/>} />
        <Route path="/signup" element={!authUser? <SignUpPage />: <Navigate to="/"/>} />
        <Route path="/login" element={!authUser? <LoginPage />: <Navigate to="/"/>} />
        <Route path="/setting" element={authUser? <SettingsPage />: <Navigate to='/login' />} />
        <Route path="/profile" element={authUser? <ProfilePage />: <Navigate to="/login"/>} />
      </Routes>
    </>
  );
};

export default App;
