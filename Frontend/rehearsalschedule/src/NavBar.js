import React from 'react';
import {Link} from 'react-router-dom';
import './css/nav-bar.css';

const NavBar = (props) => {
    return (
        <header>
            <ul className="nav-bar">
            <li className="nav-bar-item">
              <Link
              className="nav-bar-link"
              to="/">
                  View Projects
            </Link>
            </li>
                <li className="nav-bar-item">
                    <Link
                        className="nav-bar-link"
                        to="/calendar">
                            View Rehearsals
                    </Link>
                </li>
                <li className="nav-bar-item">
                    <Link
                        className="nav-bar-link"
                        to="/create-project">
                        Create Project
                    </Link>
                </li>
                <li className="nav-bar-item">
                    <Link
                        className="nav-bar-link"
                        to="/create-team">
                        Create Team
                    </Link>
                </li>
                <li className="nav-bar-item">
                    <Link
                        className="nav-bar-link"
                        to="/create-member">
                            Create Member
                    </Link>
                </li>
                <li className="nav-bar-item">
                    <Link
                        className="nav-bar-link"
                        to="/create-rehearsal">
                        Create Rehearsal
                    </Link>
                </li>
                <li className="nav-bar-item">
                    <Link
                        className="nav-bar-link"
                        to="/create-task">
                        Create Task
                    </Link>
                </li>
            </ul>
        </header>
    )
};

export default NavBar;
