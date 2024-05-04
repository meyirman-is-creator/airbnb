import { useState, useEffect } from "react";
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

import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import PersonalHeader from "../Profile/PersonalHeader";
import Footer from "../Profile/Footer";
import { Container } from "@mui/material";

export default function RegisterPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    username: "",
    name: "",
    surname: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
    rememberMe: false,
    errors: {
      email: "",
      username: "",
      name: "",
      surname: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Обновите все функции валидации для новых полей...
  // Изменения в handleChange и других обработчиках...
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const validatePassword = (password) => {
    if (password.length < 8 || password.length > 20) {
      return "Password must be between 8 and 20 characters.";
    }
    if (!password.match(/[A-Z]/)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!password.match(/[a-z]/)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!password.match(/[0-9]/)) {
      return "Password must contain at least one digit.";
    }
    return "";
  };
  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
  };
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      return "Email is required.";
    } else if (!emailRegex.test(email)) {
      return "Enter a valid email address.";
    }
    return "";
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (values.username.length === 0) {
      setValues((prevValues) => ({
        ...prevValues,
        errors: {
          ...prevValues.errors,
          username: "Username should not be empty",
        },
      }));
      return;
    }
    if (values.surname.length === 0) {
      setValues((prevValues) => ({
        ...prevValues,
        errors: {
          ...prevValues.errors,
          surname: "Surname should not be empty",
        },
      }));
      return;
    }
    if (values.name.length === 0) {
      setValues((prevValues) => ({
        ...prevValues,
        errors: {
          ...prevValues.errors,
          name: "Name should not be empty",
        },
      }));
      return;
    }
    if (values.email.length === 0) {
      setValues((prevValues) => ({
        ...prevValues,
        errors: {
          ...prevValues.errors,
          email: "Email should not be empty",
        },
      }));
      return;
    }
    if (values.password.length === 0) {
      setValues((prevValues) => ({
        ...prevValues,
        errors: {
          ...prevValues.errors,
          password: "Password should not be empty",
        },
      }));
      return;
    }
    const validEmail = validateEmail(values.email);
    if (validEmail) {
      setValues((prevValues) => ({
        ...prevValues,
        errors: {
          ...prevValues.errors,
          email: validEmail,
        },
      }));
      return;
    }
    if (values.password !== values.confirmPassword) {
      setValues((prevValues) => ({
        ...prevValues,
        errors: {
          ...prevValues.errors,
          confirmPassword: "Passwords do not match",
          password: "Passwords do not match",
        },
      }));
      return;
    }

    try {
      const postData = {
        email: values.email,
        username: values.username,
        name: values.name,
        surname: values.surname,
        password: values.password,
      };
      const response = await axios.post(
        "http://192.168.0.213:8080/auth/sign-up",
        postData
      );
      sessionStorage.setItem("authToken", "");
      localStorage.setItem("savedUsername", "");
      localStorage.setItem("savedPassword", "");
      localStorage.setItem("activeName", values.username);
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
      if (
        error.response.data.message ===
        "something went wrong: there is already exist account with such username"
      ) {
        setValues({
          ...values,
          errors: {
            username: "There is already exist account with such username",
          },
        });
        return;
      } else if (
        error.response.data.message ===
        "something went wrong: there is already exist account with such email"
      ) {
        setValues({
          ...values,
          errors: { email: "There is already exist account with such email" },
        });
        return;
      }
    }
  };
  const handleChange = (prop) => (event) => {
    const newState = {
      ...values,
      errors: {
        ...values.errors,
        [prop]: "",
        ...(prop === "password" && { confirmPassword: "" }),
      },
      [prop]: event.target.value,
    };

    if (prop === "password") {
      const passwordError = validatePassword(event.target.value);
      if (passwordError) {
        newState.errors.password = passwordError;
      }
      if (event.target.value.length === 0) {
        newState.errors.password = "";
        values.password = "";
      }
    } else if ("confirmPassword" === prop) {
      if (values.password !== event.target.value) {
        newState.errors.confirmPassword = "Passwords do not match";
      }
      if (event.target.value.length === 0) {
        newState.errors.confirmPassword = "";
        values.confirmPassword = "";
      }
    }

    setValues(newState);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <PersonalHeader />
      <Container maxWidth="xl">
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
            paddingBottom:'30px',
          }}
        >
          <Logo />
          <Typography sx={{ fontWeight: "700" }} component="h5" variant="h5">
            Register your account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
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
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              value={values.name}
              autoFocus
              error={!!values.errors.name}
              helperText={values.errors.name}
              onChange={handleChange("name")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="surname"
              label="Surname"
              name="surname"
              autoComplete="family-name"
              value={values.surname}
              error={!!values.errors.surname}
              helperText={values.errors.surname}
              onChange={handleChange("surname")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              error={!!values.errors.email}
              helperText={values.errors.email}
              onChange={handleChange("email")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={values.showPassword ? "text" : "password"}
              id="password"
              autoComplete="new-password"
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type={values.showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              autoComplete="new-password"
              value={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
              error={!!values.errors.confirmPassword}
              helperText={values.errors.confirmPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showConfirmPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Register
            </Button>
            <Grid container>
              <Grid item>
                <Typography sx={{ fontWeight: "700" }} variant="subtitle2">
                  Already have an account?{" "}
                  <RouterLink
                    style={{ color: theme.palette.primary.main }}
                    to="/auth/login"
                  >
                    Login
                  </RouterLink>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      <Footer bottom={'auto'} />
    </ThemeProvider>
  );
}
