export function SetlistIndex({ setlists }) {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
          Setlists: <span className="text-blue-500">({setlists.length})</span> Total
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {setlists.map((setlist) => (
            <div
              key={setlist.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{setlist.artist}</h2>
              <p className="text-gray-600 text-sm mb-4">
                <strong>Concert:</strong> {setlist.concert}
              </p>
              <h3 className="text-gray-700 font-medium mb-2">Songs:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {setlist.songs.map((song, index) => (
                  <li key={index}>{song}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
