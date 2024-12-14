import axios from "axios";
import { useState, useEffect } from "react";
import { ArtistsIndex } from "./ArtistsIndex";
import { ArtistsNew } from "./ArtistsNew";
import { ArtistsShow } from "./ArtistsShow";
import { Modal } from "./Modal";

export function ArtistsPage() {
  const [artists, setArtists] = useState([]);
  const [isArtistsShowVisible, setIsArtistsShowVisible] = useState(false);
  const [currentArtist, setCurrentArtist] = useState({});

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

  const handleShow = (artist) => {
    console.log("handleShow", artist);
    setIsArtistsShowVisible(true);
    setCurrentArtist(artist);
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <ArtistsNew onCreate={handleCreate} />
      <ArtistsIndex artists={artists} onShow={handleShow} />
      <Modal show={isArtistsShowVisible} onClose={() => setIsArtistsShowVisible(false)}>
        <ArtistsShow artist={currentArtist} />
      </Modal>
    </main>
  );
}
