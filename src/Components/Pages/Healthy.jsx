import React from 'react'
import healthy from "./../../Data/healthy.json";
import Cards from "./../Card/Cards";

const Healthy = () => {

  
  return (
    <>
      <Cards val={healthy} title="healthy" start={0} end={20} />;
      
    </>
  );
};
export default Healthy
