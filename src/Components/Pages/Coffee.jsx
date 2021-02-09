import React from 'react'
import coffee from "./../../Data/coffee.json";
import Cards from './../Card/Cards'

const Coffee = () => {
    return (
        <Cards val={coffee} title="Coffee"/>
            
        
    )
}

export default Coffee
