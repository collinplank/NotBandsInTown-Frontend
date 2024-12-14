import axios from "axios";
import { useState, useEffect } from "react";
import { ArtistsIndex } from "./ArtistsIndex";
import { ArtistsNew } from "./ArtistsNew";

export function ArtistsPage() {
  const [artists, setArtists] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/artists.json").then((response) => {
      console.log(response.data);
      setArtists(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate");
    axios.post("/artists.json", params).then((response) => {
      setArtists([...artists, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <ArtistsNew onCreate={handleCreate} />
      <ArtistsIndex artists={artists} />
    </main>
  );
}
