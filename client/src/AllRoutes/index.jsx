import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Bag,
  Home,
  Login,
  Products,
  Signup,
  SingleProduct,
  Wishlist
} from "../Pages";
import PrivateRoute from "../HOC/PrivateRoute";

const AllRoutes = () => {
  return (
    <div className="w-full mt-10">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:_id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/bag"
          element={
            <PrivateRoute>
              <Bag />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
