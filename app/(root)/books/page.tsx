export default async function Books() {
    const response = await fetch("http://localhost:3000/api/books");
    if (!response.ok) throw new Error("Failed to fetch data");

    const books = await response.json();

    return (
        // Create a grid view mapping those books
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col">
            {books.map((book: { id: number; title: string }) => (
                <div
                    key={book.id}
                    className="bg-gray-800 shadow-md rounded-lg p-4 m-2.5"
                >
                    <h3 className="text-lg font-bold mb-2">{book.title}</h3>
                    <p className="text-gray-600">book ID: {book.id}</p>
                </div>
            ))}
        </div>
    );
}
