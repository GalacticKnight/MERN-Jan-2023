const Album = require('../models/album')

module.exports = {
    // Key value pairs 
    // Keys are the names of the functions and values are the functions
    allAlbums: (req,res) => {
        Album.find()
            .then((allAlbums) => {
                // console.log(allAlbums)
                res.json(allAlbums)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    getOneAlbum: (req, res) => {
        Album.findOne({ _id: req.params.id})
            .then((oneAlbum) => {
                res.json(oneAlbum)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    createAlbum: (req, res) => {
        // console.log('REQ*********', req)
        // console.log('BODY*********', req.body)
        Album.create(req.body)
            .then((newAlbum) => {
                res.json(newAlbum)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
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
            .then((response) => {
                res.json(response)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}

// You can store anything in an object including functions
// let obj = {name:'caden', sayhi:() => {console.log("Hi!!!")}}
// obj.sayhi()