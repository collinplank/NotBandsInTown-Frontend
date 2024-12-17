export function ArtistsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Submit a New Artist</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <fieldset>
          <legend className="sr-only">New Artist Form</legend>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
              Name:
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter artist name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="genre">
              Genre:
            </label>
            <input
              name="genre"
              type="text"
              id="genre"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter artist genre"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="bio">
              Bio:
            </label>
            <textarea
              name="bio"
              id="bio"
              rows="5"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write a short bio about the artist"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Create
          </button>
        </fieldset>
      </form>
    </div>
  );
}
