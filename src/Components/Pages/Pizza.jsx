import React from 'react'
import pizza from "./../../Data/pizza.json";
import Cards from './../Card/Cards'


const Pizza = () => {

  return (
    <>
      <Cards val={pizza} title="pizza" start={0} end={20} />;
      
    </>
  );
};

export default Pizza
