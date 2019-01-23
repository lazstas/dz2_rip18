import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <NavLink className="navbar-brand" activeClassName='active' exact to="/">Домашная работа 2</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-auto">
                                <NavLink className="nav-item nav-link" activeClassName='active' exact to='/'>Список фильмов</NavLink>
                                <NavLink className="nav-item nav-link" activeClassName='active' to='/about/'>О проекте</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}


export default Header;

