import React from 'react'
import {Link, NavLink} from "react-router-dom";

export const NavBar = ({user}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand text-dark" to="/">Vidly</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">

                        <NavLink className="nav-link nav-item" to="/movies">Movies</NavLink>

                        <NavLink className="nav-link nav-item" to="/customers">Customers</NavLink>

                        <NavLink className="nav-link nav-item" to="/rentals">Rentals</NavLink>

                        {!user && (
                            <React.Fragment>
                                <NavLink className="nav-link nav-item" to="/login">Login</NavLink>

                                <NavLink className="nav-link nav-item" to="/register">Register</NavLink>
                            </React.Fragment>
                        )}
                        {user && (
                            <React.Fragment>
                                <NavLink className="nav-link nav-item" to="/profile">{user.name}</NavLink>

                                <NavLink className="nav-link nav-item" to="/logout">Logout</NavLink>
                            </React.Fragment>
                        )}

                    </div>
                </div>
            </div>
        </nav>
    );
}


