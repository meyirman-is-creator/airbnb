// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   Breadcrumbs,
// } from "@mui/material";

// import { Link as RouterLink } from "react-router-dom";
// import PersonalHeader from "./PersonalHeader";
// import Footer from "./Footer";
// import { Link } from "@mui/material";
// import AuthContext from "../../contexts/AuthContext";
// let object;
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
//   const [oldPassword, setOldPassword] = useState("");
//   const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [surname, setSurname] = useState("");
//   const [phonenumber, setPhonenumber] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const [formData, setFormData] = useState({ ...profileData }); // Initialize formData with profileData
//   const { token, setToken } = useContext(AuthContext);

//   const [isDataChanged, setIsDataChanged] = useState(false); // State to track if data has been changed

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
//           "http://192.168.1.213:8080/my/",
//           config
//         );
//         const data = response.data.data;
//         object = {
//           Phone: data.Phone,
//           email: data.email,
//           id: data.email,
//           name: data.name,
//           role_id: data.role_id,
//           surname: data.surname,
//           username: data.username,
//         };
//         setPhonenumber(data.Phone);
//         setEmail(data.email);
//         setName(data.name);
//         setSurname(data.surname);
//         setUsername(data.username);
//         setFormData(object);
//       } catch (error) {
//         console.error("Error fetching profile data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (
//       phonenumber !== object?.Phone ||
//       oldPassword !== "" ||
//       newPassword !== "" ||
//       confirmPassword !== "" ||
//       name !== object?.name ||
//       surname !== object?.surname ||
//       username !== object?.username ||
//       email !== object?.email
//     ) {
//       setIsDataChanged(true);
//     } else {
//       setIsDataChanged(false);
//     }
//   }, [
//     phonenumber,
//     oldPassword,
//     newPassword,
//     confirmPassword,
//     name,
//     surname,
//     username,
//     email,
//   ]);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "phonenumber") {
//       setPhonenumber(value);
//     } else if (name === "oldPassword") {
//       setOldPassword(value);
//     } else if (name === "newPassword") {
//       setNewPassword(value);
//     } else if (name === "confirmPassword") {
//       setConfirmPassword(value);
//     } else if (name === "name") {
//       setName(value);
//     } else if (name === "surname") {
//       setSurname(value);
//     } else if (name === "username") {
//       setUsername(value);
//     } else if (name === "email") {
//       setEmail(value);
//     }
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try{
//       const accessToken = sessionStorage.getItem("authToken");
//       const body = {
//         name: name,
//         surname: surname,
//         username: username,
//         password: newPassword,
//         old_password: oldPassword,
//       };
//       console.log(body)
//       const config = {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       };
//       const response = await axios.put(
//         "http://192.168.1.213:8080/my/",
//         body,config,
//       );
//       object = {
//         Phone: phonenumber,
//         email: email,
//         name: name,
//         surname: surname,
//         username: username,
//       };

//       setPhonenumber(phonenumber);
//       setName(name);
//       setSurname(surname);
//       setUsername(username);
//       setFormData(object);
//     }catch(error){
//       console.log(error)
//       if('incorrect password'===error.response.data.message){

//       }
//     }

//   };

//   return (
//     <>
//       <PersonalHeader />
//       <Container>
//         <div style={{ padding: "16px" }}>
//           <Breadcrumbs aria-label="breadcrumb">
//             <Link component={RouterLink} to="/">
//               Home
//             </Link>
//             <Link component={RouterLink} to="/personal">
//               Personal
//             </Link>
//             <Typography>Profile</Typography>
//           </Breadcrumbs>
//           <h1>Profile</h1>
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Name"
//                   name="name"
//                   onChange={handleChange}
//                   value={formData.name}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Username"
//                   name="username"
//                   onChange={handleChange}
//                   value={formData.username}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   name="email"
//                   onChange={handleChange}
//                   value={formData.email}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Surname"
//                   name="surname"
//                   onChange={handleChange}
//                   value={formData.surname}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Phone Number"
//                   name="phonenumber"
//                   onChange={handleChange}
//                   value={formData.phonenumber}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Old Password"
//                   name="oldPassword"
//                   type="password"
//                   onChange={handleChange}
//                   value={formData.oldPassword}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="New Password"
//                   name="newPassword"
//                   type="password"
//                   onChange={handleChange}
//                   value={formData.newPassword}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Confirm Password"
//                   name="confirmPassword"
//                   type="password"
//                   onChange={handleChange}
//                   value={formData.confirmPassword}
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               sx={{ marginTop: "20px" }}
//               disabled={!isDataChanged}
//               // Disable button if no changes or if phoneNumber, oldPassword, newPassword, or confirmPassword have no values
//             >
//               Save Changes
//             </Button>
//           </form>
//         </div>
//       </Container>
//       <Footer bottom={"0"} />
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
          "http://172.20.10.2:8080/my/",
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
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value)
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
      if (value.length< 8 || value.length > 20) {
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
    try {
      await axios.put("http://172.20.10.2:8080/my/", rest, config);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
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
                  helperText={errors.name}
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
                  helperText={errors.surname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Username"
                  name="username"
                  value={profileData.username}
                  onChange={handleChange}
                  helperText={errors.username}
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
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phonenumber"
                  value={profileData.phonenumber}
                  onChange={handleChange}
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
                  disabled={Object.values(errors).some(Boolean)}
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
//   const [errors, setErrors] = useState({});
//   const [showPasswords, setShowPasswords] = useState({
//     showOldPassword: false,
//     showNewPassword: false,
//     showConfirmPassword: false,
//   });

//   const { token, setToken } = useContext(AuthContext);

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
//           "http://192.168.1.213:8080/my/",
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
//       } catch (error) {
//         console.error("Error fetching profile data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setErrors((prev) => ({ ...prev, [name]: "" }));

//     if (name === "newPassword") {
//       const passwordErrors = [];
//       if (value.length < 8 || value.length > 20) {
//         passwordErrors.push(
//           "Password must be between 8 and 20 characters long."
//         );
//       }
//       if (!/[A-Z]/.test(value)) {
//         passwordErrors.push(
//           "Password must contain at least one uppercase letter."
//         );
//       }
//       if (!/[a-z]/.test(value)) {
//         passwordErrors.push(
//           "Password must contain at least one lowercase letter."
//         );
//       }
//       if (passwordErrors.length > 0) {
//         setErrors((prev) => ({ ...prev, [name]: passwordErrors.join(" ") }));
//       }
//     } else {
//       validateField(name, value);
//     }

//     setProfileData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handles validation for fields other than newPassword
//   const validateField = (name, value) => {
//     if ((name === "name" || name === "surname") && !value.trim()) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: `${
//           name.charAt(0).toUpperCase() + name.slice(1)
//         } cannot be empty`,
//       }));
//     } else if (
//       (name === "name" || name === "surname") &&
//       !/^[a-zA-Z]+$/.test(value)
//     ) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: `${
//           name.charAt(0).toUpperCase() + name.slice(1)
//         } must contain only letters`,
//       }));
//     } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "Please enter a valid email address",
//       }));
//     }
//   };

//   const validateForm = () => {
//     let formIsValid = true;
//     Object.keys(profileData).forEach((name) => {
//       validateField(name, profileData[name]);
//     });

//     if (Object.keys(errors).length > 0) {
//       formIsValid = false;
//     }
//     return formIsValid;
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
//     try {
//       await axios.put("http://192.168.1.213:8080/my/", rest, config);
//       alert("Profile updated successfully!");
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
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Phone Number"
//                   name="phonenumber"
//                   value={profileData.phonenumber}
//                   onChange={handleChange}
//                 />
//               </Grid>
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
//                   disabled={Object.values(errors).some(Boolean)}
//                 >
//                   Save Changes
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </div>
//       </Container>
//       <Footer bottom={"0"}/>
//     </>
//   );
// }
