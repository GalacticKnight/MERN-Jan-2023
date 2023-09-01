const express = require("express");
const app = express();
    
require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const albumRoutes = require("./routes/album.routes");

// albumRoutes =  app => {
//     app.get('/api/allAlbums', AlbumController.allAlbums)
//     app.post('/api/postAlbum', AlbumController.createAlbum)
// }

albumRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
