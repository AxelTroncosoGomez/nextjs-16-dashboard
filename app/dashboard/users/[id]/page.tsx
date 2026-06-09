import Link from "next/link";

const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    return (
        <div>
            <h1>User Details for user {id}</h1>
            <Link href="/">Back to Home</Link>
        </div>
    );
};

export default UserDetails;
