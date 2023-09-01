const AlbumController = require('../controllers/album.controller')

module.exports = app => {
    app.get('/api/allAlbums', AlbumController.allAlbums)
    app.get('/api/oneAlbum/:id', AlbumController.getOneAlbum)
    app.post('/api/postAlbum', AlbumController.createAlbum)
    app.put('/api/updateAlbum/:id', AlbumController.updateAlbum)
    app.delete('/api/deleteAlbum/:id', AlbumController.deleteAlbum)
}