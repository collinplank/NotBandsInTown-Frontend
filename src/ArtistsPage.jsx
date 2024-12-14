import axios from "axios";
import { useState, useEffect } from "react";
import { ArtistsIndex } from "./ArtistsIndex";

export function ArtistsPage() {
  const [artists, setArtists] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/artists.json").then((response) => {
      console.log(response.data);
      setArtists(response.data);
    });
  };

  +useEffect(handleIndex, []);

  return (
    <main>
      <ArtistsIndex artists={artists} />
    </main>
  );
}
