import Hello from "@/components/hello";
import React from "react";

const Home = () => {
    console.log("Am a server component called Home()!");
    return (
        <main>
            <Hello></Hello>
            <div>Hello Welcome back</div>
        </main>
    );
};

export default Home;
