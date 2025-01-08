import { useEffect, useState } from "react";
import axios from "axios";
import { ConcertsIndex } from "./ConcertsIndex";

export function ArtistsShow({ artist, onUpdate, onDestroy }) {
  const [concerts, setConcerts] = useState([]);

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
  }, [artist]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(artist, params, () => event.target.reset());
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-xl space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">Artist Information</h1>

      <div className="bg-gray-50 p-8 rounded-lg shadow-md">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">{artist.name}</h2>
        <p className="text-xl text-gray-600 mb-4">{artist.genre}</p>
        <p className="text-base text-gray-700 leading-relaxed">{artist.bio}</p>
      </div>

      <div className="mt-12">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-6">Upcoming Concerts</h3>

        <div className="bg-gray-50 p-8 rounded-lg shadow-xl">
          <ConcertsIndex concerts={concerts} />
        </div>
      </div>

      <div className="flex justify-center space-x-8 mt-12">
        <a
          href="https://instagram.com"
          className="text-gray-500 hover:text-yellow-400 transition duration-300"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a
          href="https://twitter.com"
          className="text-gray-500 hover:text-yellow-400 transition duration-300"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a
          href="https://facebook.com"
          className="text-gray-500 hover:text-yellow-400 transition duration-300"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook text-2xl"></i>
        </a>
      </div>

      <div className="flex justify-center space-x-6 mt-12">
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-xs">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Update
          </button>
        </form>

        <button
          onClick={() => onDestroy(artist)}
          className="w-full bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
