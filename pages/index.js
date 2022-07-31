import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Banner />
      <div className="h-[2000px]"></div>
    </div>
  )
}
