import React from "react";
import Hero from "../Components/Hero/Hero.jsx";
import Products from "../Components/Products/Products.jsx";
import Offers from "../Components/Offers/Offers.jsx";
import data_popular from "../Components/assets/data.js";
import data_new_collection from "../Components/assets/new_collections.js";
import NewsLetter from "../Components/NewsLetter/NewsLetter.jsx";

export default function Shop() {
  return (
    <>
      <Hero />
      <Products title="POPULAR IN MEN" data_set={data_popular} />
      <Offers />
      <Products title="NEW COLLECTION" data_set={data_new_collection} />
      <NewsLetter />
    </>
  );
}
