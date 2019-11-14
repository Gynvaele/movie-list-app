import React from 'react';

const MovieTabs = (props) => {
    return (
        <ul className="tabs nav nav-pills">
            <li className="nav-item  mr-1">
                <div className={`nav-link ${props.sort_by === "popularity.desc" ? "active" : ""}`}>
                    Popularity desk
                </div>
            </li>
            <li className="nav-item  mr-1">
                <div className={`nav-link ${props.sort_by === "popularity.desc" ? "active" : ""}`}>
                    First air date desk
                </div>
            </li>
            <li className="nav-item mr-1">
                <div className={`nav-link ${props.sort_by === "popularity.desc" ? "active" : ""}`}>
                    Vote average desk
                </div>
            </li>
        </ul>
    )
};


export default MovieTabs;