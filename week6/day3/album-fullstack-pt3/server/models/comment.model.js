const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    comment:{
        type:String,
        required:[true, 'This field is required']
    },
    // user id 
    user_id:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    username:{
        type:String,
        required:[true, 'This field is required']
    },
    // album id
    album_id:{
        type: mongoose.Types.ObjectId,
        ref: 'Album'
    },
})
module.exports = mongoose.model("Comment", CommentSchema)