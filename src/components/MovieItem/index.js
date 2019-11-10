import React, {PureComponent} from "react";

class MovieItem extends PureComponent {
    constructor() {
        super();

        this.state = {
            addWatch: false,
        };
    }

    render() {
        const {movie, removeMovie, addMovieToWillWatch, removeMovieFromWillWatch} = this.props;
        return (
            <div style={{position: "relative"}}>
                <div className="card p-1 movie-card">
                    <img
                        className="card-img-top movie-img"
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
                        alt=""
                    />
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <p className="card-title mb-0 w-50">{movie.title || movie.name}</p>
                            <div className="text-secondary">Rating: {movie.vote_average}</div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            {this.state.addWatch === true ? (
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    style={{fontSize: "0.8rem"}}
                                    onClick={() => {
                                        this.setState({
                                            addWatch: false,
                                        });
                                        removeMovieFromWillWatch(movie);
                                    }}
                                >
                                    Remove movie
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    style={{fontSize: "0.8rem"}}
                                    onClick={() => {
                                        this.setState({
                                            addWatch: true,
                                        });
                                        addMovieToWillWatch(movie);
                                    }}
                                >
                                    Will Watch
                                </button>
                            )}
                            <button
                                type="button"
                                className="btn btn-dark"
                                onClick={removeMovie.bind(null, movie)}
                                style={{fontSize: "0.8rem"}}
                            >
                                Delete movie
                            </button>
                        </div>
                        <div className="overflow-auto" style={{height: "200px", fontSize: ".8rem"}}>
                            <h6>Overview:</h6>
                            {movie.overview}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieItem;
