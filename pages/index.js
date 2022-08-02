import React, {useEffect, useState} from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Navigation from "../components/Navigation";
import Section from "../components/Section";

export default function Home({data}) {
  
  return (
    <div>
      <Navigation />
      <Banner />
      <Cards data={data}/>
      <Section />
    </div>
  )
}

export async function getStaticProps () {
  
  const res = await fetch('https://my-json-server.typicode.com/chakib2002/json-server/topsellingproducts');
  const data = await res.json();

  return {
    props : {
      data,
    }
  }
}

