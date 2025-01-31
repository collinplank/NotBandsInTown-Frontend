export function ArtistsIndex({ artists = [], onShow }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-gray-50 min-h-screen">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-16 text-center">
        Favorite Artists <span className="text-blue-600">({artists.length})</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} onShow={onShow} />
        ))}
      </div>
    </div>
  );
}

function ArtistCard({ artist, onShow }) {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {artist.image_url ? (
        <img src={artist.image_url} alt={`Image of ${artist.name}`} className="w-full h-64 object-cover" />
      ) : (
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">No Image Available</div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <h2 className="text-2xl font-semibold text-gray-900">{artist.name}</h2>
          <span className="text-yellow-500 text-2xl">★</span>
        </div>
        <p className="text-sm text-gray-600 uppercase tracking-wide mb-4">{artist.genre}</p>

        <button
          onClick={() => onShow(artist)}
          className="mt-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
        >
          More Information
        </button>
      </div>
    </div>
  );
}
