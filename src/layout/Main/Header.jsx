import {
  Avatar,
  Box,
  Stack,
  Paper,
  Divider,
  Button,
  Typography,
} from "@mui/material";
import Logo from "../../components/Logo";
import Input from "./Input";
import { faker } from "@faker-js/faker";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import AuthContext from "../../contexts/AuthContext";
import { useState, useEffect, useContext } from "react";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "rgb(33, 43, 54)" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Header() {
  const { token, setToken } = useContext(AuthContext);
  const [name, setName] = useState(localStorage.getItem("activeName"));
  const theme = useTheme();
  const [auth, setAuth] = useState(false);
  const [modalAuth, setModalAuth] = useState(false);
  useEffect(() => {
    // Получаем данные из sessionStorage при загрузке сайта
    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);
  const logOut = () => {
    setToken(null);
    setAuth(false);
    sessionStorage.removeItem("authToken");
    setName("");
    localStorage.removeItem("activeName");
  };

  return (
    <Stack spacing={2}>
      <Box sx={{ boxShadow: "0px 2px 4px rgba(0,0,0,0.1)" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 3, py: 2 }}
        >
          <Logo />
          <Input />
          <div className="avatar-logo" style={{ position: "relative" }}>
            {auth ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                style={{ cursor: "pointer" }}
                fill={theme.palette.primary.main}
                onClick={() => setModalAuth((prev) => !prev)}
              >
                <path d="m16,23.314c-1.252.444-2.598.686-4,.686s-2.748-.242-4-.686v-2.314c0-2.206,1.794-4,4-4s4,1.794,4,4v2.314ZM12,7c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm12,5c0,4.433-2.416,8.311-6,10.389v-1.389c0-3.309-2.691-6-6-6s-6,2.691-6,6v1.389C2.416,20.311,0,16.433,0,12,0,5.383,5.383,0,12,0s12,5.383,12,12Zm-8-3c0-2.206-1.794-4-4-4s-4,1.794-4,4,1.794,4,4,4,4-1.794,4-4Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                fill={theme.palette.primary.main}
                style={{ cursor: "pointer" }}
                onClick={() => setModalAuth((prev) => !prev)}
              >
                <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-4,21.164v-.164c0-2.206,1.794-4,4-4s4,1.794,4,4v.164c-1.226.537-2.578.836-4,.836s-2.774-.299-4-.836Zm9.925-1.113c-.456-2.859-2.939-5.051-5.925-5.051s-5.468,2.192-5.925,5.051c-2.47-1.823-4.075-4.753-4.075-8.051C2,6.486,6.486,2,12,2s10,4.486,10,10c0,3.298-1.605,6.228-4.075,8.051Zm-5.925-15.051c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,6c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z" />
              </svg>
            )}
            {modalAuth && (
              <Stack
                sx={{
                  position: "absolute",
                  width: "200px",
                  right: "0",
                  top: "40px",
                  borderRadius: "10px",
                  zIndex: "5",
                  backgroundColor:
                    theme.palette.mode === "dark" ? "rgb(33, 43, 54)" : "#fff",
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "rgba(0, 0, 0, 0.24) 0px 0px 2px 0px, rgba(0, 0, 0, 0.24) -20px 20px 40px -4px"
                      : "rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) -20px 20px 40px",
                }}
              >
                {!auth ? (
                  <>
                    <Button
                      style={{
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                        textDecoration: "none",
                        padding: "0px",
                      }}
                    >
                      <RouterLink
                        style={{
                          color:
                            theme.palette.mode === "dark" ? "white" : "black",
                          textDecoration: "none",
                          width: "100%",
                          padding: "10px",
                        }}
                        to="/auth/login"
                      >
                        Login
                      </RouterLink>
                    </Button>

                    <Divider orientation="horizontal" flexItem />
                    <Button
                      style={{
                        padding: "0px",
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                        textDecoration: "none",
                      }}
                    >
                      <RouterLink
                        style={{
                          color:
                            theme.palette.mode === "dark" ? "white" : "black",
                          textDecoration: "none",
                          width: "100%",
                          padding: "10px",
                        }}
                        to="/auth/register"
                      >
                        Register
                      </RouterLink>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      style={{
                        padding: "0px",
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                        textDecoration: "none",
                      }}
                    >
                      <RouterLink
                        style={{
                          color:
                            theme.palette.mode === "dark" ? "white" : "black",
                          textDecoration: "none",
                          width: "100%",
                          padding: "10px",
                        }}
                        to="/personal"
                      >
                        Account
                      </RouterLink>
                    </Button>
                    <Divider orientation="horizontal" flexItem />
                    <Button
                      onClick={logOut}
                      style={{
                        padding: "0px",
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                        textDecoration: "none",
                        width: "100%",
                        padding: "10px",
                      }}
                    >
                      Log out
                    </Button>
                  </>
                )}
              </Stack>
            )}
          </div>
        </Stack>
      </Box>
    </Stack>
  );
}

