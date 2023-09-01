const express = require("express");
const app = express();
const cors = require('cors') 
require("./config/mongoose.config");
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }));
    
const albumRoutes = require("./routes/album.routes");


albumRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));