import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingIndicator, NoData } from "../../Components";
import { getBag, removeBagItem } from "../../State/actions/bagActions";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { toaster } from "../../Utilities/appConfig";

const Bag = () => {
  const { isAuth, token, user } = useSelector((state) => state.auth);
  const { isLoading, bag } = useSelector((state) => state.bag);
  const dispatch = useDispatch();

  useEffect(() => {
    if (bag.length === 0) dispatch(getBag(user?.id, token));
  }, [bag.length, isAuth, token]);

  const total = useMemo(() => {
    const totalPrice = bag.reduce((acc, el) => {
      return el.price + acc;
    }, 0);

    return totalPrice;
  }, [bag.length]);

  const handleRemoveItem = (id) => {
    dispatch(removeBagItem(token, id)).then((res) => {
      if (res?.type === "REMOVE_BAG_ITEMS_SUCCESS") {
        dispatch(getBag(user?.id, token));
        toast.success("Item removed from Bag!", toaster(1500));
      }
    });
  };

  return (
    <div className="w-full pt-20 m-auto">
      <div className="w-[80%] m-auto flex items-center justify-start gap-2 font-bold">
        <div className="text-[#646464]">My Bag</div>
        {bag.length !== 0 && (
          <div>
            {bag?.length} {bag?.length === 1 ? "Item" : "Items"}
          </div>
        )}
      </div>
      {isLoading && bag.length === 0 && (
        <div className="w-[80%] m-auto h-[450px] flex items-center justify-center gap-2 flex-wrap py-8">
          <LoadingIndicator />
        </div>
      )}
      {!isLoading && bag.length === 0 && (
        <div className="w-[80%] m-auto h-[450px] flex items-center justify-center gap-2 flex-wrap py-8">
          <NoData />
        </div>
      )}
      {!isLoading && bag.length !== 0 && (
        <div className="w-[80%] m-auto flex justify-center gap-2 py-8">
          <div className="w-[70%] h-auto flex items-center justify-start flex-col gap-4">
            {bag?.map((el) => (
              <div
                key={el?._id}
                className="w-full h-32 flex justify-start font-semibold text-base gap-2 border"
              >
                <div className="w-[140px] h-full p-1.5">
                  <img
                    className="w-full h-full object-cover"
                    src={el?.image}
                    alt="product-image"
                  />
                </div>
                <div className="w-full text-left pt-2">
                  <div className="font-bold">{el?.name}</div>
                  <div>{el?.brand}</div>
                  <div>Rs. {el?.price}</div>
                </div>
                <div className="flex items-center justify-end pr-4">
                  <Button
                    variant="text"
                    sx={{
                      color: "#0000fe",
                      fontSize: "12px",
                      fontWeight: "600"
                    }}
                    size="small"
                    onClick={() => handleRemoveItem(el?._id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[30%] h-[200px] px-4 font-semibold text-base flex flex-col justify-start gap-5">
            <div className="w-full flex items-center justify-between">
              <div className="text-lg font-bold">Order Summery</div>
            </div>
            <div className="w-full flex items-center justify-between">
              <div>Total Items</div>
              <div>
                {bag?.length} {bag?.length === 1 ? "Item" : "Items"}
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <div>Discount</div>
              <div>{0.0}</div>
            </div>
            <div className="w-full flex items-center justify-between">
              <div>Delivery Charges</div>
              <div>Free</div>
            </div>
            <div className="w-full flex items-center justify-between text-lg font-bold">
              <div>Total</div>
              <div>Rs. {total}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bag;
