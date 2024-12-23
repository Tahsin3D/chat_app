import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { signup, isSigningUp, color } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Box sx={{ display: "flex", height: "100vh", alignItems: "center" }}>
      <Grid
        container
        sx={{
          height: "calc(100vh - 20px)",
          // backgroundColor: "red",
          // display: "flex",
          alignItems: "center",
          // justifyContent: "center"
        }}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: color,
              height: "100%",
              borderRadius: "0 5% 5% 0 ",
              display: { md: "flex", xs: "none" },
            }}
          >
            <Box
              sx={{
                color: "white",
                padding: "70px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                maxWidth: "550px",
              }}
            >
              <Typography
                variant="h2"
                textAlign="center"
                fontSize="2.5rem"
                fontWeight="bold"
              >
                Don't have an account?
              </Typography>
              <Typography mt="20px" variant="body2" fontSize="1.2rem">
                Make a new account to get connected to your friends
              </Typography>
              <Button
                component={Link}
                to="/signup"
                sx={{
                  backgroundColor: color,
                  color: "white",
                  border: "1px solid white",
                  width: "200px",
                  padding: "10px 20px",
                  fontSize: "1.2rem",
                  borderRadius: "10px",
                  mt: "50px",
                }}
              >
                SIGN UP
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "100%",
              padding: { md: "0", lg: "0 70px" },
              display: "flex",
              alignItems: "center",
              justifyContent: { lg: "flex-end", xs: "center" },
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                maxWidth: "450px",
              }}
            >
              <Box>
                <ChatBubbleOutlineIcon
                  sx={{
                    fontSize: "4rem",
                    backgroundColor: color,
                    color: "white",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                />
                <Typography
                  mb="10px"
                  color={color}
                  variant="h2"
                  fontSize="2.5rem"
                  fontWeight="bold"
                >
                  Sign In
                </Typography>
                <Typography variant="body2" fontSize="1.2rem">
                  Please verify yourself to go to your account
                </Typography>
              </Box>
              <form onSubmit={handleSubmit}>
                {/* Email */}
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  fullWidth
                  margin="normal"
                  required
                />

                {/* Password */}
                <TextField
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  fullWidth
                  margin="normal"
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                        >
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                {/* Signup Button */}
                <Button
                  sx={{
                    backgroundColor: color,
                    color: "white",
                    border: "1px solid white",
                    width: "200px",
                    padding: "10px 20px",
                    fontSize: "1.2rem",
                    borderRadius: "10px",
                    mt: "50px",
                  }}
                >
                  LOGIN
                </Button>
              </form>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <Stack direction="row" gap="10px">
                  <Typography variant="span">Don't have an account?</Typography>
                  <Link to="/signup">SignUp</Link>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
