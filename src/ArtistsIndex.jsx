export function ArtistsIndex({ artists, onShow }) {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        All Artists: <span className="text-blue-500">({artists.length} total)</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="bg-blue-500 text-white p-4">
              <h2 className="text-xl font-semibold">{artist.name}</h2>
              <p className="text-sm uppercase tracking-wider">{artist.genre}</p>
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-4">{artist.bio}</p>
              <button
                onClick={() => onShow(artist)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                More Information
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
