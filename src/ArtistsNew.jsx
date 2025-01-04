export function ArtistsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Submit a New Artist</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <fieldset>
            <legend className="sr-only">New Artist Form</legend>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                Artist Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter artist name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="genre">
                Genre
              </label>
              <input
                name="genre"
                type="text"
                id="genre"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter artist genre"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="bio">
                Artist Bio
              </label>
              <textarea
                name="bio"
                id="bio"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write a short bio about the artist"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md shadow-md hover:bg-blue-600 transition-all duration-200"
            >
              Create
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
