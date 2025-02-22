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

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn, color } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
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
          {/* Other Page Link Side */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { md: "flex", xs: "none" }, width: "100%" }}
          >
            <Box
              sx={{
                backgroundColor: color,
                width: "100%",
                height: "100%",
                borderRadius: "0 5% 5% 0 ",
                display: { md: "flex", xs: "none" },
                justifyContent: "flex-start",
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
                <Typography
                  color="black"
                  mt="50px"
                  variant="body2"
                  fontSize="1.2rem"
                >
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
          {/* Form Side */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                padding: { xs: "40px 0", md: "0 70px" },
                display: "flex",
                alignItems: { md: "center", xs: "start" },
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
                  gap: "40px",
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
                  <Typography color="gray" variant="body2" fontSize="1.2rem">
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
                    disabled={isLoggingIn}
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
                    {isLoggingIn ? (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          fontSize: "1.2rem",
                          gap: "15px",
                          color: "white",
                        }}
                      >
                        <CircularProgress
                          sx={{
                            height: "5px",
                            display: "inline-block",
                            color: "white",
                          }}
                        />{" "}
                        Loading...
                      </Box>
                    ) : (
                      "Login"
                    )}
                  </Button>
                </form>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <Stack direction="row" gap="10px">
                    <Typography variant="span">
                      Don't have an account?
                    </Typography>
                    <Link to="/signup">SignUp</Link>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LoginPage;
