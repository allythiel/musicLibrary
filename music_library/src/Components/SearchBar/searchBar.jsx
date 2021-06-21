
import React from 'react';

function SearchBar (props) {
   


        return (
            <div>
                <hr />
                <center>
                    <h3>Search For Music!</h3>
                </center>
                <form>
                    <div className="row col-align">
                        <div className="col-md-4">
                            <label>Search</label>
                            <input type='text' name='search' 
                            onChange={props.handleSearch} />
                        </div>
                    </div>
                </form>
            </div>
        );
    }



export default SearchBar;