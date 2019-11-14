import React, {PureComponent} from "react";
import {API_KEY_3, API_URL} from "../utils/api";
import MovieItem from "./MovieItem";
import MovieTabs from "./MovieTabs";
import "./index.scss";

// UI = fn(state, props)

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            moviesWillWatch: [],
            sort_by: "popularity.desc",
        };

        console.log("constructor");
    }


// /movie/popular - популярные
// /discover/movie - фильмы
// /discover/tv - сериалы


    //можно не на столько расписывать, но так понятнее для разбора как работает метод fetch и then
    componentDidMount() {
        console.log("component did mount");
        fetch(`${API_URL}/discover/tv?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`).then((response) => {
            console.log("response");
            return response.json();
        }).then((data) => {
            console.log("data");
            return data.results;
        }).then((results) => {
            console.log("results", results);
            this.setState({
                movies: results
            })
        });
        console.log("after fetch");
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
        console.log("render component");
        return (
            <div className="container col-12 mx-1">
                <div className="row mt-3">
                    <div className="col-sm-12 col-md-9">
                        <div className="row my-2">
                            <div className="col-12">
                                <MovieTabs sort_by={this.state.sort_by}/>
                            </div>
                        </div>
                        <div className="row">
                            {this.state.movies.map(movie => {
                                return (
                                    <div className="col-sm-12 col-md-6 mb-4" key={movie.id}>
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
                    <div className="col-sm-12 col-md-3 position-relative">
                        <div className="right-bar">
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
                                                        {willList.title || willList.name} Rate: {willList.vote_average}
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
            </div>
        );
    }
}

export default App;
