import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import { useAuthStore } from "../store/useAuthStore";
import Navbar from "../components/Navbar.jsx";
import MissingPP from "../assets/avatar.png";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useEffect, useRef, useState } from "react";

const ProfilePage = () => {
  const fileInputRef = useRef();
  const [selectedImage, setSelectedImage] = useState(null);

  const {
    authUser,
    isUpdatingProfile,
    updateProfile,
    color,
    checkAuth,
    isCheckingAuth,
  } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const handleImageUpload = async (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      await updateProfile({profilePic: base64Image})
    }
    
  };

  if (isCheckingAuth && !authUser) {
    return (
      <Box sx={{ width: "100%", display: "flex", height: "100vh" }}>
        <CircularProgress sx={{ margin: "auto" }} />
      </Box>
    );
  }
  return (
    <Box>
      <Navbar />
      <Box
        width="100vw"
        sx={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <Box
          sx={{
            backgroundColor: color,
            color: "white",
            textAlign: "center",
            minWidth: "150px",
            width: "500px",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography variant="h2" fontSize="24px" fontWeight="bold">
              Profile
            </Typography>
            <Typography variant="body1" fontSize="16px">
              Your profile information
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box width="100px" height="100px" sx={{ position: "relative", overflow: "none", borderRadius: "50%" }}>
              <img style={{objectFit: 'cover', height: "100%", width: "100%", objectPosition: "center",borderRadius: "50%"}}  src={selectedImage || authUser.profilePic || MissingPP} alt="profile picture" />
              <IconButton
                onClick={()=>{
                  if(fileInputRef.current)
                  {
                    fileInputRef.current.click();
                  }
                }}
                sx={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  backgroundColor: "white",
                  color: "black",
                  padding: "4px",
                  fontSize: "32px",
                  borderRadius: "50%",
                  "&:hover" : {
                    color: "white",
                    backgroundColor: "gray"
                  }
                }}
              >
                <CameraAltIcon />
                <input
                  ref={fileInputRef}
                  type="file"
                  id="avatar-upload"
                  style={{display: "none"}}
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </IconButton>
            </Box>
            <Typography variant="body1" fontSize="16px">
              {isUpdatingProfile
                ? "Uploading..."
                : "Click the camera icon to update your photo"}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: "20px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                variant="body2"
                color="white"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <PersonOutlineIcon fontSize="small" />
                Full Name
              </Typography>
              <Typography
                sx={{
                  padding: "8px 16px",
                  borderRadius: 1,
                  border: "1px solid white",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
              >
                {authUser?.fullName || "N/A"}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <AlternateEmailIcon fontSize="small" />
                Email Address
              </Typography>
              <Typography
                sx={{
                  padding: "8px 16px",
                  borderRadius: 1,
                  border: "1px solid white",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
              >
                {authUser?.email || "N/A"}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mt: "20px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "medium", textAlign: "left" }}
            >
              Account Information:
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                fontSize: "0.875rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid",
                  paddingY: 1,
                }}
              >
                <Typography>Member Since</Typography>
                <Typography>{authUser.createdAt?.split("T")[0]}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingY: 1,
                }}
              >
                <Typography>Account Status</Typography>
                <Typography sx={{ color: "blue" }}>Active</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
