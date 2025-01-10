import { useLoaderData, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { ArtistsIndex } from "./ArtistsIndex";

export function ArtistsIndexPage() {
  let artists = useLoaderData();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const filterName = searchParams.get("name");
  if (filterName) {
    artists = artists.filter((artist) => artist.name.toLowerCase().includes(filterName.toLowerCase()));
  }

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
