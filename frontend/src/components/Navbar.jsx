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
        // backgroundColor: color,
        color: "white",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button>
        <Stack direction="row">
          <ChatBubbleOutlineIcon sx={{fill: "white"}}/>
          <Typography color="white" variant="body1">
            Settings
          </Typography>
        </Stack>
      </Button>
      <Button>
        <Stack direction="row">
          <SettingsIcon sx={{ fill: "white" }} />
          <Typography color="white" variant="body1">
            Settings
          </Typography>
        </Stack>
      </Button>
    </Stack>
  );
};

export default Navbar;
