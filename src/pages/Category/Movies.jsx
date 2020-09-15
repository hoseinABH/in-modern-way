import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Banner from '../../components/Banner/Banner';
import Grid from '../../components/Grid/Grid';
import Layout from '../../components/Layout/Layout';
import LandingSkeleton from '../../components/Skeleton/LandingSkeleton';
import Skeleton from '../../components/Skeleton/Skeleton';
import { getMoviesByName } from '../../redux/actions/movies';
import { IMAGE_URL } from '../../service/movies.service';

const Movies = ({ match, movies, getMoviesByName }) => {
  const [moviesType, setMoviesType] = useState(null);

  useEffect(() => {
    setMoviesType(match.params.name);
    getMoviesByName(moviesType, 1);
  }, [moviesType, getMoviesByName, match]);

  const loading = moviesType === null || movies.length < 1;

  return (
    <>
      {loading ? (
        <LandingSkeleton />
      ) : (
        <Banner banner={`${IMAGE_URL}/${movies[0].backdrop_path}`} />
      )}
      <Layout>
        {loading ? (
          <Skeleton title={false} />
        ) : (
          <Grid title={moviesType.toUpperCase()} movies={movies} />
        )}
      </Layout>
    </>
  );
};
const mapStateToProps = (state) => ({
  movies: state.movies.moviesByName,
  error: state.error,
});
export default connect(mapStateToProps, {
  getMoviesByName,
})(Movies);
