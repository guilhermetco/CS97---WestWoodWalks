# Westwood Walks login demo

A simple social media application with users, logins, posts, likes and comments - developed using 
React, Node, Express and MongoDB. This is not intended as a design template.  It's just a technology 
demonstration.  The Mongo database is hosted on mongodb.com.  Database access works.  Login works.
posts work.  Photo uploads work.

The next stage should be: adding better security, and then start building a database of locations
to be reviewed, and a way to make and search for location "posts".  (reviews)

Maps should be added.

This demo has a simple front end, which can be replaced.

This demo should work on Mac, Windows, or Linux.

#### What you need to run this code
1. Node (13.12.0)
2. NPM (6.14.4) or Yarn (1.22.4)

Install these first, then just run a couple of commands and it should work.

Keep in mind, everyone is sharing the same database, so feel free to add anything you 
like in posts, but keep in mind that everyone else will see it even if you are running
your own copy on your own computer, because the database is shared.  

Additional Dependencies you may need if they are not already on your system:

nodemon
webpack

Both of these can be installed with "npm install"

####  How to run this code
1. Clone this folder
3. Open command line in the cloned folder,
   - To install dependencies, run ```  npm install  ``` or ``` yarn ```
   - To run the application for development, run ```  npm run development  ``` or ``` yarn development ```
4. Open [localhost:3000](http://localhost:3000/) in the browser

Credit: Most of this is adapted from code from the book "Full Stack React Projects" by Shama Hoque, from 
Packt Publishers.  The book has good explanations of the technology used.

Jim Pickrell
---- 
