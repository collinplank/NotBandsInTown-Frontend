import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

import { ArtistsShow } from "./ArtistsShow";

export function ArtistsShowPage() {
  const artist = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (artist, params) => {
    console.log("handleUpdate", params);
    axios.patch(`/artists/${artist.id}.json`, params).then(() => {
      navigate("/artists");
    });
  };

  const handleDestroy = (artist) => {
    console.log("handleDestroy", artist);
    axios.delete(`/artists/${artist.id}.json`).then(() => {
      navigate("/artists");
    });
  };

  return (
    <div>
      <ArtistsShow artist={artist} onUpdate={handleUpdate} onDestroy={handleDestroy} />
    </div>
  );
}
