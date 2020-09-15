import React, { useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import Grid from '../../components/Grid/Grid';
import Layout from '../../components/Layout/Layout';
import banner from '../../assets/1.jpg';

import { connect } from 'react-redux';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../../redux/actions/movies';
import Skeleton from '../../components/Skeleton/Skeleton';
import LandingSkeleton from '../../components/Skeleton/LandingSkeleton';
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
    // window.scrollTo(0, 0);
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

  const loading =
    upcom.length < 1 ||
    popular.length < 1 ||
    nowPlay.length < 1 ||
    toprate.length < 1;
  return (
    <>
      {loading ? <LandingSkeleton /> : <Banner banner={banner} />}
      <Layout>
        {loading ? (
          <Skeleton title={true} />
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
