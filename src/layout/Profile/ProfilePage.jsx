// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   Breadcrumbs,
//   IconButton,
//   InputAdornment,
//   FormHelperText,
// } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { Link as RouterLink } from "react-router-dom";
// import PersonalHeader from "./PersonalHeader";
// import Footer from "./Footer";
// import AuthContext from "../../contexts/AuthContext";

// export default function ProfilePage() {
//   const [profileData, setProfileData] = useState({
//     name: "",
//     username: "",
//     email: "",
//     surname: "",
//     phonenumber: "",
//     oldPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });
//   const [formData, setFormData] = useState({
//     name: "",
//     username: "",
//     email: "",
//     surname: "",
//     phonenumber: "",
//     oldPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [showPasswords, setShowPasswords] = useState({
//     showOldPassword: false,
//     showNewPassword: false,
//     showConfirmPassword: false,
//   });

//   const { token, setToken } = useContext(AuthContext);
//   const [canChange, setCanChange] = useState(false);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const accessToken = sessionStorage.getItem("authToken");
//         const config = {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         };
//         const response = await axios.get(
//           "http://192.168.0.213:8080/my/",
//           config
//         );
//         const data = response.data.data;
//         setProfileData({
//           name: data.name,
//           username: data.username,
//           email: data.email,
//           surname: data.surname,
//           phonenumber: data.Phone,
//           oldPassword: "",
//           newPassword: "",
//           confirmPassword: "",
//         });
//         setFormData({
//           name: data.name,
//           username: data.username,
//           email: data.email,
//           surname: data.surname,
//           phonenumber: data.Phone,
//           oldPassword: "",
//           newPassword: "",
//           confirmPassword: "",
//         });
//       } catch (error) {
//         console.error("Error fetching profile data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setErrors((prev) => ({ ...prev, [name]: "" }));

//     if (name === "name" || name === "surname") {
//       if (!value.trim()) {
//         setErrors((prev) => ({
//           ...prev,
//           [name]: `${
//             name.charAt(0).toUpperCase() + name.slice(1)
//           } cannot be empty`,
//         }));
//       } else if (!/^[a-zA-Z]+$/.test(value)) {
//         setErrors((prev) => ({
//           ...prev,
//           [name]: `${
//             name.charAt(0).toUpperCase() + name.slice(1)
//           } must contain only letters`,
//         }));
//       }
//     } else if (name === "email") {
//       if (!/^\S+@\S+\.\S+$/.test(value)) {
//         setErrors((prev) => ({
//           ...prev,
//           [name]: "Please enter a valid email address",
//         }));
//       }
//     } else if (name === "newPassword") {
//       if (value.length< 8 || value.length > 20) {
//         setErrors((prev) => ({
//           ...prev,
//           [name]: "Password must be between 8 and 20 characters.",
//         }));
//       }
//       if (!value.match(/[A-Z]/)) {
//         setErrors((prev) => ({
//           ...prev,
//           [name]: "Password must contain at least one uppercase letter.",
//         }));
//       }
//       if (!value.match(/[a-z]/)) {
//         setErrors((prev) => ({
//           ...prev,
//           [name]: "Password must contain at least one lowercase letter.",
//         }));
//       }
//       if (!value.match(/[0-9]/)) {
//         setErrors((prev) => ({
//           ...prev,
//           [name]: "Password must contain at least one digit.",
//         }));
//       }
//     }

//     setProfileData((prev) => ({ ...prev, [name]: value }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     ["name", "surname", "email"].forEach((field) => {
//       if (!profileData[field].trim()) {
//         newErrors[field] = `${
//           field.charAt(0).toUpperCase() + field.slice(1)
//         } cannot be empty`;
//       } else if (
//         field === "email" &&
//         !/^\S+@\S+\.\S+$/.test(profileData[field])
//       ) {
//         newErrors[field] = "Please enter a valid email address";
//       } else if (
//         (field === "name" || field === "surname") &&
//         !/^[a-zA-Z]+$/.test(profileData[field])
//       ) {
//         newErrors[field] = `${
//           field.charAt(0).toUpperCase() + field.slice(1)
//         } must contain only letters`;
//       }
//     });
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     const accessToken = sessionStorage.getItem("authToken");
//     const config = {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     };
//     const { oldPassword, newPassword, confirmPassword, ...rest } = profileData;

