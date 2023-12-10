import { useState } from "react";
import { Button } from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import { ShoeCard } from "../components/ShoeCard";

export const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex flex-col gap-10 max-container justify-center min-h-[calc(100vh-65px)] xl:flex-row"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-10">
        <p className="text-xl font-montserrat text-coral-red ">
          Our Summer collections
        </p>
        <h1 className="mt-6 font-palanquin text-8xl xl:text-[78px] leading-tight max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-16">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block ">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-3 mb-10 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-8 gap-16 ">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:items-start xl:pt-20 xl:min-h-[calc(100vh-65px)] max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="Hero Shoe Image"
          className="object-contain relative z-10 w-[610px] h-auto xl:w-[460px] "
        />

        <div className="flex gap-4 absolute -bottom-[5%] sm:gap-6 sm:left-[10%] md:left-[20%] max-sm:px-6 ">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
