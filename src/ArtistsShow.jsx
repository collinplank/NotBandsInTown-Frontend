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
        const [concertsRes, bandInfoRes, spotifyInfoRes] = await Promise.all([
          axios.get(`/artists/${artist.id}/concerts.json`),
          axios.get(`/artists/search/${artist.name}`),
          axios.get(`/spotify/${artist.name}`),
        ]);

        setConcerts(concertsRes.data);
        setBandInfo(bandInfoRes.data);
        setSpotifyInfo(spotifyInfoRes.data);
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
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header artist={artist} bandInfo={bandInfo} />
      <div className="max-w-6xl mx-auto p-8 space-y-8">
        <AboutSection bio={artist.bio} />
        <BandOverview bandInfo={bandInfo} spotifyInfo={spotifyInfo} />
        <ConcertsSection concerts={concerts} />
      </div>
    </div>
  );
}

const Header = ({ artist, bandInfo }) => (
  <div className="relative bg-gray-800 text-white h-[400px] md:h-[500px] overflow-hidden">
    {bandInfo?.image_url && (
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bandInfo.image_url})` }}
      ></div>
    )}
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900 opacity-90"></div>
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold">{artist.name}</h1>
      <p className="text-lg md:text-xl mt-2">{artist.genre}</p>
    </div>
  </div>
);

const AboutSection = ({ bio }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">About the Band</h2>
    <p className="text-gray-700">{bio}</p>
  </div>
);

const BandOverview = ({ bandInfo, spotifyInfo }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <BandStats bandInfo={bandInfo} />
    <FollowOnSocialMedia bandInfo={bandInfo} />
    <SpotifyInfo spotifyInfo={spotifyInfo} />
  </div>
);

const BandStats = ({ bandInfo }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <h3 className="text-2xl font-semibold mb-4">Band Stats</h3>
    <p className="text-lg">
      <strong className="text-gray-600">Upcoming Concerts:</strong>{" "}
      <span className="text-red-500">{bandInfo.upcoming_event_count}</span>
    </p>
    <p className="text-lg">
      <strong className="text-gray-600">Followers:</strong>{" "}
      <span className="text-red-500">{bandInfo.tracker_count.toLocaleString()}</span>
    </p>
    <a
      href={`https://www.bandsintown.com/a/${bandInfo.id}`}
      className="inline-block mt-6 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fas fa-music mr-2"></i> View on Bandsintown
    </a>
  </div>
);

const FollowOnSocialMedia = ({ bandInfo }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <h3 className="text-2xl font-semibold mb-4">Follow on Social Media</h3>
    <div className="flex flex-wrap gap-4 justify-center">
      {bandInfo.links.map((link) => (
        <SocialLink key={link.type} link={link} />
      ))}
    </div>
  </div>
);

const SocialLink = ({ link }) => {
  const platformIcons = {
    facebook: "fa-facebook-f text-blue-600",
    twitter: "fa-twitter text-sky-500",
    instagram: "fa-instagram text-pink-500",
    youtube: "fa-youtube text-red-500",
    spotify: "fa-spotify text-green-500",
    website: "fa-globe text-gray-800",
  };

  return (
    <a
      href={link.url}
      className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 shadow-md hover:shadow-lg transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={`fab ${platformIcons[link.type] || "fa-link text-gray-600"} text-2xl`} />
    </a>
  );
};

const SpotifyInfo = ({ spotifyInfo }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Spotify Info</h3>
    <div className="flex-grow w-full">
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

const ConcertsSection = ({ concerts }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    {concerts.length > 0 ? <ConcertsIndex concerts={concerts} /> : <p>No concerts available.</p>}
  </div>
);

const LoadingScreen = () => (
  <div className="flex justify-center items-center min-h-screen bg-white">
    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-gray-800"></div>
  </div>
);

const ErrorMessage = ({ message }) => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="bg-red-100 text-red-800 p-4 rounded-lg shadow-md">{message}</div>
  </div>
);
