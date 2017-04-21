CampSite - a app created with NodeJs, ExpressJS and MongoDB.

RESTFUL ROUTES

name        url         verb        description
==================================================================
Index       /dogs            GET         Display a list of all dogs
New         /dogs/new        GET         Display form to make a new dog
Create      /dogs            POST        Add new dog to DB.
Show        /dogs/:id        GET         Shows info about one dog.
Edit        /dogs/:id/edit   GET         Show edit form for one dog.
Update      /dogs/:id        PUT         Update a particular dog, then redirect somewhere
Destroy     /dogs/:id        DELETE      Delete a particular dog, then redirect somewhere

//CAMPGROUNDS
INDEX   /campgrounds
NEW     /campgrounds/new
CREATE  /campgrounds
SHOW    /campgrounds/:id

//COMMENTS - Nested Routes
NEW     /campgrounds/:id/comments/new   GET
CREATE  /campgrounds/:id/comments       POST
