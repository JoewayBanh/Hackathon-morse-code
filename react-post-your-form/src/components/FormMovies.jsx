import React, { useState } from "react";
import "./styling.css";

const FormMovies = () => {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [comment, setComment] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, poster, comment })
    };
    const url = "https://post-a-form.herokuapp.com/api/movies/";
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(
            `The movie:${title} with the following comment: ${comment}. has been successfully added!`
          );
        }
      })
      .catch((e) => {
        console.error(e);
        alert("There was an error when adding the movie.");
      });
  };

  return (
    <div className="FormEmployee">
      <h1>Movie Info</h1>
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Movie data</legend>
          <div className="form-data">
            <label htmlFor="title">Movie title</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          <div className="form-data">
            <label htmlFor="poster">Url for poster</label>
            <input
              type="url"
              id="poster"
              name="poster"
              onChange={(e) => setPoster(e.target.value)}
              value={poster}
            />
          </div>

          <div className="form-data">
            <label htmlFor="comment">Comment</label>
            <textarea

              id="comment"
              name="comment"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
          </div>
          <hr />
          <div className="form-data">
            <input type="submit" value="Send" />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default FormMovies;
