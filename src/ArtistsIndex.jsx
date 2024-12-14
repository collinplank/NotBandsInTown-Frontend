export function ArtistsIndex({ artists }) {
  return (
    <div>
      <h1>All Artists: ({artists.length} total)</h1>
      {artists.map((artist) => (
        <div key={artist.id}>
          <h2>{artist.name}</h2>
          <p>{artist.genre}</p>
          <p>{artist.bio}</p>
        </div>
      ))}
    </div>
  );
}
