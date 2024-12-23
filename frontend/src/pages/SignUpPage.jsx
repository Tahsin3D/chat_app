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
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Grid container sx={{ height: "calc(100vh - 1.1rem)" }}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            height: "100%",
            backgroundColor: "gray",
            padding: "70px",
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Box sx={{textAlign: 'center', backgroundColor: 'red', padding: '20px'}}>
            <Box>
              <ChatBubbleOutlineIcon/>
              <Typography variant="h2" fontSize='2.4rem' fontWeight='bold'>Create Account</Typography>
              <Typography variant="body2" fontSize='1.4rem' >Get started with your free account</Typography>
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
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Signup
              </Button>
            </form>
            <Box>
              <Typography variant="span" fontSize='1.2rem' >Already have an account? </Typography>
              <Link type="" to="/login">SignIn</Link>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
