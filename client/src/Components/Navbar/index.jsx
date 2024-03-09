import { Button, Tooltip } from "@mui/material";
import React, { useEffect } from "react";
import { IoHeart, IoBag } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import UserDropdown from "../UserDropdown";
import { getBag } from "../../State/actions/bagActions";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isAuth, user, token } = useSelector((state) => state.auth);
  const { bag } = useSelector((state) => state.bag);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBag(user?.id, token));
  }, [bag.length, isAuth, token]);

  return (
    <div className="fixed z-10 top-0 w-full h-[60px] flex items-center justify-between lg:px-8 md:px-8 sm:px-0 sm:pl-8 base:px-0 base:pl-8 text-[#000] bg-[#fff]">
      <div
        className="h-full w-2/5 flex items-center justify-start gap-2 font-bold text-lg cursor-pointer"
        onClick={() => navigate("/")}
      >
        <div className="lg:hidden md:hidden sm:block pt-1.5">
          <IoMenuSharp />
        </div>
        <div className="lg:w-[160px] lg:h-14 md:w-[140px] md:h-12 sm:w-[140px] sm:h-12">
          <img
            src="/Watch-Hub.png"
            className="h-full w-full object-cover"
            alt="logo"
          />
        </div>
      </div>
      <div className="lg:flex md:flex sm:hidden base:hidden h-full w-1/5 flex items-center justify-center gap-4 font-bold text-base">
        <div
          className="cursor-pointer"
          style={
            pathname === "/"
              ? { color: "#1976d2", borderBottom: "2px solid" }
              : { color: "#000" }
          }
          onClick={() => navigate("/")}
        >
          Home
        </div>
        <div
          className="cursor-pointer"
          style={
            pathname === "/products"
              ? { color: "#1976d2", borderBottom: "2px solid" }
              : { color: "#000" }
          }
          onClick={() => navigate("/products")}
        >
          Products
        </div>
      </div>
      <div className="lg:w-2/5 md:w-2/5 sm:w-1/2 base:1/2 m-auto h-full flex items-center justify-end gap-4 font-semibold text-base">
        <div className="h-9 flex items-center justify-center text-sm">
          <input
            type="search"
            className="border-b-2 focus-visible:outline-none bg-[#fff] border-[#1976d2] pl-1"
            placeholder="Search"
          />
        </div>
        <Tooltip title="My Wishlist">
          <div
            className="text-[22px] cursor-pointer"
            onClick={() => navigate("/wishlist")}
            style={
              pathname === "/wishlist"
                ? { color: "#1976d2" }
                : { color: "#000" }
            }
          >
            <IoHeart />
          </div>
        </Tooltip>
        <Tooltip title="My Bag">
          <div
            className="text-[22px] cursor-pointer relative"
            onClick={() => navigate("/bag")}
            style={
              pathname === "/bag" ? { color: "#1976d2" } : { color: "#000" }
            }
          >
            {isAuth && token && bag?.length !== 0 && (
              <div className="w-4 h-4 font-semibold rounded-full bg-[red] text-[#000] absolute top-[-5px] right-[-9px] text-[10px] text-center flex items-center justify-center">
                <p>{bag?.length}</p>
              </div>
            )}
            <IoBag />
          </div>
        </Tooltip>
        {isAuth === true && token !== null ? (
          <UserDropdown />
        ) : (
          <Button variant="contained" onClick={() => navigate("/login")}>
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
