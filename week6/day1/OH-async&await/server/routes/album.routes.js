const AlbumController = require('../controllers/album.controller')

// ! This is whats coming back from line 1 above. It's the object that we exported from controllers

// AlbumController = {
    // Key value pairs 
    // Keys are the names of the functions and values are the functions
//     allAlbums: (req,res) => {
//         Album.find({})
//             .then((allAlbums) => {
//                 res.json(allAlbums)
//             })
//             .catch((err) => {
//                 res.status(500).json({message: 'Something went wrong', error:err})
//             })
//     },
//     createAlbum: (req, res) => {
//         Album.create(req.body)
//             .then((newAlbum) => {
//                 res.json(newAlbum)
//             })
//             .catch((err) => {
//                 res.status(500).json({message: 'Something went wrong', error:err})
//             })
//     }
// }
module.exports = app => {
    app.get('/api/allAlbums', AlbumController.allAlbums)
    app.get('/api/oneAlbum/:id', AlbumController.getOneAlbum)
    app.post('/api/postAlbum', AlbumController.createAlbum)
    app.put('/api/updateAlbum/:id', AlbumController.updateAlbum)
    app.delete('/api/deleteAlbum/:id', AlbumController.deleteAlbum)
}