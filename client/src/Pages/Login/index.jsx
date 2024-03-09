import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../../State/actions/authActions";
import { toast } from "react-toastify";
import { toaster } from "../../Utilities/appConfig";
import { LoadingIndicator } from "../../Components";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";

  console.log(comingFrom);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(login(loginForm)).then((res) => {
      if (res?.type === "USER_LOGIN_SUCCESS") {
        toast.success("Login Sussessful!", toaster(1500));
        navigate(comingFrom);
      } else
        toast.error(
          "Login Fail! Please enter correct cridentials",
          toaster(1500)
        );
    });
  };

  return (
    <div className="w-full h-full m-auto pt-4 mt-16">
      <div className="font-bold text-[25px] mb-4">Login</div>
      <div className="lg:w-1/4 md:w-3/5 sm:w-5/6 m-auto text-base">
        <form className="w-full m-auto">
          <div className="w-full h-10 mb-5">
            <TextField
              sx={{ width: "100%", height: "40px" }}
              label="Email"
              type="email"
              variant="outlined"
              name="email"
              value={loginForm.email}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="w-full m-auto lg:h-10 md:h-7 sm:h-7 mb-5">
            <TextField
              sx={{ width: "100%", height: "100%" }}
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={loginForm.password}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="w-full m-auto h-10 mb-5">
            <Button
              variant="contained"
              sx={{ width: "100%", height: "45px" }}
              type="submit"
              onClick={handleLogin}
            >
              {isLoading ? <LoadingIndicator size={24} /> : "Login"}
            </Button>
          </div>
        </form>
      </div>
      <div className="w-full m-auto text-base font-semibold">
        <div>New to Watch-Hub?</div>
        <Link to="/signup">
          <div className="font-semi-bold text-[18px] text-[#1976d2]">
            Signup
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
