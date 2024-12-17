export function ArtistsIndex({ artists, onShow }) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">All Artists: ({artists.length} total)</h1>

      {artists.map((artist) => (
        <div key={artist.id} className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">{artist.name}</h2>
          <p className="text-gray-600 mb-1">
            <span className="font-medium"></span> {artist.genre}
          </p>
          <p className="text-gray-600 mb-4">{artist.bio}</p>

          <button
            onClick={() => onShow(artist)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded transition-colors"
          >
            More Information
          </button>
        </div>
      ))}
    </div>
  );
}
