import React, { useEffect, useState } from "react";
import AutoPlayCarrousel from "../components/AutoPlayCarrousel";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import SectionOne from "../components/SectionOne";
import SectionThree from "../components/SectionThree";
import SectionTwo from "../components/SectionTwo";

export default function Home({ data }) {
  return (
    <div>
      <Navigation />
      <Banner />
      <Cards data={data} />
      <SectionOne />
      <SectionTwo />
      <AutoPlayCarrousel />
      <SectionThree />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://my-json-server.typicode.com/chakib2002/json-server/topsellingproducts"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
