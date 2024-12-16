export function ArtistsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Submit a New Artist</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend></legend>
          <div>
            <label>
              Name:
              <br />
              <input name="name" type="text" />
            </label>
          </div>
          <br />
          <div>
            <label>
              Genre:
              <br />
              <input name="genre" type="text" />
            </label>
          </div>
          <br />
          <div>
            <label>
              Bio:
              <br />
              <textarea name="bio" rows="5" cols="40"></textarea>
            </label>
          </div>
          <br />
          <button type="submit">Create</button>
        </fieldset>
      </form>
    </div>
  );
}
