const Album = require('../models/album.model')
const Comment = require('../models/comment.model');
const jwt = require('jsonwebtoken')
module.exports = {
    // Key value pairs 
    // Keys are the names of the functions and values are the functions
    allAlbums: (req,res) => {
        Album.find()
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
            .populate('user_id')//this is used to show who posted the
            //user_id is coming from album model
            .then((allAlbums) => {
                
                // console.log(allAlbums)
                res.json(allAlbums)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    allAlbumsByLoggedInUser: async (req,res) => {
        try{
            console.log('USER ID FROM AUTHENTICATE',req.user);
            const idFromAuthenticate = req.user
            // const decodedJwt = jwt.decode(req.cookies.userToken, {complete:true})
            // const user_id = decodedJwt.payload._id
            const allAlbumsByLoggedInUser = await Album.find({user_id:idFromAuthenticate})
            // console.log(allAlbumsByLoggedInUser);
            res.json(allAlbumsByLoggedInUser)
        }
        catch(err){
            res.status(500).json(err)
        }
    },
    getOneAlbum: async (req, res) => {
        try{
            const album_id = req.params.id
            const oneAlbum = await Album.findById(album_id).populate('user_id')//////////////////////////////////////////////////////.populate('user_id')
            //this is for album.model.js
            const allCommentsOnOneAlbum = await Comment.find({album_id:album_id})
            res.json({oneAlbum:oneAlbum, allCommentsOnOneAlbum:allCommentsOnOneAlbum})
        }
        catch(err){
            res.status(500).json(err)
        }
        // try{
        //     const album_id = req.params.id
        //     const oneAlbum = await Album.findById(album_id).populate('user_id')//////////////////////////////////////////////////////.populate('user_id')
        //     //this is for album.model.js
        //     const allCommentsOnOneAlbum = await Comment.find({album_id:album_id})
        //     res.json({oneAlbum:oneAlbum, allCommentsOnOneAlbum:allCommentsOnOneAlbum})//c
        // }
        // catch(err){
        //     res.status(500).json(err)
        // }
    },
    createAlbum: async (req, res) => {
        try{
            console.log('HERE');
            const decodedJwt = jwt.decode(req.cookies.userToken, {complete:true})
            console.log(decodedJwt);
            const user_id = decodedJwt.payload._id
            console.log('USER ID', user_id);
            const album = req.body
            album['user_id'] = user_id
            const completedAlbum = await Album.create(album)
            console.log(completedAlbum);
            res.json(completedAlbum)
        }
        catch(err){
            res.status(500).json(err)
        }
        // console.log('REQ*********', req)
        // console.log('BODY*********', req.body)
        // Album.create(req.body)
        //     .then((newAlbum) => {
        //         res.json(newAlbum)
        //     })
        //     .catch((err) => {
        //         res.status(500).json(err)
        //     })
    },
    updateAlbum: (req, res) => {
        // console.log('PARAMS*********', req.params)
        Album.findOneAndUpdate( { _id: req.params.id } ,req.body, { new: true, runValidators: true } )
            .then(updatedAlbum => {
                res.json(updatedAlbum)
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    },
    deleteAlbum: (req, res) => {
        Album.deleteOne({_id: req.params.id})
            .then((response) => {res.json(response) })
            .catch((err) => {res.status(500).json(err)})
    }
}

// You can store anything in an object including functions
// let obj = {name:'caden', sayhi:() => {console.log("Hi!!!")}}
// obj.sayhi()