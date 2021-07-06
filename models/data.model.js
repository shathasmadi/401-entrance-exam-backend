const mongoose = require("mongoose");

class Data{
    constructor(value){
      this.strDrink=value.strDrink;
      this.strDrinkThumb=value.strDrinkThumb;
      this.idDrink=value.idDrink;
    }
}

const dataSchema = new mongoose.Schema({
    strDrink: String,
    strDrinkThumb:String,
    idDrink:String,
  });

  const dataModle = mongoose.model('data', dataSchema);







module.exports={Data,dataModle}