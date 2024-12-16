export function ArtistsShow({ artist, onUpdate, onDestroy }) {
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
          Name: <input name="name" type="text" />
        </div>
        <div>
          Genre: <input name="genre" type="text" />
        </div>
        <div>
          Bio: <textarea name="bio" rows="5" cols="40"></textarea>
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={() => onDestroy(artist)}>Delete</button>
    </div>
  );
}
