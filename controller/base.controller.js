const axios = require('axios');
const {Data,dataModle}=require('../models/data.model');

const base=(req, res) =>{ 
    res.send('Hello World') 
  }

const getData=(req,res)=>{
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic').then(response=>{
        let data=response.data.map(value=>{
            return new Data(value)
        })
        res.json(data);

    })
}

const addData=(req,res)=>{
    let { strDrink,strDrinkThumb, idDrink}=req.body;
    dataModle.find({name:strDrink},(error,charData)=>{
        if(error){
            res.send(error);
        }else{
            if(charData.length>0){
                res.send('exist');
            }else{
                const newData=new dataModle({
                    name:strDrink,
                    strDrinkThumb:strDrinkThumb,
                    idDrink:idDrink,
                
                })
                newData.save();
                res.json(charData);
            }
        }
    })
}


const getFavorite=(req,res)=>{
    dataModle.find({},(error,charData)=>{
        if(error){
            res.send(error);
        }else{
            res.json(charData);
        }
    })
}


const deleteFavorite=(req,res)=>{
    let {strDrink}=req.params;
    dataModle.remove({name:strDrink},(error,charData)=>{
        if(error){
            res.send(error);
        }else{
            res.json(charData);
        }
    })
}

const updateFavorite=(req,res)=>{
    let {strDrink}=req.params;
    let{strDrink,strDrinkThumb}=req.body;
    dataModle.find({name:strDrink},(error,charData)=>{
        if(error){
            res.send(error);

        }else{
            charData[0].strDrink=strDrink;
            charData[0].strDrinkThumb=strDrinkThumb;
            charData.save();
            res.json(charData);

        }
    })
}



  module.exports={base,getData,addData,getFavorite,deleteFavorite,updateFavorite};