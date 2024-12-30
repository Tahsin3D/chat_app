import { Box } from "@mui/material";
import { useAuthStore } from "../store/useAuthStore"

const ProfilePage = () => {
  const {authUser, isUpdatingProfile, updateProfile} = useAuthStore();

  const handleImgUpload = async (e) => {
    
  }
  
  return (
    <Box>
      
    </Box>
  )
}

export default ProfilePage