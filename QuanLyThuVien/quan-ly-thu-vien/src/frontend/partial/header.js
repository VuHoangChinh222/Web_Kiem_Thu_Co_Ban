import Menu from "./menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function SearchBox() {
  const [searchValue, setSearchValue] = useState("");

  const clearSearch = () => {
    setSearchValue("");
  };

  return (
    <div className="search-box">
      <input
        type="text"
        className="search-txt"
        placeholder="Search here ..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && (
        <span className="clear-btn" onClick={clearSearch}>
          &times;
        </span>
      )}
      <button className="search-btn">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}

function Header() {
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href=""
              role="button"
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
        </ul>
        <SearchBox />
        <Link to = "lapphieu">
            <button className="hanhdong">Lập phiếu</button>
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <div className="user-container">
                <div className="image">
                  <img
                    src="assets/dist/img/user2-160x160.jpg"
                    className="img-circle elevation-2"
                    alt="User"
                  />
                </div>
                <div className="user-info">
                  <span className="name">Tên</span>
                  <span className="role">Độc giả</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </nav>
      <Menu />
    </div>
  );
}

export default Header;
