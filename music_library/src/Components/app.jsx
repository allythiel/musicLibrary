import React, { Component } from 'react';
import NavBar from './NavigationBar/navigationBar';
import axios from 'axios';
import MusicTable from './MusicTable/musicTable';
import Footer from './Footer/footer'
import SearchBar from './SearchBar/searchBar';

class App extends Component {
    constructor(props){
        super(props);
        this.state= { 
            musicArray: [],
            filter:""};
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

    handleSearch(event){
        event.preventDefault();
        this.setState({filter:event.target.value})
    }

    render() {
        console.log(this.state.musicArray);
        // filterMusic(){
        //     let musicSearch = musicArray.filter(this.handleSearch) {
        //         return musicSearch.includes(this.handleSearch)

        
        // }
        //filter right here
        //array.filter(1. make sure you convert to lowercase 2. use .includes)
        return (
            <div className="container-fluid">
                
                <NavBar />
                <SearchBar handleSearch={(event)=>this.handleSearch(event)}/>
                <MusicTable musicArray={this.state.musicArray} />
                <Footer />
            </div>
        );
    }
}

export default App;