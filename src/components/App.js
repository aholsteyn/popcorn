import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducer/movie/actions';

import '../stylesheets/index.css';

import SearchBar from './SearchBar';
import MovieDetails from './MovieDetails';
import Header from './LoadingBar';

class App extends Component {
  render() {
    return (
      <div className="container">
				<Header />
        <h1>Movie Search</h1>
        <SearchBar searchMovie={this.props.getMovie.bind(this)} />
        <MovieDetails movies={this.props.movies} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { movies: state.movies };
}

export default connect(mapStateToProps, actions)(App);