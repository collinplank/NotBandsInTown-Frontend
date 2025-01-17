export function ArtistsIndex({ artists, onShow }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
        All Artists: <span className="text-blue-500">({artists.length} total)</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {artist.image_url ? (
              <img src={artist.image_url} alt={`Image of ${artist.name}`} className="w-full h-64 object-cover" />
            ) : null}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center mb-2">
                <h2 className="text-2xl font-bold text-gray-800 mr-2">{artist.name}</h2>
                <span className="text-yellow-500 text-1g">★</span>
              </div>
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">{artist.genre}</p>

              <button
                onClick={() => onShow(artist)}
                className="mt-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
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
