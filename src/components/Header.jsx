import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img
          src="../src/images/profileicon.svg"
          alt="profile-icon"
          data-testid="profile-top-btn"
        />
        <h1 data-testid="page-title">Header</h1>
        <img
          src="./src/images/searchicon.svg"
          alt="seach-icon"
          data-testid="profile-top-btn"
        />
      </div>
    );
  }
}

export default Header;
