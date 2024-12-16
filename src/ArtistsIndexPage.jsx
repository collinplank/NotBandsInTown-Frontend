import { useLoaderData, useNavigate } from "react-router-dom";

import { ArtistsIndex } from "./ArtistsIndex";

export function ArtistsIndexPage() {
  const artists = useLoaderData();
  const navigate = useNavigate();

  const handleShow = (artist) => {
    console.log("handleShow", artist);
    navigate(`/artists/${artist.id}`);
  };

  return (
    <div>
      <ArtistsIndex artists={artists} onShow={handleShow} />
    </div>
  );
}
