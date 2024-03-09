import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateBrand,
  updateCategory,
  updateGender,
  updateSort
} from "../../State/actions/filterActions";

const Filers = () => {
  const { sort, brand, category, gender } = useSelector(
    (state) => state.filters
  );
  const dispatch = useDispatch();

  const handleBrand = (e) => {
    let newBrand = [...brand];
    const val = e.target.value;

    if (brand?.includes(val)) {
      const ind = brand.indexOf(val);
      newBrand.splice(ind, 1);
    } else {
      newBrand.push(val);
    }

    dispatch(updateBrand(newBrand));
  };

  const handleCategory = (e) => {
    const newCategory = [...category];
    const val = e.target.value;

    if (category?.includes(val)) {
      const ind = category.indexOf(val);
      newCategory.splice(ind, 1);
    } else {
      newCategory.push(val);
    }

    dispatch(updateCategory(newCategory));
  };

  const handleGender = (e) => {
    const newGender = [...gender];
    const val = e.target.value;

    if (gender?.includes(val)) {
      const ind = gender.indexOf(val);
      newGender.splice(ind, 1);
    } else {
      newGender.push(val);
    }

    dispatch(updateGender(newGender));
  };

  return (
    <div className="w-full h-full font-semibold lg:text-base md:text-sm sm:text-xs">
      <div className="w-full mb-4">
        <div className="font-bold mb-2">Filter By Brand</div>
        <div>
          <div className="w-full flex items-center justify-start gap-1.5 mb-2 text-[#646464]">
            <input
              type="Checkbox"
              className="w-4 h-4"
              value="boAt"
              onChange={handleBrand}
              defaultChecked={brand?.includes("boAt")}
            />
            <label>boAt</label>
          </div>
          <div className="w-full flex items-center justify-start gap-1.5 mb-2 text-[#646464]">
            <input
              type="Checkbox"
              className="w-4 h-4"
              value="Titan"
              onChange={handleBrand}
              defaultChecked={brand?.includes("Titan")}
            />
            <label>Titan</label>
          </div>
          <div className="w-full flex items-center justify-start gap-1.5 mb-2 text-[#646464]">
            <input
              type="Checkbox"
              className="w-4 h-4"
              onChange={handleBrand}
              value="Fastrack"
              defaultChecked={brand?.includes("Fastrack")}
            />
            <label>Fastrack</label>
          </div>
          <div className="w-full flex items-center justify-start gap-1.5 mb-2 text-[#646464]">
            <input
              type="Checkbox"
              className="w-4 h-4"
              onChange={handleBrand}
              value="Sonata"
              defaultChecked={brand?.includes("Sonata")}
            />
            <label>Sonata</label>
          </div>
        </div>
      </div>
      <div className="w-full mb-4 mt-2">
        <div className="font-bold mb-2">Filter By Category</div>
        <div>
          <div className="w-full flex items-center justify-start gap-1.5 mb-2 text-[#646464]">
            <input
              type="Checkbox"
              className="w-4 h-4"
              onChange={handleCategory}
              value="Analogue"
              defaultChecked={category?.includes("Analogue")}
            />
            <label>Analogue</label>
          </div>
          <div className="w-full flex items-center justify-start gap-1.5 mb-2 text-[#646464]">
            <input
              type="Checkbox"
              className="w-4 h-4"
              value="Smartwatch"
              onChange={handleCategory}
              defaultChecked={category?.includes("Smartwatch")}
            />
            <label>Smartwatch</label>
          </div>
        </div>
      </div>
      <div className="w-full mb-4">
        <div className="font-bold mb-2">Filter By Gender</div>
        <div>
          <div className="w-full flex items-center justify-start gap-1.5 mb-2 text-[#646464]">
            <input
              type="Checkbox"
              className="w-4 h-4"
              value="Men"
              onChange={handleGender}
              defaultChecked={category?.includes("Men")}
            />
            <label>Men</label>
          </div>
          <div className="w-full flex items-center justify-start gap-1.5 mb-2 text-[#646464]">
            <input
              type="Checkbox"
              className="w-4 h-4"
              value="Women"
              onChange={handleGender}
              defaultChecked={category?.includes("Women")}
            />
            <label>Women</label>
          </div>
          <div className="w-full flex items-center justify-start gap-1.5 mb-2 text-[#646464]">
            <input
              type="Checkbox"
              className="w-4 h-4"
              value="Unisex"
              onChange={handleGender}
              defaultChecked={category?.includes("Unisex")}
            />
            <label>Unisex</label>
          </div>
        </div>
      </div>
      <div>
        <div className="font-bold mb-2">Sort By Price</div>
        <div className="w-full flex items-center justify-start gap-1.5 mb-2 text-[#646464]">
          <input
            type="radio"
            className="w-4 h-4"
            value={sort}
            name="sort"
            onChange={(e) => dispatch(updateSort(1))}
            defaultChecked={sort === 1}
          />
          <label>Low to High</label>
        </div>
        <div className="w-full flex items-center justify-start gap-1.5 mb-2 text-[#646464]">
          <input
            type="radio"
            className="w-4 h-4"
            name="sort"
            value={sort}
            onChange={(e) => dispatch(updateSort(-1))}
            defaultChecked={sort === -1}
          />
          <label>High to Low</label>
        </div>
      </div>
    </div>
  );
};

export default Filers;
