import React, { Component } from 'react';
import NavBar from './NavigationBar/navigationBar';
import axios from 'axios';
import MusicTable from './MusicTable/musicTable';

class App extends Component {
    constructor(props){
        super(props);
        this.state= { 
            musicArray: []};
    }

    componentDidMount(){
        this.getAllSongs();
    }

    async getAllSongs(){
        let result = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
        this.setState({
            musicArray: result.data
        });
    }

    render() {
        console.log(this.state.musicArray);
        return (
            <div className="container-fluid">
                <NavBar />
                <MusicTable musicArray={this.state.musicArray} />
            </div>
        );
    }
}

export default App;