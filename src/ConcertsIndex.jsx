export function ConcertsIndex({ concerts }) {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-10 text-center tracking-tight">All Concerts</h1>

        {concerts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {concerts.map((concert) => (
              <div
                key={concert.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40 rounded-t-xl"></div>
                </div>

                <div className="p-6 space-y-4">
                  <h2 className="text-3xl font-semibold text-gray-900">{concert.artist}</h2>
                  <div className="text-sm text-gray-600">
                    <h1>
                      <strong>{concert.venue}</strong>
                    </h1>
                    <p>{concert.date}</p>
                    <p>{concert.city}</p>
                  </div>
                  <div className="mt-6">
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 transform hover:scale-105">
                      Buy Tickets
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 mt-12">
            <p className="text-lg">No concerts available at the moment. Check back later!</p>
          </div>
        )}
      </div>
    </div>
  );
}
