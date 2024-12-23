import { Box, Button, Stack, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useAuthStore } from "../store/useAuthStore";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Navbar = () => {
  const { color } = useAuthStore();
  return (
    <Stack
      direction="row"
      sx={{
        height: "70px",
        backgroundColor: color,
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 30px",
      }}
    >
      <Button>
        <Stack
          direction="row"
          sx={{ display: "flex", alignItems: "center", gap: "3px" }}
        >
          <ChatBubbleOutlineIcon
            sx={{ fill: "white", fontWeight: "bold", fontSize: "2rem" }}
          />
          <Typography
            color="white"
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "1.4rem" }}
          >
            Chat App
          </Typography>
        </Stack>
      </Button>
      <Button>
        <Stack
          direction="row"
          sx={{ display: "flex", alignItems: "center", gap: "3px" }}
        >
          <SettingsIcon sx={{ fill: "white", fontWeight: "bold", fontSize: "2rem" }}/>
          <Typography color="white" variant="body1" sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
            Settings
          </Typography>
        </Stack>
      </Button>
    </Stack>
  );
};

export default Navbar;
