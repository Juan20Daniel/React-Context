import React from "react";
import { useUser } from "../Context/user-context";
const Home = () => {
    const { user } = useUser();
    console.log(user);
    return (
        <h1>Home</h1>
    ); 
}

export default Home; 