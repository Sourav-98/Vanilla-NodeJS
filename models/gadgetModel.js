//A JSON array containing Gadget Objects
const Gadgets = require("../dataStore/gadgets");

//To simulate error
// const Gadgets = null;    

let findAll = ()=>{
    return new Promise((resolve, reject)=>{
        if(Gadgets !== null){
            resolve(Gadgets);
        }
        else{
            reject(null);
        }
    });
}

let findById = (gadgetId)=>{
    return new Promise((resolve, reject)=>{
        let gadget = Gadgets.find(g =>  g.ID === gadgetId);
        if(gadget !== undefined){
            resolve(gadget);
        }
        else{
            reject(null);
        }
    })
}

module.exports = {
    findAll,
    findById
}