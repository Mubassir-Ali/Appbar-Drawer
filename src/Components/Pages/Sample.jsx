import React, { useState } from "react";
import coffee from "../../Data/coffee.json";

import Cards from "../Card/Cards";
import { Paper, Box, makeStyles, Button } from "@material-ui/core";


const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 300,
    backgroundColor: theme.palette.grey.A400,
  },
}));

const totalItems = coffee.length;
const pageItemSize = 20;
const pages = Math.ceil(totalItems / pageItemSize);

const Coffee = () => {
  const classes = useStyle();
  const [startSlice, setStartSlice] = useState(0);
  const [endSlice, setEndSlice] = useState(pageItemSize);

  const plist = [];
  for (let i = 1; i <= pages; i++) {
    plist.push(i);
  }



  const pageHandler = (index) => {
    setStartSlice(index * pageItemSize);
    console.log(index * pageItemSize);
    console.log(index * pageItemSize + pageItemSize);
    setEndSlice(index * pageItemSize + pageItemSize);
  };
  return (
    <>
      <Cards val={coffee} title="Coffee" start={startSlice} end={endSlice} />;
      <Paper component={Box} className={classes.root}>
        {plist.map((page, index) => (
          <Button key={index} onClick={() => pageHandler(index)}>
            {page}
          </Button>
        ))}
      </Paper>
    </>
  );
};

export default Coffee;
