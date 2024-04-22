import { useState, useEffect, useContext} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Logo from "../../components/Logo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";


import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import PersonalHeader from "../Profile/PersonalHeader";
import Footer from "../Profile/Footer";

export default function LoginPage() {
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const theme = useTheme();
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
    rememberMe: false,
    errors: {
      username: "",
      password: "",
    },
  });
  useEffect(() => {
    const savedUsername = localStorage.getItem("savedUsername");
    const savedPassword = localStorage.getItem("savedPassword");
    if (savedUsername && savedPassword) {
      setValues((v) => ({
        ...v,
        username: savedUsername,
        password: savedPassword,
        rememberMe: true,
      }));
    }
  }, []);

  const validateUsername = (username) => {
    if (!username) {
      return "Username is required"; // Changed from login to username
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!password) {
      return "Password is required";
    }
    return "";
  };

  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      errors: { ...values.errors, username: "", password: "" },
      [prop]: event.target.value,
    });
  };

  const handleCheckboxChange = (event) => {
    setValues({ ...values, rememberMe: event.target.checked });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const usernameError = validateUsername(values.username);
    const passwordError = validatePassword(values.password);

    if (usernameError || passwordError) {
      setValues({
        ...values,
        errors: { username: usernameError, password: passwordError },
      });
      return;
    }

    try {
      const postData = {
        username: values.username,
        password: values.password,
      };

      const response = await axios.post(
        "http://192.168.1.213:8080/auth/sign-in",
        postData
      );
      const token = response.data.token;
      if (token) {
        if (values.rememberMe) {
          sessionStorage.setItem("authToken", token);
          localStorage.setItem("savedUsername", values.username);
          localStorage.setItem("savedPassword", values.password);
        } else {
          sessionStorage.setItem("authToken", token);
          localStorage.setItem("savedUsername", "");
          localStorage.setItem("savedPassword", "");
        }
        localStorage.setItem('activeName',values.username);
        setToken(token);
        navigate("/");
      } else {
        console.log("error message");
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.message === "incorrect password") {
        setValues({
          ...values,
          errors: { password: "Password is not correct" },
        });
        return;
      } else if (error.response.data.message === "sql: no rows in result set") {
        setValues({
          ...values,
          errors: { username: "There is no such username" },
        });
        return;
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <PersonalHeader/>
      <Box
        sx={{
          paddingTop: "30px",
          paddingLeft: "20px",
          paddingRight: "20px",
          marginRight: "auto",
          marginLeft: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "440px",
        }}
      >
        <Logo />
        <Typography sx={{ fontWeight: "700" }} component="h5" variant="h5">
          Log in to your account
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username or Email"
            name="username"
            autoComplete="username"
            value={values.username}
            autoFocus
            error={!!values.errors.username}
            helperText={values.errors.username}
            onChange={handleChange("username")}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={values.showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange("password")}
            error={!!values.errors.password}
            helperText={values.errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={values.rememberMe}
                onChange={handleCheckboxChange}
                name="rememberMe"
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item>
              <Typography sx={{ fontWeight: "700" }} variant="subtitle2">
                Don't have an account?{" "}
                <RouterLink
                  style={{ color: theme.palette.primary.main }}
                  to="/auth/register"
                >
                  Sign Up
                </RouterLink>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer bottom={'0'}/>
    </ThemeProvider>
  );
}
