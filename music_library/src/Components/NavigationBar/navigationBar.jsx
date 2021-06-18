import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

function NavBar(props) {
    return(
        <div className="row row-spacer">
            <div className="col-md-12" style={{padding: 0}}>
                <div>
                    <h1>Music Library</h1>
                </div>
            </div>
        </div>
    );
}

export default NavBar;

