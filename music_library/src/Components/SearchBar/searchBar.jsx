
import React from 'react';
import './searchBar.css';

function SearchBar (props) {
   


        return (
            <div1>
                <hr />
                <center>
                    <h3>Search For Music!</h3>
                <form>
                    <div className="row col-align">
                        <div className="col-md-4">
                            <label>Search</label>
                            <input type='text' name='search' 
                            onChange={props.handleSearch} />
                        </div>
                    </div>
                </form>
                </center>
            </div1>
        );
    }



export default SearchBar;