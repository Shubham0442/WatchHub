import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../State/actions/authActions";
import { toast } from "react-toastify";
import { toaster } from "../../Utilities/appConfig";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signupForm, setSignupForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    dispatch(signup(signupForm)).then((res) => {
      if (res?.type === "USER_SIGNUP_SUCCESS") {
        toast.success("Signup Sussessful!", toaster(1500));
        navigate("/login");
      } else
        toast.error("Something went wrong! Please try again", toaster(1500));
    });
  };

  return (
    <div className="w-full h-full m-auto pt-4 mt-16">
      <div className="font-bold text-[25px] mb-4">Signup</div>
      <div className="lg:w-1/4 md:w-3/5 sm:w-5/6 m-auto text-base">
        <div className="w-full h-10 mb-5">
          <TextField
            sx={{ width: "100%", height: "40px" }}
            label="Firstname"
            type="text"
            variant="outlined"
            name="firstname"
            value={signupForm.firstname}
            onChange={handleChange}
          />
        </div>
        <br />
        <form className="w-full m-auto">
          <div className="w-full h-10 mb-5">
            <TextField
              sx={{ width: "100%", height: "40px" }}
              label="Lastname"
              type="text"
              variant="outlined"
              name="lastname"
              value={signupForm.lastname}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="w-full h-10 mb-5">
            <TextField
              sx={{ width: "100%", height: "40px" }}
              label="Email"
              type="email"
              variant="outlined"
              name="email"
              value={signupForm.email}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="w-full m-auto h-10 mb-5">
            <TextField
              sx={{ width: "100%", height: "40px" }}
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={signupForm.password}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="w-full m-auto h-10 mb-5">
            <Button
              variant="contained"
              sx={{ width: "100%", height: "45px" }}
              type="submit"
              onClick={handleSignup}
            >
              Signup
            </Button>
          </div>
        </form>
      </div>
      <div className="w-full m-auto text-base font-semibold">
        <div>Already have an Account?</div>
        <Link to="/login">
          <div className="font-semi-bold text-[18px] text-[#1976d2]">Login</div>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
