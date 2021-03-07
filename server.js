// Vanilla NodeJS Server - Basics

const http = require('http');

const defaultController = require('./controllers/defaultController');
const gadgetController = require('./controllers/gadgets/gadgetController');

const PORT = process.env.PORT || 5000;

const httpServer = http.createServer(
    (req, res)=>{
        if(req.url==="/api/gadgetlist" && req.method === "GET"){
            gadgetController.getAllGadgets(req, res);
        }
        else if(req.url.match(/\/api\/gadget\/(\S+)/) && req.method === "GET"){
            let id = req.url.split('/')[3];
            gadgetController.getGadgetById(id, req, res);
        }
        else if(req.url === "/home" && req.method === "GET"){
        defaultController.getDefaultPage(req, res);
        }
        else{
            defaultController.getPageNotFoundPage(req, res);
        }
    }
);

httpServer.listen(PORT, ()=>{
    console.log("Server created and listening on port " + PORT);
})

