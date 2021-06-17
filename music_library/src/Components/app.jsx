import React, { Component } from 'react';
import NavBar from './NavigationBar/navigationBar';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        this.state={musicArray: []}
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
        return (
            <div className="container-fluid">
                <NavBar />
            </div>
        )
    }
}

export default App;