import { useState } from "react";
import { PlantContext } from "./PlantContext";
import PLANTS from "../data";

const PlantProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const plants = [...PLANTS]

    const value = {
        plants,
        cart,
        setCart,
    };
    
    return (
        <PlantContext.Provider value={value}>{children}</PlantContext.Provider>
    )
}

export default PlantProvider;