export function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-purple-600 to-blue-500 text-white">
      <div className="w-full max-w-7xl px-6 py-12 text-center">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Find Your Next Concert</h1>
        <p className="text-xl mb-8"></p>
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search events, artists, or venues"
            className="px-6 py-3 w-80 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button className="ml-4 px-6 py-3 bg-purple-700 text-white rounded-lg hover:text-yellow-400">Search</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover rounded-lg"
              src="https://via.placeholder.com/400x250"
              alt="Event 1"
            />
            <h3 className="mt-4 text-2xl font-semibold">Concert Name</h3>
            <p className="mt-2 text-gray-600">Date & Time | Location</p>
            <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Buy Tickets
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover rounded-lg"
              src="https://via.placeholder.com/400x250"
              alt="Event 2"
            />
            <h3 className="mt-4 text-2xl font-semibold">Concert Name</h3>
            <p className="mt-2 text-gray-600">Date & Time | Location</p>
            <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Buy Tickets
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover rounded-lg"
              src="https://via.placeholder.com/400x250"
              alt="Event 3"
            />
            <h3 className="mt-4 text-2xl font-semibold">Concert Name</h3>
            <p className="mt-2 text-gray-600">Date & Time | Location</p>
            <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Buy Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
