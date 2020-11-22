require('dotenv').config()
var express=require("express"),
    app=express(),
	bodyParser=require("body-parser"),
	mongoose=require("mongoose"),
	flash=require("connect-flash"),
	passport=require('passport'),
	LocalStrategy=require('passport-local'),
	methodOverride=require('method-override'),
    passportLocalMongoose=require('passport-local-mongoose');
	Campground=require("./models/campground"),
	Comment=require("./models/comment"),
	User=require('./models/user'),
	seedDB=require("./seeds"),
	dbUrl=process.env.DB_URL||"mongodb://localhost:27017/yelp_camp";

	
//requiring routes
var commentRoutes = require("./routes/comments"),
	reviewRoutes     = require("./routes/reviews"),
	campgroundRoutes=require("./routes/campgrounds"),
	indexRoutes =require("./routes/index");

//seedDB(); //seed the database

//"mongodb://localhost:27017/yelp_camp"
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
	useUnifiedTopology:true,
	useFindAndModify:false,
	useCreateIndex:true
})
.then(()=>console.log("connected to DB!"))
.catch(error=>console.log(error.message));


app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"))
app.use(methodOverride("_method"));
app.use(flash());
app.locals.moment = require('moment');

const secret=process.env.SECRET||"Once again Rusty wins cutest dog!";
//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret:secret,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
	res.locals.currentUser=req.user;
	res.locals.error=req.flash("error");
	res.locals.success=req.flash("success");
	next();
})

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds/:id/reviews", reviewRoutes);

app.listen(process.env.PORT||3000,process.env.IP,function(){
	console.log("The YelpCamp Server Has Started Listening!!!")
});