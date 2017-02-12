var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    flash           = require("connect-flash"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    methodOverride  = require("method-override"),
    Campground      = require("./models/campground"),
    Comment         = require("./models/comment"),
    User            = require("./models/user"),
    seedDB          = require("./seeds");

// Requiring the ROUTES
var commentRoutes       = require("./routes/comments"),
    campgroundsRoutes   = require("./routes/campgrounds"),
    indexRoutes         = require("./routes/index");

/*
var url = process.env.DATABASEURL || "mongodb://localhost/yelp_camp_v12";
mongoose.connect(url);
*/
mongoose.connect('mongodb://localhost/campsite');
mongoose.Promise = require('bluebird');
app.use(bodyParser.urlencoded({extended: true}));
app.set ("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
//console.log(__dirname);
app.use(methodOverride("_method"));
app.use(flash());

//seedDB(); //seed the databas

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//adding our own middleware so all pages can access currentUser
app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoutes);
app.use("/campgrounds",campgroundsRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

// ============
// START SERVER
// ============
app.listen(process.env.port || 3000, process.env.IP, function() {
    console.log("Server has started!");
});
