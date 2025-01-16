import { useEffect, useState } from "react";
import axios from "axios";
import { ConcertsIndex } from "./ConcertsIndex";

export function ArtistsShow({ artist }) {
  const [concerts, setConcerts] = useState([]);
  const [bandInfo, setBandInfo] = useState(null);
  const [error, setError] = useState("");

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
      axios
        .get(`/artists/search/${artist.name}`)
        .then((response) => {
          setBandInfo(response.data);
          setError("");
        })
        .catch((error) => {
          console.error("Error fetching artist info:", error);
          setError("Failed to fetch artist info");
        });
    }
  }, [artist]);

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-xl space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">{artist.name}</h2>
        {bandInfo && bandInfo.image_url && (
          <img
            src={bandInfo.image_url}
            alt={bandInfo.name}
            className="w-full max-w-md mx-auto rounded-lg shadow-lg border-4 border-gray-200 mb-6"
          />
        )}
        <p className="text-lg text-gray-700 font-medium mb-4">{artist.genre}</p>
        <p className="text-base text-gray-600 leading-relaxed mb-6">{artist.bio}</p>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}
      {bandInfo ? (
        <div className="bg-white p-8 rounded-lg shadow-xl space-y-6">
          <div className="space-y-4">
            <p className="text-lg text-gray-800">
              <span className="font-semibold">Upcoming concerts:</span> {bandInfo.upcoming_event_count}
            </p>
            <p className="text-lg text-gray-800">
              <span className="font-semibold">Followers:</span>
              <span className="text-lg font-bold ml-2">{bandInfo.tracker_count.toLocaleString()}</span>
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow on social media:</h3>
            <div className="flex space-x-6">
              {bandInfo.links.map((link) => (
                <a
                  key={link.type}
                  href={link.url}
                  className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 text-gray-600 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300"
                  aria-label={link.type}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${link.type} text-2xl`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 mt-4 text-center">Loading Bandsintown info...</p>
      )}

      <div className="mt-12">
        <div className="bg-gray-50 p-8 rounded-lg shadow-xl">
          <ConcertsIndex concerts={concerts} />
        </div>
      </div>
    </div>
  );
}
