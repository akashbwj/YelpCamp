var mongoose = require ("mongoose");
var passportLocalMongoose=require('passport-local-mongoose');

var UserSchema= new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: String,
    avatar: {type:String, default:"https://www.dpair.com/wp-content/uploads/2017/03/Facebook-Blank-Photo.jpg"},
    firstName: String,
    lastName: String,
    email: {type: String, unique: true, required: true},
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    isAdmin:{type:Boolean, default:false}
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);