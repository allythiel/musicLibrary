
import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state= { 
            musicArray: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    });
}

handleSubmit(event) {
    event.preventDefault();
    const music = {
        title: this.state.title,
        album: this.state.album,
        artist: this.state.artist,
        genre: this.state.genre,
        releaseDate: this.state.releaseDate
    }
    this.props.filterMusic(music);
    this.setState({
        musicArray: []
    });
}

render() {
    return (
        <div>
            <hr />
            <center>
                <h3>Search For Music!</h3>
            </center>
            <form onSubmit={this.handleSubmit}>
                <div className="row col-align">
                    <div className="col-md-4">
                        <label>Search</label>
                        <input type='text' name="
                    </div>
                </div>
            </form>
        </div>
    )