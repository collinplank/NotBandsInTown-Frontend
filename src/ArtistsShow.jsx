export function ArtistsShow({ artist }) {
  return (
    <div>
      <h1>Artist Information</h1>
      <p>{artist.name}</p>
      <p>{artist.genre}</p>
      <p>{artist.bio}</p>
    </div>
  );
}