//     const data = {
//       email: profileData.email,
//       name: profileData.name,
//       password: newPassword,
//       old_password: oldPassword,
//       surname: profileData.surname,
//       username: profileData.username
//     }
//     console.log(data);
//     try {
//       await axios.put("http://192.168.0.213:8080/my/", data, config);
//       setProfileData((prev) => ({
//         ...prev,
//         oldPassword: "",
//         newPassword: "",
//         confirmPassword: "",
//       }));
//     } catch (error) {
//       console.error("Failed to update profile:", error);
//     }
//   };

//   const togglePasswordVisibility = (field) => {
//     setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
//   };

//   return (
//     <>
//       <PersonalHeader />
//       <Container>
//         <div style={{ padding: "16px" }}>
//           <Breadcrumbs aria-label="breadcrumb">
//             <RouterLink to="/">Home</RouterLink>
//             <RouterLink to="/personal">Personal</RouterLink>
//             <Typography color="text.primary">Profile</Typography>
//           </Breadcrumbs>
//           <Typography variant="h4" sx={{ mb: 2 }}>
//             Profile Settings
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Name"
//                   name="name"
//                   value={profileData.name}
//                   onChange={handleChange}
//                   error={!!errors.name}
//                   helperText={errors.name}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Surname"
//                   name="surname"
//                   value={profileData.surname}
//                   onChange={handleChange}
//                   error={!!errors.surname}
//                   helperText={errors.surname}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Username"
//                   name="username"
//                   value={profileData.username}
//                   onChange={handleChange}
//                   helperText={errors.username}
//                   error={!!errors.username}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   disabled
//                   fullWidth
//                   label="Email"
//                   name="email"
//                   value={profileData.email}
//                   onChange={handleChange}
//                   error={!!errors.email}
//                   helperText={errors.email}
//                 />
//               </Grid>
//               {/* <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Phone Number"
//                   name="phonenumber"
//                   value={profileData.phonenumber}
//                   onChange={handleChange}
//                 />
//               </Grid> */}
//               {["oldPassword", "newPassword", "confirmPassword"].map(
//                 (field) => (
//                   <Grid item xs={12} key={field}>
//                     <TextField
//                       fullWidth
//                       type={
//                         showPasswords[
//                           `show${
//                             field.charAt(0).toUpperCase() + field.slice(1)
//                           }`
//                         ]
//                           ? "text"
//                           : "password"
//                       }
//                       label={
//                         field.charAt(0).toUpperCase() +
//                         field
//                           .slice(1)
//                           .replace(/([A-Z])/g, " $1")
//                           .trim()
//                       }
//                       name={field}
//                       value={profileData[field]}
//                       onChange={handleChange}
//                       InputProps={{
//                         endAdornment: (
//                           <InputAdornment position="end">
//                             <IconButton
//                               aria-label="toggle password visibility"
//                               onClick={() =>
//                                 togglePasswordVisibility(
//                                   `show${
//                                     field.charAt(0).toUpperCase() +
//                                     field.slice(1)
//                                   }`
//                                 )
//                               }
//                               edge="end"
//                             >
//                               {showPasswords[
//                                 `show${
//                                   field.charAt(0).toUpperCase() + field.slice(1)
//                                 }`
//                               ] ? (
//                                 <VisibilityOff />
//                               ) : (
//                                 <Visibility />
//                               )}
//                             </IconButton>
//                           </InputAdornment>
//                         ),
//                       }}
//                     />
//                   </Grid>
//                 )
//               )}
//               <Grid item xs={12}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   sx={{ mt: 2 }}
//                   disabled={!canChange}
//                 >
//                   Save Changes
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </div>
//       </Container>
//       <Footer />
//     </>
//   );
// }
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Breadcrumbs,
  IconButton,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link as RouterLink } from "react-router-dom";
