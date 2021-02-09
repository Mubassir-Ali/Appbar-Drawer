import React from 'react'
import meat from "./../../Data/meat.json";
import Cards from './../Card/Cards'
const Meat = () => {
    return (
        <Cards val={meat} title="Meat" />
    )
}

export default Meat
