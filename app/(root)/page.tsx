import Hello from "@/components/hello";
import React from "react";
import Link from "next/link";

const Home = () => {
    console.log("Am a server component called Home()!");
    return (
        <main>
            <Hello></Hello>
            <div>Hello Welcome back</div>
            <Link href="/dashboard/users">Go to Users</Link>
        </main>
    );
};

export default Home;
