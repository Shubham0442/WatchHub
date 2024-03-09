import React from "react";
import { Banners } from "../../Components";

const Home = () => {
  return (
    <div className="w-full lg:h-auto md:h-[300px] sm:h-[250px] base:h-[100px] mt-16">
      <div className="w-full h-full mt-4 px-20">
        <Banners />
      </div>
    </div>
  );
};

export default Home;