import PersonalHeader from "./PersonalHeader";
import Footer from "./Footer";
import AuthContext from "../../contexts/AuthContext";

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    name: "",
    username: "",
    email: "",
    surname: "",
    phonenumber: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    surname: "",
    phonenumber: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPasswords, setShowPasswords] = useState({
    showOldPassword: false,
    showNewPassword: false,
    showConfirmPassword: false,
  });

  const { token, setToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = sessionStorage.getItem("authToken");
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const response = await axios.get(
          "http://192.168.0.213:8080/my/",
          config
        );
        const data = response.data.data;
        setProfileData({
          name: data.name,
          username: data.username,
          email: data.email,
          surname: data.surname,
          phonenumber: data.Phone,
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        setFormData({
          name: data.name,
          username: data.username,
          email: data.email,
          surname: data.surname,
          phonenumber: data.Phone,
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, []);

  const [canChange, setCanChange] = useState(false);
  const isDataChanged = () => {
    return Object.keys(profileData).some(
      (key) => profileData[key] !== formData[key]
    );
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: "" }));

    if (name === "name" || name === "surname") {
      if (!value.trim()) {
        setErrors((prev) => ({
          ...prev,
          [name]: `${
            name.charAt(0).toUpperCase() + name.slice(1)
          } cannot be empty`,
        }));
      } else if (!/^[a-zA-Z]+$/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          [name]: `${
            name.charAt(0).toUpperCase() + name.slice(1)
          } must contain only letters`,
        }));
      }
    } else if (name === "email") {
      if (!/^\S+@\S+\.\S+$/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          [name]: "Please enter a valid email address",
        }));
      }
    } else if (name === "newPassword") {
      if (value.length < 8 || value.length > 20) {
        setErrors((prev) => ({
          ...prev,
          [name]: "Password must be between 8 and 20 characters.",
        }));
      }
      if (!value.match(/[A-Z]/)) {
        setErrors((prev) => ({
          ...prev,
          [name]: "Password must contain at least one uppercase letter.",
        }));
      }
      if (!value.match(/[a-z]/)) {
        setErrors((prev) => ({
          ...prev,
          [name]: "Password must contain at least one lowercase letter.",
        }));
      }
      if (!value.match(/[0-9]/)) {
        setErrors((prev) => ({
          ...prev,
          [name]: "Password must contain at least one digit.",
        }));
      }
    }

    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const accessToken = sessionStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const { oldPassword, newPassword, confirmPassword, ...rest } = profileData;

    const data = {
      email: profileData.email,
      name: profileData.name,
      password: newPassword,
      old_password: oldPassword,
      surname: profileData.surname,
      username: profileData.username,
    };
    try {
      await axios.put("http://192.168.0.213:8080/my/", data, config);
      setProfileData((prev) => ({
        ...prev,
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));
      setCanChange(false);
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };
  const change = isDataChanged();
  const validateForm = () => {
    const newErrors = {};
    ["name", "surname", "email"].forEach((field) => {
      if (!profileData[field].trim()) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } cannot be empty`;
      } else if (
        field === "email" &&
        !/^\S+@\S+\.\S+$/.test(profileData[field])
      ) {
        newErrors[field] = "Please enter a valid email address";
      } else if (
        (field === "name" || field === "surname") &&
        !/^[a-zA-Z]+$/.test(profileData[field])
      ) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } must contain only letters`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <>
      <PersonalHeader />
      <Container>
        <div style={{ padding: "16px" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/personal">Personal</RouterLink>
            <Typography color="text.primary">Profile</Typography>
          </Breadcrumbs>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Profile Settings
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name ? errors.name : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Surname"
                  name="surname"
                  value={profileData.surname}
                  onChange={handleChange}
                  error={!!errors.surname}
                  helperText={errors.surname ? errors.surname : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Username"
                  name="username"
                  value={profileData.username}
                  onChange={handleChange}
                  helperText={errors.username ? errors.username : ""}
                  error={!!errors.username}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  disabled
                  fullWidth
                  label="Email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email ? errors.email : ""}
                />
              </Grid>
              {["oldPassword", "newPassword", "confirmPassword"].map(
                (field) => (
                  <Grid item xs={12} key={field}>
                    <TextField
                      fullWidth
                      type={
                        showPasswords[
                          `show${
                            field.charAt(0).toUpperCase() + field.slice(1)
                          }`
                        ]
                          ? "text"
                          : "password"
                      }
                      label={
                        field.charAt(0).toUpperCase() +
                        field
                          .slice(1)
                          .replace(/([A-Z])/g, " $1")
                          .trim()
                      }
                      name={field}
                      value={profileData[field]}
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() =>
                                togglePasswordVisibility(
                                  `show${
                                    field.charAt(0).toUpperCase() +
                                    field.slice(1)
                                  }`
                                )
                              }
                              edge="end"
                            >
                              {showPasswords[
                                `show${
                                  field.charAt(0).toUpperCase() + field.slice(1)
                                }`
                              ] ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                )
              )}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  disabled={!change}
                >
                  Save Changes
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
}
