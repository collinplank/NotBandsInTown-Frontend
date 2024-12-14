export function ArtistsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Artist</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Genre: <input name="genre" type="text" />
        </div>
        <div>
          Bio: <input name="bio" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
