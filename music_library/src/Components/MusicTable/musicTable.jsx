import React from 'react';
import './musicTable.css';

const MusicTable = ({ musicArray }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                </tr>
            </thead>
            <tbody>
                {musicArray.map(music =>
                    <tr>
                        <td>{music.title}</td>
                        <td>{music.album}</td>
                        <td>{music.artist}</td>
                        <td>{music.genre}</td>
                        <td>{music.releaseDate}</td>
                    </tr>
                    ) }
            </tbody>
        </table>

    )
};

export default MusicTable;