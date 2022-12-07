import React, { useEffect, useState } from "react";
//import Movies from './video.json';

const Video_card = () => {
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-forest-62260.herokuapp.com/")
      .then((respo) => respo.json())
      .then((data) => setMovies(data.moviesData));
  }, []);
  console.log(Object.keys(Movies));

  return (
    <>
      <div className="c">
        {Object.keys(Movies).map((e) => {
          return (
            <div className="videocard-back">
              <img src={Movies[e].EventImageUrl} alt="img" />
              <div className="detail">
                <h1>{Movies[e].EventName}</h1>

                <p>
                  {Movies[e].EventLanguage}+{Movies[e].EventGenre}
                </p>
                <p>{Movies[e].DispReleaseDate}</p>
                <button className="bt">
                  {" "}
                  <a href={Movies[e].TrailerURL}>Trailer</a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  
    
  );
};

export default Video_card;
