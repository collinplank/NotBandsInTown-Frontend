export function ArtistsShow({ artist, onUpdate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(artist, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Artist Information</h1>
      <p>{artist.name}</p>
      <p>{artist.genre}</p>
      <p>{artist.bio}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={artist.name} name="name" type="text" />
        </div>
        <div>
          Genre: <input defaultValue={artist.genre} name="genre" type="text" />
        </div>
        <div>
          Bio: <input defaultValue={artist.bio} name="bio" type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
