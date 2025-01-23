import { useEffect, useState } from "react";
import axios from "axios";
import { ConcertsIndex } from "./ConcertsIndex";

export function ArtistsShow({ artist }) {
  const [concerts, setConcerts] = useState([]);
  const [bandInfo, setBandInfo] = useState(null);
  const [spotifyInfo, setSpotifyInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!artist?.id || !artist?.name) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const concertsResponse = await axios.get(`/artists/${artist.id}/concerts.json`);
        setConcerts(concertsResponse.data);

        const bandInfoResponse = await axios.get(`/artists/search/${artist.name}`);
        setBandInfo(bandInfoResponse.data);

        const spotifyInfoResponse = await axios.get(`/spotify/${artist.name}`);
        setSpotifyInfo(spotifyInfoResponse.data);
      } catch (err) {
        setError("Error fetching data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [artist]);

  if (loading) return <LoadingScreen />;
  if (error) return <div>{error}</div>;

  return (
    <div className={`bg-gray-100 min-h-screen ${loading ? "bg-white" : ""}`}>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BandStats bandInfo={bandInfo} />
            <FollowOnSocialMedia bandInfo={bandInfo} />
            <SpotifyInfo spotifyInfo={spotifyInfo} />
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow-md">
          {concerts.length > 0 ? <ConcertsIndex concerts={concerts} /> : <p>No concerts available.</p>}
        </div>
      </div>
    </div>
  );
}

const BandStats = ({ bandInfo }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
    <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">Band Stats</h3>
    <p className="text-lg">
      <strong className="text-gray-600">Upcoming Concerts:</strong>{" "}
      <span className="text-green-600">{bandInfo.upcoming_event_count}</span>
    </p>
    <p className="text-lg">
      <strong className="text-gray-600">Followers:</strong>{" "}
      <span className="text-yellow-500">{bandInfo.tracker_count.toLocaleString()}</span>
    </p>
  </div>
);

const FollowOnSocialMedia = ({ bandInfo }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
    <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">Follow on Social Media</h3>
    <div className="flex flex-wrap gap-4 justify-center">
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
);

const SpotifyInfo = ({ spotifyInfo }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
    <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">Spotify Info</h3>
    <div className="flex-grow">
      <p className="text-lg">
        <strong className="text-gray-600">Followers:</strong>{" "}
        <span className="text-green-600">{spotifyInfo.followers ? spotifyInfo.followers.toLocaleString() : "N/A"}</span>
      </p>
      <p className="text-lg">
        <strong className="text-gray-600">Popularity:</strong>{" "}
        <span className="text-yellow-500">{spotifyInfo.popularity || "N/A"}</span>
      </p>
    </div>
    <a
      href={spotifyInfo.spotify_url}
      className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fas fa-headphones mr-2"></i> Listen on Spotify
    </a>
  </div>
);

const LoadingScreen = () => {
  const [barHeights, setBarHeights] = useState([30, 40, 50, 60, 70]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBarHeights((prevHeights) => prevHeights.map(() => Math.floor(Math.random() * (80 - 30 + 1)) + 30));
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex space-x-2">
        {barHeights.map((height, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-blue-500 to-purple-500 rounded-md"
            style={{
              width: "10px",
              height: `${height}px`,
              animation: "wave 0.4s ease-in-out infinite",
              animationDelay: `${index * 0.1}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
