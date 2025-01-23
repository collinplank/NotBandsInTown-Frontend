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
    <div className="mt-4 p-4 bg-purple-100 rounded-lg flex flex-col items-center space-y-2">
      <p className="text-sm text-gray-700 uppercase tracking-wide">Countdown to Show</p>
      <p className="text-2xl font-bold text-purple-700 mt-1">{countdown}</p>
    </div>
  );
}

function LocationInput({ location, setLocation, onSubmit }) {
  return (
    <div className="flex items-center">
      {!location ? (
        <>
          <input
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-6 py-3 w-80 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button onClick={onSubmit} className="ml-4 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Set Location
          </button>
        </>
      ) : (
        <button className="ml-4 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">{location}</button>
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
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <div className="flex justify-between items-center px-6 py-4 bg-gray-100 border-b">
        <form action="/artists">
          <input
            name="name"
            type="text"
            placeholder="Search events, artists, or venues"
            className="px-6 py-3 w-80 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </form>

        <LocationInput location={location} setLocation={setLocation} onSubmit={handleSubmitLocation} />
      </div>

      <div className="flex flex-col items-center justify-center flex-1 px-6 py-12">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-purple-600">Find Your Next Concert</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-6xl mx-auto">
          {concerts.map((concert) => (
            <div key={concert.name} className="bg-white p-4 rounded-lg shadow-lg overflow-hidden flex flex-col">
              <img
                className="w-full h-56 object-cover rounded-lg"
                src={concert.imgSrc}
                alt={`${concert.name} Concert`}
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{concert.name}</h3>
              <p className="mt-2 text-gray-600">
                {concert.date} | {concert.venue}
              </p>
              <Countdown concertDate={concert.date} />
              <a
                href={concert.ticketLink}
                className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-center"
              >
                Buy Tickets
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
