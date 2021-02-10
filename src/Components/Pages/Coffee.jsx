import React from "react";
import coffees from "../../Data/coffee.json";
import Cards from "../Card/Cards";

const Coffee = () => {
  return (
    <React.Fragment>
      <Cards val={coffees} title="Coffee" start={0} end={20} />;
    </React.Fragment>
  );
};

export default Coffee;
