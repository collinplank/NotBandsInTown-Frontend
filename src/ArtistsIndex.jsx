export function ArtistsIndex({ artists, onShow }) {
  return (
    <div>
      <h1>All Artists: ({artists.length} total)</h1>
      {artists.map((artist) => (
        <div key={artist.id}>
          <h2>{artist.name}</h2>
          <p>{artist.genre}</p>
          <p>{artist.bio}</p>
          <button onClick={() => onShow(artist)}>More Information</button>
        </div>
      ))}
    </div>
  );
}
