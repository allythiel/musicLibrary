import React from 'react';

const MusicTable = ({ musicArray }) => {
    let renderedSongs = musicArray.map((music) => {
        return(
            <li key={music.title}>
                Title: {music.title} <br></br> Album: {music.album} <br></br> Artist: {music.artist} <br></br> Genre: {music.genre} <br></br> Release Date: {music.releaseDate}
            </li>
        );
    });
    return <ul>{renderedSongs}</ul>
};

export default MusicTable;