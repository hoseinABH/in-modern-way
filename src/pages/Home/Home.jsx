import React, { useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import Grid from '../../components/Grid/Grid';
import Layout from '../../components/Layout/Layout';
import { connect } from 'react-redux';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../../redux/actions/movies';
import Skeleton from '../../components/Skeleton/Skeleton';
const Home = ({
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  nowPalyingMovies,
  popularMovies,
  upcomingMovies,
  topRatedMovies,
}) => {
  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpcomingMovies();
  }, [
    getNowPlayingMovies,
    getPopularMovies,
    getTopRatedMovies,
    getUpcomingMovies,
  ]);

  const nowPlay = nowPalyingMovies
    .sort(() => Math.random() - Math.random())
    .slice(0, 4);

  const popular = popularMovies
    .sort(() => Math.random() - Math.random())
    .slice(0, 4);

  const toprate = topRatedMovies
    .sort(() => Math.random() - Math.random())
    .slice(0, 4);

  const upcom = upcomingMovies
    .sort(() => Math.random() - Math.random())
    .slice(0, 4);
  const skeleton = [1, 2, 3, 4];

  const loading =
    upcom.length < 1 ||
    popular.length < 1 ||
    nowPlay.length < 1 ||
    toprate.length < 1;
  return (
    <>
      <Banner />
      <Layout>
        {loading ? (
          skeleton.map((item, index) => <Skeleton key={index} />)
        ) : (
          <>
            <Grid title="Now Playing" movies={nowPlay} />
            <Grid title="Popular" movies={popular} />
            <Grid title="Top Rated" movies={toprate} />
            <Grid title="Upcoming" movies={upcom} />
          </>
        )}
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => ({
  nowPalyingMovies: state.movies.nowPalyingMovies,
  popularMovies: state.movies.popularMovies,
  topRatedMovies: state.movies.topRatedMovies,
  upcomingMovies: state.movies.upcomingMovies,
});
export default connect(mapStateToProps, {
  getNowPlayingMovies,
  getPopularMovies,
  getUpcomingMovies,
  getTopRatedMovies,
})(Home);
