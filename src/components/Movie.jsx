import React from "react";

function Movie(props) {
  const {
    Title: title /* Переименование, было с большой буквы, стало с маленькой */,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div id = {id} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">

        {
          poster === 'N/A' ?
          <img className="activator" src={'https://via.placeholder.com/300x380?text=${title}'}/> /* Чтобы не было поломанных картинок */
          :
          <img className="activator" src={poster} />
        }
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>{type} <span className="right">{year}</span></p>
      </div>
    </div>
  );
}

export { Movie };
