import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import {
  Box,
  Button,
  Grid,
  Grid2,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp, color } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Grid container sx={{ height: "calc(100vh - 80px)" }}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            height: "100%",
            padding: "0 70px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              // backgroundColor: "red",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "40px",
            }}
          >
            <Box>
              <ChatBubbleOutlineIcon
                sx={{
                  fontSize: "6rem",
                  backgroundColor: color,
                  color: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              />
              <Typography variant="h2" fontSize="3.5rem" fontWeight="bold">
                Create Account
              </Typography>
              <Typography variant="body2" fontSize="1.4rem">
                Get started with your free account
              </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <TextField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                fullWidth
                margin="normal"
                required
              />

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
                  width: "220px",
                  padding: '10px 20px',
                  fontSize: "1.4rem",
                  borderRadius: "10px",
                  mt: "50px"
                }}
              >
                SIGN UP
              </Button>
            </form>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            backgroundColor: color,
            height: "100%",
            borderRadius: "5% 0 0 5%",
          }}
        >
          <Box
            sx={{
              color: "white",
              padding: "70px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography
              variant="h2"
              textAlign="center"
              fontSize="3.5rem"
              fontWeight="bold"
            >
              Already have an account?
            </Typography>
            <Typography marginTop="50px" variant="body2" fontSize="1.4rem">
              Login to stay connected to your friends
            </Typography>
            <Button
                sx={{
                  backgroundColor: color,
                  color: "white",
                  border: "1px solid white",
                  width: "220px",
                  padding: '10px 20px',
                  fontSize: "1.4rem",
                  borderRadius: "10px",
                  mt: "50px"
                }}
              >
                LOGIN
              </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
