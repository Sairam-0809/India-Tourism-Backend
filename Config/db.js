

const {MongoClient} =require('mongodb')

const clientUrl=new MongoClient( "mongodb+srv://sairam:sairam1203@cluster0.u8jeqr2.mongodb.net/?retryWrites=true&w=majority");
const connection=async()=>{
    try{
        await clientUrl.connect()
console.log("Connected to Database");
    }
    catch(err){
        console.log(err,"Error in connecting DB");
    }
}

const databasename=clientUrl.db("India-Tourism")
module.exports={connection,databasename}

