import React from 'react'
import dessert from "./../../Data/dessert.json";
import Cards from './../Card/Cards'

const Dessert = () => {


  
  return (
    <>
      <Cards val={dessert} title="dessert" start={0} end={20} />;
     
    </>
  );
};

export default Dessert
