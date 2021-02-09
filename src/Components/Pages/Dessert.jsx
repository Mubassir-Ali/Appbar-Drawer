import React from 'react'
import dessert from "./../../Data/dessert.json";
import Cards from './../Card/Cards'

const Dessert = () => {
    return (
        <Cards val={dessert} title="Dessert" />
    )
}

export default Dessert
