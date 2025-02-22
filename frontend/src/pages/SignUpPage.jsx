import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
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
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp, color } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full Name is required!");
    if (!formData.email.trim()) return toast.error("Email is required!");
    if (!formData.password) return toast.error("Password is required!");
    if (formData.password.length < 6) return toast.error("Password must be least 6 characters!");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format!");

    return true;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataValidated = validateForm();
    if(dataValidated) signup(formData);
  };
  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: "white",
        display: "flex",
        height: { xs: "calc(100vh-50px)", md: "100vh" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
          alignItems: "center",
          width: "100%",
          maxWidth: "1920px",
          margin: "0 auto",
          backgroundColor: "white",
        }}
      >
        <Grid
          container
          sx={{
            height: "calc(100% - 20px)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Form Side */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                padding: { xs: "40px 0", md: "0 70px" },
                display: "flex",
                alignItems: "center",
                justifyContent: { lg: "flex-start", xs: "center" },
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                  maxWidth: "450px",
                  alignItems: "center",
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
                  <Typography color="gray" variant="body2" fontSize="1.2rem">
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
                            {!showPassword ? (
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
                    type="submit"
                    disabled={isSigningUp}
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
                    {isSigningUp ? (
                      <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "1.2rem", gap: "15px", color: "white"}}>
                        <CircularProgress sx={{height: "5px", display: "inline-block",color: "white"}}/> Loading...
                      </Box>
                    ) : (
                      "Sign Up"
                    )}
                  </Button>
                </form>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <Stack direction="row" gap="10px">
                    <Typography variant="span">
                      Don't have an account?
                    </Typography>
                    <Link to="/login">LogIn</Link>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Grid>
          {/* Other Page Link Side */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: color,
                height: "100%",
                borderRadius: "5% 0 0 5%",
                display: { md: "flex", xs: "none" },
                justifyContent: "flex-end",
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
                <Typography
                  color="black"
                  marginTop="50px"
                  variant="body2"
                  fontSize="1.2rem"
                >
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
    </Box>
  );
};

export default SignUpPage;
