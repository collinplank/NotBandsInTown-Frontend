import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ArtistsNew } from "./ArtistsNew";

export function ArtistsNewPage() {
  const navigate = useNavigate();

  const handleCreate = (params) => {
    console.log("handleCreate", params);
    axios.post("/artists.json", params).then((response) => {
      console.log(response);
      navigate("/artists");
    });
  };

  return (
    <div>
      <ArtistsNew onCreate={handleCreate} />
    </div>
  );
}
