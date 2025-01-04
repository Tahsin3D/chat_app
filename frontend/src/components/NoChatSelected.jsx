import { Box, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useAuthStore } from "../store/useAuthStore";

const NoChatSelected = () => {
  const { color } = useAuthStore();
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "12px"
      }}
    >
      <ChatBubbleOutlineIcon
        sx={{ fill: color, fontWeight: "bold", fontSize: "54px" }}
      />
      <Typography variant="h4">Welcome to Chat App!</Typography>
      <Typography variant="body1">
        Select a conversation from the sidebar to chat with.
      </Typography>
    </Box>
  );
};

export default NoChatSelected;
