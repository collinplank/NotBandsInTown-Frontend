import axios from "axios";
import { useState, useEffect } from "react";
import { ArtistsIndex } from "./assets/ARTIST/ArtistsIndex";
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

  const handleUpdate = (artist, params, successCallback) => {
    console.log("handleUpdate");
    axios.patch(`/artists/${artist.id}.json`, params).then((response) => {
      setArtists(
        artists.map((p) => {
          if (p.id === response.data.id) {
            return response.data;
          } else {
            return p;
          }
        })
      );
      successCallback();
      setIsArtistsShowVisible(false);
    });
  };

  const handleDestroy = (artist) => {
    console.log("handleDestroy", artist);
    axios.delete(`/artists/${artist.id}.json`).then(() => {
      setArtists(artists.filter((p) => p.id !== artist.id));
      setIsArtistsShowVisible(false);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <ArtistsNew onCreate={handleCreate} />
      <ArtistsIndex artists={artists} onShow={handleShow} />
      <Modal show={isArtistsShowVisible} onClose={() => setIsArtistsShowVisible(false)}>
        <ArtistsShow artist={currentArtist} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      </Modal>
    </main>
  );
}
