import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getWishlist,
  removeWishlistItem
} from "../../State/actions/wishlistActions";
import { LoadingIndicator, NoData } from "../../Components";
import { HiXMark } from "react-icons/hi2";
import { toast } from "react-toastify";
import { toaster } from "../../Utilities/appConfig";
import { addBagItem, getBag } from "../../State/actions/bagActions";

const Wishlist = () => {
  const { wishlist, isLoading } = useSelector((state) => state.wishlist);
  const { user, token, isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist?.length === 0) {
      dispatch(getWishlist(user?.id, token));
    }
  }, [wishlist?.length, user?.id, token]);

  const handleRemove = (id) => {
    dispatch(removeWishlistItem(token, id)).then((res) => {
      if (res?.type === "REMOVE_WISHLIST_ITEMS_SUCCESS") {
        dispatch(getWishlist(user?.id, token));
        toast.success("Item Removed from Wishlist", toaster(1500));
      }
    });
  };

  const handleAddToBag = (currentProduct) => {
    const id = currentProduct._id;
    dispatch(
      addBagItem(token, {
        ...currentProduct,
        userId: user?.id,
        quantity: 1
      })
    ).then((res) => {
      if (res?.type === "ADD_TO_BAG_SUCCESS") {
        dispatch(removeWishlistItem(token, id)).then((res) => {
          if (res?.type === "REMOVE_WISHLIST_ITEMS_SUCCESS") {
            dispatch(getWishlist(user?.id, token));
            dispatch(getBag(user?.id, token));
            toast.success("Item added to Bag!", toaster(1500));
          }
        });
      }
    });
  };

  return (
    <div className="w-full mt-20">
      <div className="w-[80%] m-auto flex items-center justify-start gap-2 font-bold">
        <div className="text-[#646464]">My Wishlist</div>
        {wishlist.length !== 0 && (
          <div>
            {wishlist?.length} {wishlist?.length === 1 ? "Item" : "Items"}
          </div>
        )}
      </div>
      {isLoading && wishlist.length === 0 && (
        <div className="w-[80%] m-auto h-[450px] flex items-center justify-center gap-2 flex-wrap py-8">
          <LoadingIndicator />
        </div>
      )}
      {!isLoading && wishlist.length === 0 && (
        <div className="w-[80%] m-auto h-[450px] flex items-center justify-center gap-2 flex-wrap py-8">
          <NoData />
        </div>
      )}
      {!isLoading && wishlist.length !== 0 && (
        <div className="w-[80%] m-auto flex items-center justify-start gap-2 flex-wrap py-8">
          {wishlist?.map((el) => (
            <div key={el?._id} className="w-[250px] border rounded-sm relative">
              <div
                onClick={() => handleRemove(el?._id)}
                className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-full bg-[#efefef] hover:bg-[#d6d9d8] cursor-pointer"
              >
                <HiXMark fontSize="20px" />
              </div>
              <div className="w-full h-60">
                <img
                  src={el?.image}
                  alt="image"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="w-full h-auto p-2 text-left font-semibold text-sm">
                <div className="text-base">{el.name}</div>
                <div className="text-[#969491]">{el.brand}</div>
                <p className="font-semibold text-sm">&#8377; {el.price}</p>
              </div>
              <div
                className="w-full h-11 flex items-center justify-center text-base font-semibold text-[#434ccc] border-t cursor-pointer"
                onClick={() => handleAddToBag(el)}
              >
                MOVE TO BAG
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
