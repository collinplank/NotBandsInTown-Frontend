export function ConcertsIndex({ concerts }) {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">All Concerts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {concerts.map((concert) => (
            <div
              key={concert.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800">{concert.artist}</h2>
              <p className="text-gray-600 mt-2">
                <strong>Date:</strong> {concert.date}
              </p>
              <p className="text-gray-600 mt-1">
                <strong>Venue:</strong> {concert.venue}
              </p>
              <p className="text-gray-600 mt-1">
                <strong>City:</strong> {concert.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
