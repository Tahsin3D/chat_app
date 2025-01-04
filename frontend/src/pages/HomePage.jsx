import { Box, Grid, Paper } from '@mui/material';
import Navbar from '../components/Navbar.jsx';
import { useChatStore } from '../store/useChatStore.js';
import Sidebar from '../components/Sidebar.jsx';
import ChatContainer from '../components/ChatContainer.jsx';
import NoChatSelected from '../components/NoChatSelected.jsx';

const HomePage = () => {
  const { selectedUser } = useChatStore();
  return (
    <div>
      <Navbar/>
      <Box 
      sx={{
        height: "100vh-50px",
        // backgroundColor: "background.default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box 
        sx={{
          width: "100%",
          maxWidth: "1440px",
          height: "calc(100vh - 50px)",
          overflow: "hidden",
        }}
      >
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={3}>
              <Sidebar />
          </Grid>
          <Grid item xs={9}>
              {selectedUser ? <ChatContainer /> : <NoChatSelected />}
          </Grid>
        </Grid>
      </Box>
    </Box>
    </div>
  )
}

export default HomePage
