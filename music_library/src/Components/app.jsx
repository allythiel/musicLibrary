import React, { Component } from 'react';
import NavBar from './NavigationBar/navigationBar';

class App extends Component {
    state = {  }
    render() {
        return (
            <div className="container-fluid">
                <NavBar />
            </div>
        )
    }
}

export default App;