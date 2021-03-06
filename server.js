// Vanilla NodeJS Server - Basics

const http = require('http');
const defaultController = require('./controllers/defaultController');
const gadgetController = require('./controllers/gadgets/gadgetController');

const httpServer = http.createServer(
    (req, res)=>{
        if(req.url==="/api/gadgetlist" && req.method === "GET"){
            gadgetController.getAllGadgets(req, res);
        }
        else if(req.url === "/home" && req.method === "GET"){
            defaultController.getDefaultPage(req, res);
        }
        else{
            defaultController.getPageNotFoundPage(req, res);
        }
    }
);

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, ()=>{
    console.log("Server created and listening on port " + PORT);
})

