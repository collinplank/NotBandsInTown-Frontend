export function ConcertsIndex({ concerts }) {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">All Concerts</h1>

        {concerts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {concerts.map((concert) => (
              <div
                key={concert.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="bg-blue-500 text-white p-4">
                  <h2 className="text-lg font-semibold">{concert.artist}</h2>
                  <p className="text-sm mt-1">
                    <strong>Date:</strong> {concert.date}
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-2">
                    <strong>Venue:</strong> {concert.venue}
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>City:</strong> {concert.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 mt-12">
            <p>No concerts available at the moment. Check back later!</p>
          </div>
        )}
      </div>
    </div>
  );
}
