var mongoose = require('mongoose');
const { strong } = require('react/lib/ReactDOMFactories');
mongoose.connect('mongodb://localhost/students' ,{useMongoClient:true});

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var flatsharingSchema = mongoose.Schema({
    userId:String,
    userName:String,
    userPic:String,
    city:String,
    adress:String,
    price:Number,
    numberOfPlaces:Number,
    gender:String,
    phoneNumber:String,
    image:String,
    comments:[],
    createdAt:String
});

var Flatsharing = mongoose.model('Flatsharing', flatsharingSchema);

var selectAllFlatsharing = function(callback) {
  Flatsharing.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  }).sort({createdAt: -1}).exec()
};

var selectSomeFlatsharing = function(filter,callback) {
  Flatsharing.find(filter, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  }).sort({createdAt: -1}).exec()
};

var insertFlatsharing=(data,callback)=>{
  Flatsharing.create(data,(err,event)=>{
    if(err){
      callback(err,null)
    }
    else{
      callback(null,event)
    }
  })
}
var addComment=(filter,comment,callback)=>{
  Flatsharing.updateOne(filter,{$push: {comments:comment }},(err,user)=>{
    if(err){
      callback(err,null)
    }
    else{
      callback(null,user)
    }
  })
}
var carpoolingSchema = mongoose.Schema ({
  userId:String,
  userName:String,
  userPic:String,
  destinationFrom:String,
  from:String,
  to:String,
  date:String,
  numberOfPlaces:Number,
  caType:String,
  price:Number,
  phoneNumber:String,
  image:String,
  comments:[],
  createdAt:String
})

var Carpooling = mongoose.model('Carpooling', carpoolingSchema);


var selectAllCarpooling = function(callback) {
  Carpooling.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  }).sort({createdAt: -1}).exec()
};

var selectSomeCarpooling = function(filter,callback) {
  Carpooling.find(filter, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  }).sort({createdAt: -1}).exec()
};

var insertCarpooling=(data,callback)=>{
  Carpooling.create(data,(err,event)=>{
    if(err){
      callback(err,null)
    }
    else{
      callback(null,event)
    }
  })
}
var addCommentCarpooling=(filter,comment,callback)=>{
  Carpooling.updateOne(filter,{$push: {comments:comment }},(err,user)=>{
    if(err){
      callback(err,null)
    }
    else{
      callback(null,user)
    }
  })
}


module.exports.dbEvents = {selectAllFlatsharing,selectSomeFlatsharing,insertFlatsharing,addComment,selectAllCarpooling,selectSomeCarpooling,insertCarpooling,addCommentCarpooling}