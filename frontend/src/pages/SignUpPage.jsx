import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
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
    <Box sx={{ display: "flex", height: "100vh", alignItems: "center" }}>
      <Grid container sx={{ height: "calc(100vh - 20px)" }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "100%",
              padding: "0 70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start"
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                maxWidth: "450px"
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
                  color={color}
                  variant="h2"
                  fontSize="2.5rem"
                  fontWeight="bold"
                >
                  Create Account
                </Typography>
                <Typography variant="body2" fontSize="1.2rem">
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
                    width: "200px",
                    padding: "10px 20px",
                    fontSize: "1.2rem",
                    borderRadius: "10px",
                    mt: "50px",
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
              display: "flex",
              justifyContent: "flex-end"
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
                Already have an account?
              </Typography>
              <Typography marginTop="50px" variant="body2" fontSize="1.2rem">
                Login to stay connected to your friends
              </Typography>
              <Button
                component={Link}
                to="/login"
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
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUpPage;
