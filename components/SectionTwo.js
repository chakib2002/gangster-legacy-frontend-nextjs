import Image from "next/image";
import React from "react";

export default function SectionTwo() {
  return (
    <div className="mx-8 my-8">
      <h1 className=" text-lg tracking-wider block border-gray-300 border-l-2 px-2 mb-5 mt-10">
        New Products
      </h1>
      <div className="grid space-y-3 ">
        <div className="space-y-3  ">
          <div className="relative cursor-pointer">
            <h1 className="absolute z-10 py-4 bg-white pr-5 pl-2 tracking-wide">
              Corp Top Women Sexy Shirt
            </h1>
            <p className="absolute z-10 mt-12 bg-white py-3 pr-5 pl-2 text-xs font-thin">
              $45 USD
            </p>
            <Image
              className="hover:scale-110 transition duration-300 ease-out "
              src="/corptop.jpeg"
              alt="product photo"
              width="1"
              height="1"
              layout="responsive"
            />
          </div>

          <div className="relative cursor-pointer">
            <h1 className="absolute z-10 py-4  bg-white pr-5 pl-2  tracking-wide">
              Summer Sexy T-shirt for men
            </h1>
            <p className="absolute z-10 mt-12 bg-white py-3 pr-5 pl-2 text-xs font-thin">
              $25 USD
            </p>
            <Image
              className="hover:scale-110 transition duration-300 ease-out"
              src="/TSHIRT.jpeg"
              alt="product photo"
              width="1"
              height="1"
              layout="responsive"
            />
          </div>
        </div>

        <div className="relative cursor-pointer">
          <h1 className="absolute z-10 py-4  bg-white pr-5 pl-2  tracking-wide">
            Sport jogging for men
          </h1>
          <p className="absolute z-10 mt-12 bg-white py-3 pr-5 pl-2 text-xs font-thin">
            $32 USD
          </p>
          <Image
            className="hover:scale-110 transition duration-300 ease-out "
            src="/jogging.jpeg"
            alt="product photo"
            width="1"
            height="1"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
