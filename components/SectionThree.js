import React from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";

export default function SectionThree() {
  return (
    <div className="md:grid md:grid-cols-4 md:space-x-10 mx-8 mt-5 md:mt-3 ">
      <div className=" col-span-1 text-5xl">
        Dessert dragée halvah croissant.
      </div>
      <div className=" col-span-3 grid ">
        <p className="text-sm my-2 row-span-3">
          Cupcake ipsum dolor sit amet lemon drops pastry cotton candy. Sweet
          carrot cake macaroon bonbon croissant fruitcake jujubes macaroon oat
          cake. Soufflé bonbon caramels jelly beans. Tiramisu sweet roll
          cheesecake pie carrot cake.
        </p>

        <div className="flex space-x-10 cursor-pointer  w-[190px]  transition duration-300 ease-out active:scale-95  ">
          <p className="text-lg md:pl-3 lg:pl-0 self-end">Read More.</p>
          <ArrowRightIcon className="h-6 w-6 self-end" />
        </div>
      </div>
    </div>
  );
}
