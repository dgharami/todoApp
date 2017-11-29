const {MongoClient, ObjectID} = require("mongodb");
const serverLink = "mongodb://localhost:27017/ToDoApp";

MongoClient.connect(serverLink, (err, db) => {
    if(err){
        return console.log("Unable to connect to MongoDB Server");
    }

    console.log("Connected to MongoDB Server");

    db.collection("Users").find({
        name: "Debasish Gharami"
    }).toArray().then(docs => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, err => {
        console.log("Unable to fetch data");
    })
    


    db.close();
});