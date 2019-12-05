import React from 'react';

class MovieTabs extends React.Component {

    handleClick = (value) => {
        return () => {
            this.props.changeSortTab(value);
        }
    };

    getClassLink = (value) => {
        return `nav-link ${this.props.sort_by === value ? "active" : ""}`
    };


    render() {
        return (
            <div>
                <ul className="tabs nav nav-tabs">
                    <li className="nav-item">
                        <div className={this.getClassLink("popularity.desc")}
                             onClick={this.handleClick("popularity.desc")}>
                            Popularity
                        </div>
                    </li>
                    < li
                        className="nav-item  mr-1">
                        <div
                            className={this.getClassLink("revenue.desc")}
                            onClick={this.handleClick("revenue.desc")}>
                            Revenue
                        </div>
                    </li>
                    <li className="nav-item mr-1">
                        <div
                            className={this.getClassLink("vote_average.desc")}
                            onClick={this.handleClick("vote_average.desc")}>
                            Vote average
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}


export default MovieTabs;