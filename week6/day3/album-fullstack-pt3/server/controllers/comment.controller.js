const Comment = require('../models/comment.model');
const jwt = require('jsonwebtoken')
module.exports = {
    postComment: async (req, res) => {
        try{
            const comment = req.body
            console.log('COMMENT', comment);
            const decodedJwt = jwt.decode(req.cookies.userToken, {complete:true})
            const user_id = decodedJwt.payload._id
            console.log('USER_ID', user_id);
            const username = decodedJwt.payload.username
            console.log('USERNAME', username);
            const album_id = req.params.id
            const finishedComment = {...comment, user_id:user_id, album_id:album_id, username:username}
            const newComment = await Comment.create(finishedComment)
            console.log(newComment);
            res.json(newComment)
        }
        catch(err){
            res.status(400).json({error: err})
        }
    },
    deleteComment: (req, res) => {
        Comment.deleteOne({_id: req.params.id})
            .then((response) => {res.json(response)
            })
            .catch((err) => { res.status(500).json(err)
            })
    }
    
}