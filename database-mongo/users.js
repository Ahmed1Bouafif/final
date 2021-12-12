var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/students' ,{useMongoClient:true});

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var userSchema = mongoose.Schema({
    fullName: String,
    userName:String,
    email: String,
    password: String,
    address:String,
    number:Number,
    image:String,
    education:String,
    postcode:Number,
    facebook:String,
    car:{
        model:{
            type:String
        },
        Details:{
            type:String
        }
    },
    birthday: {
      day: {
        type: Number
      },
      month: {
        type: Number
      },
      year: {
        type: Number
      },
    },
    messages : []

});

var User = mongoose.model('User', userSchema);

var selectAll = function(callback) {
  User.find({}, function(err, users) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, users);
    }
  });
};
var insertUser=(data,callback)=>{
  User.create(data,(err,user)=>{
    if(err){
      callback(err,null)
    }
    else{
      callback(null,user)
    }
  })
}
var findOneUser=(userName,callback)=>{
  User.findOne({userName},(err,user)=>{
    if(err){
      callback(err,null)
    }
    else{
      callback(null,user)
    }
  })
}
var updateOneUser=(filter,data,callback)=>{
  User.updateOne(filter,data,(err,user)=>{
    if(err){
      callback(err,null)
    }
    else{
      callback(null,user)
    }
  })
}
var sendMessage=(filter,msg,callback)=>{
  User.updateOne(filter,{$push: {messages:msg }},(err,user)=>{
    if(err){
      callback(err,null)
    }
    else{
      callback(null,user)
    }
  })
}

module.exports.dbUser = {selectAll,sendMessage,updateOneUser,findOneUser,insertUser}