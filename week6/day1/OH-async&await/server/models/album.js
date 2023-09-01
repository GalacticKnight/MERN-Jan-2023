const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({

    albumName:{
        type: String,
        minLength: [2, 'Album name must be more than 2 characters'],
        maxLength: [45, 'Album name cannot be more than 45 characters']
    }, 
    artist:{
        type: String,
        minLength: [2, 'Artist/band must be more than 2 characters'],
        maxLength: [45, 'Artist/band cannot be more than 45 characters']
    },
    releaseYear: {
        type:Number,
        min: [1900, 'The release must be after 1899']
    },
    genre:{
        type:String,
        enum:{values: ['Rock', 'Alternative', 'Hip-hop/rap', 'Pop', 'Classical', 'Metal', 'Blues', 'Jazz', 'Country', 'R&B/Soul'], message:'Genre not in list of acceptable genres'}
    },
    explicit:{
        type:Boolean,
        required:[true, 'Explicit is required']
    }
    
}, {timestamps:true})
const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;