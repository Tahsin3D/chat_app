import { Button, Stack, Typography } from "@mui/material";
import { useAuthStore } from "../store/useAuthStore";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

const Navbar = () => {
  const { color, logout } = useAuthStore();
  return (
    <Stack
      direction="row"
      sx={{
        height: "50px",
        backgroundColor: color,
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 30px",
      }}
    >
      <Button component={Link} to="/">
        <Stack
          direction="row"
          sx={{ display: "flex", alignItems: "center", gap: "3px" }}
        >
          <ChatBubbleOutlineIcon
            sx={{ fill: "white", fontWeight: "bold", fontSize: "32px" }}
          />
          <Typography
            color="white"
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "16px" }}
          >
            Chat App
          </Typography>
        </Stack>
      </Button>
      <Stack direction='row'>
        <Button component={Link} to="/profile">
          <Stack
            direction="row"
            sx={{ display: "flex", alignItems: "center", gap: "3px" }}
          >
            <Person2Icon
              sx={{ fill: "white", fontWeight: "bold", fontSize: "32px" }}
            />
            <Typography
              color="white"
              variant="body1"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              Profile
            </Typography>
          </Stack>
        </Button>
        <Button onClick={logout}>
          <Stack
            direction="row"
            sx={{ display: "flex", alignItems: "center", gap: "3px" }}
          >
            <LogoutIcon
              sx={{ fill: "white", fontWeight: "bold", fontSize: "32px" }}
            />
            <Typography
              color="white"
              variant="body1"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              Logout
            </Typography>
          </Stack>
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
