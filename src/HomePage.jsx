export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <div className="flex justify-between items-center px-6 py-4 bg-gray-100 border-b">
        <input
          type="text"
          placeholder="Search events, artists, or venues"
          className="px-6 py-3 w-80 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <div>
          <input
            type="text"
            placeholder="Enter your location"
            className="px-6 py-3 w-80 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button className="ml-4 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Set Location
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 px-6 py-12">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-purple-600">Find Your Next Concert</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-6xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img
              className="w-full h-56 object-cover rounded-lg"
              src="https://media.pitchfork.com/photos/671ff8f08b6b29b326c1869e/2:1/w_2560%2Cc_limit/Fontaines-DC.jpg"
              alt="Fontaines D.C. Concert"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Fontaines D.C.</h3>
            <p className="mt-2 text-gray-600 mb-4">April 30, 2025 | Marathon Music Works, Nashville, TN</p>{" "}
            <a
              href="https://www.ticketweb.com/event/fontaines-dc-usa-tour-2025-marathon-music-works-tickets/13935423?pl=marathonmusicworks&edpPlParam=%3Fpl%3Dmarathonmusicworks"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-center"
            >
              Buy Tickets
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img
              className="w-full h-56 object-cover rounded-lg"
              src="https://i.scdn.co/image/ab6761610000e5eb6fc940f2e99875ced9bafed0"
              alt="Kings of Leon"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Kings of Leon</h3>
            <p className="mt-2 text-gray-600 mb-4">September 26, 2024 | Bridgestone Arena, Nashville, TN</p>{" "}
            <button className="mt-auto px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Buy Tickets
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img
              className="w-full h-56 object-cover rounded-lg"
              src="https://i.scdn.co/image/ab6761610000e5eb7da39dea0a72f581535fb11f"
              alt="Arctic Monkeys"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Arctic Monkeys</h3>
            <p className="mt-2 text-gray-600 mb-4">September 12, 2023 | Ascend Amphitheater, Nashville, TN</p>{" "}
            <button className="mt-auto px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Buy Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
