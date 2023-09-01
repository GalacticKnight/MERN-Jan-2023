import React, {useState} from 'react';

const AlbumForm = (props) => {
    return (
        <div>
            <form>
                <label>Album Name:</label>
                <input type="text" />

                <label>Artist:</label>
                <input type="text" />

                <label>Release Year:</label>
                <input type="number"/>

                <label>Album Name:</label>
                <select name="genre">
                    <option value="Rock">Rock</option>
                    <option value="Alternative">Alternative</option>
                    <option value="Hip-hop/rap">Hip-hop/rap</option>
                    <option value="Pop">Pop</option>
                    <option value="Classical">Classical</option>
                    <option value="Metal">Metal</option>
                    <option value="Blues">Blues</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Country">Country</option>
                    <option value="R&B/Soul">R&B/Soul</option>
                </select>

                <label>Explicit?</label>
                <input type="checkbox" name="explicit"/>
            </form>
        </div>
)}

export default AlbumForm;