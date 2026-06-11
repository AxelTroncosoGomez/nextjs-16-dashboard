export default async function Home() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    if (!response.ok) throw new Error("Failed to fetch data");

    const albums = await response.json();

    return (
        // Create a grid view mapping those albums
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col">
            {albums.map((album: { id: number; title: string }) => (
                <div
                    key={album.id}
                    className="bg-gray-800 shadow-md rounded-lg p-4 m-2.5"
                >
                    <h3 className="text-lg font-bold mb-2">{album.title}</h3>
                    <p className="text-gray-600">Album ID: {album.id}</p>
                </div>
            ))}
        </div>
    );
}
