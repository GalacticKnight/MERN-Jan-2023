const AlbumController = require('../controllers/album.controller')

const {authenticate} = require('../config/jwt.config');//++
module.exports = app => {
    // app.get('/api/allAlbums', AlbumController.allAlbums)////
    app.get('/api/allAlbums', authenticate, AlbumController.allAlbums)//++
    app.get('/api/oneAlbum/:id', AlbumController.getOneAlbum)
    // app.post('/api/postAlbum', AlbumController.createAlbum)////
    app.post('/api/postAlbum', authenticate, AlbumController.createAlbum)//++
    app.put('/api/updateAlbum/:id', AlbumController.updateAlbum)
    app.delete('/api/deleteAlbum/:id', AlbumController.deleteAlbum)
}