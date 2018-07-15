import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
 
export default class Header extends React.Component {
  render() {
    return (
      <header>
        <LoadingBar showFastActions style={{ backgroundColor: 'blue', height: '20px' }}/>
      </header>
    )
  }
}