import React, {PureComponent} from "react";
import {moviesData} from "../moviesData";
import MovieItem from "./MovieItem";
import "./index.scss";

// UI = fn(state, props)

class App extends PureComponent {
    constructor() {
        super();

        this.state = {
            movies: moviesData,
            moviesWillWatch: [],
        };

        // this.removeMovie = this.removeMovie.bind(this);
    }

    removeMovie = movie => {
        const updateMovies = this.state.movies.filter(function (item) {
            return item.id !== movie.id;
        });
        this.setState({
            movies: updateMovies,
        });
    };

    addMovieToWillWatch = movie => {
        // const updateMoviesWillWatch = [...this.state.moviesWillWatch];
        // updateMoviesWillWatch.push(movie);

        const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

        this.setState({
            moviesWillWatch: updateMoviesWillWatch,
        });
    };

    removeMovieFromWillWatch = movie => {
        const updateMoviesFromWillWatch = this.state.moviesWillWatch.filter(function (item) {
            return item.id !== movie.id;
        });
        this.setState({
            moviesWillWatch: updateMoviesFromWillWatch,
        });
    };

    render() {
        console.log(this.state.moviesWillWatch);
        return (
            <div className="container  pt-3">
                <div className="row">
                    <div className="md col-9 ">
                        <div className="row">
                            {this.state.movies.map(movie => {
                                return (
                                    <div className="col-6 mb-4" key={movie.id}>
                                        <MovieItem
                                            movie={movie}
                                            removeMovie={this.removeMovie}
                                            addMovieToWillWatch={this.addMovieToWillWatch}
                                            removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-3">
                        <p>Will Watch: {this.state.moviesWillWatch.length}</p>
                        <div>
                            {this.state.moviesWillWatch.length === 0 ? (
                                ""
                            ) : (
                                <div className="card p-1">
                                    {this.state.moviesWillWatch.map(willList => {
                                        return (
                                            <div key={willList.id}>
                                                <div className="movieList">
                                                    {willList.title} Rate: {willList.vote_average}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
