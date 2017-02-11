var mongoose = require("mongoose");
var Campground  = require("./models/campground"),
    Comment     = require("./models/comment");

var data = [
    {
        name: "Cloud's Booty",
        image: "http://rv-camping.org/wp-content/uploads/2015/06/USACECampground.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor, lacus nec sodales pellentesque, nunc nunc fringilla mauris, sit amet euismod arcu nunc a nunc. Fusce vel tellus leo. Duis a nulla a mi sollicitudin ultrices. Nam at fringilla erat. Integer quis arcu in velit efficitur eleifend. Donec non eros ante. Aliquam in ullamcorper magna. Ut sit amet bibendum lectus. Integer tincidunt consequat ante, vitae volutpat tortor semper a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam pellentesque pharetra magna, ac laoreet dolor. Nunc lobortis maximus vehicula. Vestibulum ultrices, tellus et mattis viverra, nulla nulla tincidunt risus, id semper mauris massa sed augue. Maecenas pulvinar libero purus, a egestas nibh convallis a. Donec pulvinar facilisis urna, nec sollicitudin justo tincidunt vel. Morbi eleifend ligula orci, id condimentum nisi cursus quis. Donec nec ex eu diam tincidunt fermentum. Donec faucibus enim enim, id malesuada dolor rutrum sit amet. Nullam non massa eleifend, interdum velit ac, accumsan leo. In hac habitasse platea dictumst. Cras pulvinar massa sed semper fermentum. Nam ullamcorper risus sit amet nibh eleifend, sed dictum metus posuere."
    },
    {
        name: "Couds's Top",
        image: "http://www.nationalparks.nsw.gov.au/~/media/DF58734103EF43669F1005AF8B668209.ashx",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor, lacus nec sodales pellentesque, nunc nunc fringilla mauris, sit amet euismod arcu nunc a nunc. Fusce vel tellus leo. Duis a nulla a mi sollicitudin ultrices. Nam at fringilla erat. Integer quis arcu in velit efficitur eleifend. Donec non eros ante. Aliquam in ullamcorper magna. Ut sit amet bibendum lectus. Integer tincidunt consequat ante, vitae volutpat tortor semper a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam pellentesque pharetra magna, ac laoreet dolor. Nunc lobortis maximus vehicula. Vestibulum ultrices, tellus et mattis viverra, nulla nulla tincidunt risus, id semper mauris massa sed augue. Maecenas pulvinar libero purus, a egestas nibh convallis a. Donec pulvinar facilisis urna, nec sollicitudin justo tincidunt vel. Morbi eleifend ligula orci, id condimentum nisi cursus quis. Donec nec ex eu diam tincidunt fermentum. Donec faucibus enim enim, id malesuada dolor rutrum sit amet. Nullam non massa eleifend, interdum velit ac, accumsan leo. In hac habitasse platea dictumst. Cras pulvinar massa sed semper fermentum. Nam ullamcorper risus sit amet nibh eleifend, sed dictum metus posuere."
    },
    {
        name: "Hill Top",
        image: "http://haulihuvila.com/wp-content/uploads/2012/09/hauli-huvila-campgrounds-lg.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor, lacus nec sodales pellentesque, nunc nunc fringilla mauris, sit amet euismod arcu nunc a nunc. Fusce vel tellus leo. Duis a nulla a mi sollicitudin ultrices. Nam at fringilla erat. Integer quis arcu in velit efficitur eleifend. Donec non eros ante. Aliquam in ullamcorper magna. Ut sit amet bibendum lectus. Integer tincidunt consequat ante, vitae volutpat tortor semper a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam pellentesque pharetra magna, ac laoreet dolor. Nunc lobortis maximus vehicula. Vestibulum ultrices, tellus et mattis viverra, nulla nulla tincidunt risus, id semper mauris massa sed augue. Maecenas pulvinar libero purus, a egestas nibh convallis a. Donec pulvinar facilisis urna, nec sollicitudin justo tincidunt vel. Morbi eleifend ligula orci, id condimentum nisi cursus quis. Donec nec ex eu diam tincidunt fermentum. Donec faucibus enim enim, id malesuada dolor rutrum sit amet. Nullam non massa eleifend, interdum velit ac, accumsan leo. In hac habitasse platea dictumst. Cras pulvinar massa sed semper fermentum. Nam ullamcorper risus sit amet nibh eleifend, sed dictum metus posuere."
    }
];

function seedDB() {
    Campground.remove({}, function(err) {
        if(err) {
            console.log(err);
        }
        console.log("removed campgrounds!");
/*        //add a few campgrounds
        data.forEach(function(seed) {
            Campground.create(seed, function(err, campground) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but does not have wi-fi",
                            author: "Homer"
                            
                        }, function(err, comment) {
                            if(err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("created new comment");
                            }
                        });
                }
            });
        });*/
    });
}

module.exports = seedDB;