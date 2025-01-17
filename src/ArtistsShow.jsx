import { useEffect, useState } from "react";
import axios from "axios";
import { ConcertsIndex } from "./ConcertsIndex";

export function ArtistsShow({ artist }) {
  const [concerts, setConcerts] = useState([]);
  const [bandInfo, setBandInfo] = useState(null);

  useEffect(() => {
    if (artist?.id) {
      axios
        .get(`/artists/${artist.id}/concerts.json`)
        .then((response) => {
          setConcerts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching concerts:", error);
        });
    }

    if (artist?.name) {
      axios.get(`/artists/search/${artist.name}`).then((response) => {
        setBandInfo(response.data);
      });
    }
  }, [artist]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative bg-gray-800 text-white h-[400px] md:h-[500px] overflow-hidden">
        {bandInfo?.image_url && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bandInfo.image_url})`,
            }}
          ></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900 opacity-90"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">{artist.name}</h1>
          <p className="text-lg md:text-xl mt-2">{artist.genre}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-8 space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">About the Band</h2>
          <p className="text-gray-700">{artist.bio}</p>
        </div>

        {bandInfo && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Band Stats</h3>
              <p>
                <strong>Upcoming Concerts:</strong> {bandInfo.upcoming_event_count}
              </p>
              <p>
                <strong>Followers:</strong> {bandInfo.tracker_count.toLocaleString()}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Follow on Social Media</h3>
              <div className="flex flex-wrap gap-4">
                {bandInfo.links.map((link) => {
                  const platformData = {
                    facebook: { color: "bg-blue-600 hover:bg-blue-700", icon: "fa-facebook-f" },
                    twitter: { color: "bg-sky-500 hover:bg-sky-600", icon: "fa-twitter" },
                    instagram: { color: "bg-pink-500 hover:bg-pink-600", icon: "fa-instagram" },
                    youtube: { color: "bg-red-500 hover:bg-red-600", icon: "fa-youtube" },
                    spotify: { color: "bg-green-500 hover:bg-green-600", icon: "fa-spotify" },
                    default: { color: "bg-gray-500 hover:bg-gray-600", icon: "fa-link" },
                  };

                  const { color, icon } = platformData[link.type] || platformData.default;

                  return (
                    <a
                      key={link.type}
                      href={link.url}
                      className={`flex items-center justify-center w-12 h-12 text-white rounded-full shadow-lg transform transition-all duration-300 ${color}`}
                      aria-label={`Follow on ${link.type}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`fab ${icon} text-2xl`} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Upcoming Concerts</h3>
          {concerts.length > 0 ? <ConcertsIndex concerts={concerts} /> : <p>No concerts available.</p>}
        </div>
      </div>
    </div>
  );
}
