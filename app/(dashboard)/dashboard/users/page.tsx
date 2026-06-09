import Link from "next/link";

const Users = () => {
    console.log("Am a Client component called Hello()!");
    return (
        <div>
            <h1>Here comes the users</h1>
            <ul>
                <li>
                    <Link href="/dashboard/users/user-1">User 1</Link>
                </li>
                <li>
                    <Link href="/dashboard/users/user-2">User 2</Link>
                </li>
                <li>
                    <Link href="/dashboard/users/user-3">User 3</Link>
                </li>
            </ul>
        </div>
    );
};

export default Users;
