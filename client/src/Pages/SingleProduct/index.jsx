import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { StarRating } from "../../Components";
import { Button } from "@mui/material";
import { IoHeart, IoBag } from "react-icons/io5";
import {
  addWishlistItem,
  getWishlist
} from "../../State/actions/wishlistActions";
import { toast } from "react-toastify";
import { toaster } from "../../Utilities/appConfig";
import { addBagItem, getBag } from "../../State/actions/bagActions";

const SingleProduct = () => {
  const { _id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const { watches } = useSelector((state) => state?.watches);
  const { token, user, isAuth } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (_id) {
      const singleProduct =
        watches.length !== 0 && watches?.find((el) => el?._id === _id);

      if (setCurrentProduct) setCurrentProduct(singleProduct);
    }
  }, [_id]);

  const handleAddToWishlist = () => {
    if (isAuth && token) {
      dispatch(
        addWishlistItem(token, {
          ...currentProduct,
          userId: user?.id
        })
      ).then((res) => {
        if (res?.type === "ADD_TO_WISHLIST_SUCCESS") {
          dispatch(getWishlist(user?.id, token));
          toast.success("Item added to Wishlist!", toaster(1500));
        }
      });
    } else navigate("/login", { state: { from: location } });
  };

  const handleAddToBag = () => {
    if (isAuth && token) {
      dispatch(
        addBagItem(token, {
          ...currentProduct,
          userId: user?.id,
          quantity: 1
        })
      ).then((res) => {
        if (res?.type === "ADD_TO_BAG_SUCCESS") {
          dispatch(getBag(user?.id, token));
          toast.success("Item added to Bag!", toaster(1500));
        }
      });
    } else navigate("/login", { state: { from: location } });
  };

  return (
    <div className="w-full h-auto m-auto lg:p-20 md:p-10 sm:p-5">
      <div className="w-[90%] m-auto flex md:items-center lg:justify-center sm:items-center md:flex-row sm:flex-col md:justify-center gap-5 lg:mt-0 sm:mt-20 md:mt-15">
        <div className="lg:w-[350px] md:w-[310px] sm:w-[290px] lg:h-[400px] md:h-[350px] sm:h-[300px]">
          <img
            src={currentProduct?.image}
            alt="product"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-auto text-left text-lg font-semibold flex flex-col gap-4 py-10">
          <div className="lg:text-[30px] md:text-[25px] sm:text-[20px] font-bold text-[#545454]">
            {currentProduct?.name}
          </div>
          <div className="lg:text-[20px] md:text-[18px] sm:text-[15px] text-[#808080] font-bold">
            {currentProduct?.brand}
          </div>
          <div>Rs. {currentProduct?.price}</div>
          <div>
            <StarRating stars={currentProduct?.rating} />
          </div>
          <div className="w-full flex items-center justify-start gap-2 flex-wrap">
            <Button
              variant="outlined"
              sx={{
                width: "180px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                color: "black",
                border: "1px solid black"
              }}
              onClick={handleAddToWishlist}
            >
              <IoHeart />
              <p>Add to Wishlist</p>
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "180px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                bgcolor: "#49c62f"
              }}
              onClick={handleAddToBag}
            >
              <IoBag />
              <p>Add to Bag</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
