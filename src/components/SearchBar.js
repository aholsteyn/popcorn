import React, { Component } from 'react';
import '../stylesheets/SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
      super(props);

      this.state = { title: '' };
    }
		
		componentDidMount() {
			let searchInput = document.getElementById('search-input');
			searchInput.focus();
		}

    render() {
      return (
        <div className="search-bar input-group">
          <input
						id="search-input"
            value={this.state.title}
            className="form-control"
            placeholder="Search Movie Title..."
            onChange={event => this.setState({ title: event.target.value })}
            />
          <span className="input-group-btn">
            <button
              className="btn btn-success"
              type="button"
              onClick={() => this.props.searchMovie(this.state.title)}
              >
              Search!
            </button>
          </span>
        </div>
      );
    }
}

export default SearchBar;