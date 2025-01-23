import { useState, useEffect } from "react";

const concerts = [
  {
    name: "Fontaines D.C.",
    date: "April 30, 2025",
    venue: "Marathon Music Works, Nashville, TN",
    imgSrc: "https://media.pitchfork.com/photos/671ff8f08b6b29b326c1869e/2:1/w_2560%2Cc_limit/Fontaines-DC.jpg",
    ticketLink:
      "https://www.ticketweb.com/event/fontaines-dc-usa-tour-2025-marathon-music-works-tickets/13935423?pl=marathonmusicworks&edpPlParam=%3Fpl%3Dmarathonmusicworks",
  },
  {
    name: "Kings of Leon",
    date: "September 26, 2024",
    venue: "Bridgestone Arena, Nashville, TN",
    imgSrc: "https://i.scdn.co/image/ab6761610000e5eb6fc940f2e99875ced9bafed0",
  },
  {
    name: "Arctic Monkeys",
    date: "September 12, 2023",
    venue: "Ascend Amphitheater, Nashville, TN",
    imgSrc: "https://i.scdn.co/image/ab6761610000e5eb7da39dea0a72f581535fb11f",
  },
];

function Countdown({ concertDate }) {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const concertTime = new Date(concertDate);
    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = concertTime - now;

      if (timeDifference <= 0) {
        setCountdown("The show has started!");
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const intervalId = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(intervalId);
  }, [concertDate]);

  return (
    <div className="mt-4 p-6 bg-white rounded-lg flex flex-col items-center space-y-2 shadow-md">
      <p className="text-sm text-purple-600 uppercase tracking-wide">Countdown to Show</p>
      <p className="text-2xl font-semibold text-blue-800">{countdown}</p>
    </div>
  );
}

function LocationInput({ location, setLocation, onSubmit }) {
  return (
    <div className="flex items-center space-x-4">
      {!location ? (
        <>
          <input
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-6 py-3 w-80 rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 ease-in-out"
          />
          <button
            onClick={onSubmit}
            className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition duration-200 ease-in-out"
          >
            Set Location
          </button>
        </>
      ) : (
        <button className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition duration-200 ease-in-out">
          {location}
        </button>
      )}
    </div>
  );
}

export function HomePage() {
  const [location, setLocation] = useState("");

  const handleSubmitLocation = () => {
    setLocation(location);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <header className="flex justify-between items-center px-8 py-6 bg-white shadow-md">
        <form action="/artists">
          <input
            name="name"
            type="text"
            placeholder="Search events, artists, or venues"
            className="px-6 py-3 w-80 rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 ease-in-out"
          />
        </form>

        <LocationInput location={location} setLocation={setLocation} onSubmit={handleSubmitLocation} />
      </header>

      <main className="flex flex-col items-center justify-center flex-1 px-8 py-12">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-8">Find Your Next Concert</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
          {concerts.map((concert) => (
            <div
              key={concert.name}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              <img
                className="w-full h-56 object-cover rounded-lg"
                src={concert.imgSrc}
                alt={`${concert.name} Concert`}
              />
              <h3 className="mt-4 text-2xl font-semibold text-blue-900">{concert.name}</h3>
              <p className="mt-2 text-gray-600">
                {concert.date} | {concert.venue}
              </p>
              <Countdown concertDate={concert.date} />
              <a
                href={concert.ticketLink}
                className="mt-4 block text-center px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-200 ease-in-out"
              >
                Buy Tickets
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
