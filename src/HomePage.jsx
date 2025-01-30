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

  return <div className="text-lg font-semibold text-gray-700">{countdown}</div>;
}

export function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="p-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 tracking-tight">Upcoming Concerts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {concerts.map((concert) => (
            <div
              key={concert.name}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 border border-gray-200"
            >
              <img
                className="w-full h-64 object-cover rounded-lg"
                src={concert.imgSrc}
                alt={`${concert.name} Concert`}
              />
              <h3 className="mt-4 text-2xl font-bold text-gray-900">{concert.name}</h3>
              <p className="text-gray-600">
                {concert.date} | {concert.venue}
              </p>
              <Countdown concertDate={concert.date} />
              <a
                href={concert.ticketLink}
                className="mt-4 block text-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-300"
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
