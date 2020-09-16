import React from 'react';

function Nav() {
  return (
    <div>
      <nav className="nav">
        <div>
          <a className="nav-brand" href="/">Budget App</a>
          <div className="navbar">
            <ul>
              <li>
                <a>Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav;