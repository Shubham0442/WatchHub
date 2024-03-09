import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getReaminingWatches,
  getWatches
} from "../../State/actions/watchActions";
import { Filters, LoadingIndicator, NoData } from "../../Components";
import { Link } from "react-router-dom";

const Products = () => {
  const { watches, isLoading } = useSelector((state) => state.watches);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    if (watches?.length === 0) dispatch(getWatches({ ...filters, skip: 0 }));
  }, [watches?.length, filters]);

  useEffect(() => {
    if (filters) dispatch(getWatches({ ...filters, skip: 0 }));

    return () => {
      const container = document.getElementById("product-container");
      container?.removeEventListener("scroll", handleScroll);
    };
  }, [filters]);

  const handleScroll = () => {
    const container = document.getElementById("product-container");
    const scrollTop = container?.scrollTop;
    const scrollHeight = container?.scrollHeight;
    const clientHeight = container?.clientHeight;

    if (scrollHeight - clientHeight <= Math.ceil(scrollTop) + 10) {
      dispatch(getReaminingWatches({ skip: watches.length, ...filters }));
    }
  };

  return (
    <div className="w-full h-full mt-5 lg:p-10 md:p-5 sm:p-2">
      <div className="w-full h-[608px] flex justify-center mt-10 lg:gap-5 md:gap-5 sm:gap-5">
        <div className="lg:w-[15%] md:w-[30%] h-full text-left font-normal lg:pl-6 md:pl-5 sm:pl-1.5">
          <Filters />
        </div>
        <div
          id="product-container"
          className="lg:w-[85%] md:w-[70%] h-full m-auto flex justify-center flex-wrap gap-5 overflow-x-hidden overflow-y-auto"
          onScroll={() => handleScroll()}
        >
          {watches.length !== 0 &&
            watches?.map((el) => (
              <div
                key={el?._id}
                className="lg:w-[250px] md:w-[200px] sm:w-[150px] border rounded-sm"
              >
                <Link to={`/products/${el?._id}`}>
                  <div className="w-full lg:h-60 md:h-48 sm:h-44">
                    <img
                      src={el?.image}
                      alt="image"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="w-full h-auto p-2 text-left font-semibold text-sm">
                    <div className="lg:text-base md:text-sm sm:text-xs">
                      {el.name}
                    </div>
                    <div className="text-[#969491]">{el.brand}</div>
                    <p className="font-semibold lg:text-sm md:text-xs sm:text-xs">
                      &#8377; {el.price}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          {!isLoading && watches.length === 0 && <NoData />}
          {isLoading && <LoadingIndicator />}
        </div>
      </div>
    </div>
  );
};

export default Products;
