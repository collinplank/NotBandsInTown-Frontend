export function ArtistsShow({ artist, onUpdate, onDestroy }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(artist, params, () => event.target.reset());
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Artist Information</h1>

      <div className="mb-6">
        <p className="text-lg font-semibold text-gray-700">
          <span className="font-normal">{artist.name}</span>
        </p>
        <p className="text-lg font-semibold text-gray-700">
          <span className="font-normal">{artist.genre}</span>
        </p>
        <p className="text-lg font-semibold text-gray-700">
          <span className="font-normal">{artist.bio}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name:</label>
          <input
            name="name"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Genre:</label>
          <input
            name="genre"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Bio:</label>
          <textarea
            name="bio"
            rows="5"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
          Update
        </button>
      </form>

      <button
        onClick={() => onDestroy(artist)}
        className="mt-4 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors"
      >
        Delete
      </button>
    </div>
  );
}
