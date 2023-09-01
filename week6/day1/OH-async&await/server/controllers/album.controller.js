const Album = require('../models/album')

module.exports = {
    
    // * Another way to write these controller functions is to use async/await with a try catch block instead of .then & .catch

    // allAlbums: (req,res) => {
    //     Album.find()
    //         .then((allAlbums) => {
    //             // console.log(allAlbums)
    //             res.json(allAlbums)
    //         })
    //         .catch((err) => {
    //             res.status(500).json({message: 'Something went wrong', error:err})
    //         })
    // },

    allAlbums: async (req, res) => {
        try{
            const allAlbums = await Album.find()
            console.log(allAlbums);
            res.json(allAlbums)
        }
        catch(err){
            res.status(500).json({message: 'Something went wrong', error:err})
        }
    },
    getOneAlbum: async (req, res) => {
        try{
            const oneAlbum = await Album.findById({_id: req.params.id})
            res.json(oneAlbum)
        }
        catch(err){
            res.status(500).json({message: 'Something went wrong', error:err})
        }
    },
    createAlbum: async (req, res) => {
        try{
            const newAlbum = await Album.create(req.body)
            res.json(newAlbum)
        }
        catch(err){
            res.status(500).json({message: 'Something went wrong', error:err})
        }
    },
    updateAlbum: async (req, res) => {
        // console.log('PARAMS*********', req.params)
        //  { _id: req.params.id } ,req.body, { new: true, runValidators: true }
        try{
            const updatedAlbum = await Album.findOneAndUpdate({ _id: req.params.id } ,req.body, { new: true, runValidators: true })
            res.json(updatedAlbum)
        }
        catch(err){
            res.status(500).json({message: 'Something went wrong', error:err})
        }
    },
    deleteAlbum: async (req, res) => {
        try{
            const response = await Album.deleteOne({ _id: req.params.id})
            res.json(response)
        }
        catch(err){
            res.status(500).json({message: 'Something went wrong', error:err})
        }
    }
}