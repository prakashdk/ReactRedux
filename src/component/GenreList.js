import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getGenres } from "../fetch/ApiCall";
import { isEmpty } from "../reducer/PureFuctions";

function GenreList({ genres, loading, error, fetchGenres }) {
  const [retry, setRetry] = useState(false);
  useEffect(() => {
    fetchGenres();
  }, [retry, fetchGenres]);
  const handleRetry = () => {
    setRetry((p) => !p);
  };
  return (
    <div>
      <h1>Genres</h1>
      {loading ? (
        <CircularProgress />
      ) : (
        isEmpty(error) && (
          <ul className="genre">
            {genres.map((e) => {
              return <li key={e.genre}>{e.genre}</li>;
            })}
          </ul>
        )
      )}
      {!isEmpty(error) && (
        <p>
          Something went wrong{" "}
          <a href="/#" onClick={handleRetry}>
            Retry
          </a>
          .
        </p>
      )}
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    loading: state.genre.loading,
    genres: state.genre.genres,
    error: state.genre.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGenres: () => {
      dispatch(getGenres());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
