import React, { useState } from 'react';
import News from './News';


const Navbar = () => {
  const [category, setCategory] = useState("technology");

  const changecategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand text-danger" href="#">NewsNow</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {["technology", "business", "health", "sports"].map((cat) => (
                <li className="nav-item" key={cat}>
                  <button
                    className={`nav-link btn btn-link ${category === cat ? "active" : ""}`}
                    value={cat}
                    onClick={changecategory}
                    aria-current={category === cat ? "page" : undefined}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                </li>
              ))}
            </ul>

            <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* News Section */}
      <div className="container mt-4">
        <h3 className="text-2xl font-bold text-yellow-400 text-center mt-4 ">Top {category.charAt(0).toUpperCase() + category.slice(1)} News</h3>
        <News category={category} />
      </div>
    </>
  );
};

export default Navbar;