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
    return new Promise(()=>{
        if(Gadgets !== null){
            for(var i = 0; i < Gadgets.length; i += 1){
                if(Gadgets[i].ID === gadgetId){
                    resolve(Gadgets[i]);
                }
            }
            reject(null);
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