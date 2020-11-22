var mongoose=require("mongoose");
var Campground=require("./models/campground");
var Comment=require("./models/comment");

var data=[
    {
        name:"Cloud's Rest",
        image:"https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut eleifend mi. Vivamus metus turpis, commodo non nibh et, pulvinar consequat nunc. Etiam accumsan consectetur purus, non dignissim lectus porttitor ut. Duis ac urna a tortor fringilla faucibus. Maecenas mattis nisi quis ante sagittis finibus. Suspendisse efficitur quam dui, sed malesuada dui aliquet a. Vivamus eu lorem a ex dignissim placerat quis vitae nulla. Nullam varius sed dolor at condimentum. Fusce posuere nibh eu dolor pulvinar, eu pretium lectus ultrices. Quisque gravida aliquet quam at porttitor. Curabitur non nulla a felis viverra convallis sit amet at lectus. Nullam eu blandit libero, tempor suscipit est. Fusce posuere et ex eu semper. Aenean blandit diam vitae felis ultrices, dignissim viverra odio venenatis."
    },
    {
        name:"Desert Mesa",
        image:"https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut eleifend mi. Vivamus metus turpis, commodo non nibh et, pulvinar consequat nunc. Etiam accumsan consectetur purus, non dignissim lectus porttitor ut. Duis ac urna a tortor fringilla faucibus. Maecenas mattis nisi quis ante sagittis finibus. Suspendisse efficitur quam dui, sed malesuada dui aliquet a. Vivamus eu lorem a ex dignissim placerat quis vitae nulla. Nullam varius sed dolor at condimentum. Fusce posuere nibh eu dolor pulvinar, eu pretium lectus ultrices. Quisque gravida aliquet quam at porttitor. Curabitur non nulla a felis viverra convallis sit amet at lectus. Nullam eu blandit libero, tempor suscipit est. Fusce posuere et ex eu semper. Aenean blandit diam vitae felis ultrices, dignissim viverra odio venenatis."
    },
    {
        name:"Canyon Floor",
        image:"https://images.pexels.com/photos/2526025/pexels-photo-2526025.jpeg?auto=compress&cs=tinysrgb&h=350",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut eleifend mi. Vivamus metus turpis, commodo non nibh et, pulvinar consequat nunc. Etiam accumsan consectetur purus, non dignissim lectus porttitor ut. Duis ac urna a tortor fringilla faucibus. Maecenas mattis nisi quis ante sagittis finibus. Suspendisse efficitur quam dui, sed malesuada dui aliquet a. Vivamus eu lorem a ex dignissim placerat quis vitae nulla. Nullam varius sed dolor at condimentum. Fusce posuere nibh eu dolor pulvinar, eu pretium lectus ultrices. Quisque gravida aliquet quam at porttitor. Curabitur non nulla a felis viverra convallis sit amet at lectus. Nullam eu blandit libero, tempor suscipit est. Fusce posuere et ex eu semper. Aenean blandit diam vitae felis ultrices, dignissim viverra odio venenatis."
    }
];

function seedDB(){
    //Remove all campgrounds
    Campground.deleteMany({},function(err){
           if(err){
               console.log(err);
           }
           console.log("removed campgrounds");
               //add a few campgrounds
           data.forEach(function(seed){
               Campground.create(seed,function(err,campground){
                   if(err){
                       console.log(err);
                   } else {
                       console.log("added a campground");
                       //Create a comment
                       Comment.create(
                           {
                           text:"This place is great, but I wish there was Internet",
                           author:"Homer"
                        }, function(err, comment){
                           if(err){
                               console.log(err);
                           } else{
                               campground.comments.push(comment);
                               campground.save();
                               console.log("Created new comment");
                           }
                       });
                    
                   }
               });
           });
    });

    //add a few comments
}

module.exports=seedDB;