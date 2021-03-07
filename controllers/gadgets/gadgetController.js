
const gadgetModel = require('./../../models/gadgetModel');

async function getAllGadgets(req, res){
    // Promise async => await method
    try{
        let gadgets = await gadgetModel.findAll();
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(gadgets));
    }
    catch(err){
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({
            "error": "No Gadgets Found"
        }));
    }
    
    // Promise then => catch method
    // gadgetModel.findAll()
    // .then((gadgets)=>{
    //     res.writeHead(200, {"Content-Type": "application/json"});
    //     res.end(JSON.stringify(gadgets));
    // })
    // .catch((error)=>{
    //     res.writeHead(404, {"Content-Type": "application/json"});
    //     res.end(JSON.stringify({
    //         "error": "No Gadgets Found"
    //     }));
    // });
}

async function getGadgetById(gadgetId, req, res){
    try{
        let gadgetFound = await gadgetModel.findById(gadgetId);
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(gadgetFound));
    }
    catch(err){
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({
            "error": "No Gadget with Id "+ gadgetId + " Found"
        }));
    }
}


module.exports = {
    getAllGadgets,
    getGadgetById
}