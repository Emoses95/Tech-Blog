# Tech-Blog

## Description

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

This is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. The site is completely from scratch and deploy to Heroku. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Usage

GIVEN Tech Blog
WHEN a user visits the site for the first time
THEN a user is presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN a user click on the homepage option
THEN a user taken to the homepage
WHEN a user clicks on any other links in the navigation
THEN a user is prompted to either sign up or sign in
WHEN a user chooses to sign up
THEN a user is prompted to create a username and password
WHEN a user clicks on the sign-up button
THEN a user's credentials are saved and I am logged into the site
WHEN a user revisits the site at a later time and choose to sign in
THEN a user is prompted to enter my username and password
WHEN a user is signed in to the site
THEN a user sees the navigation links for the homepage, the dashboard, and the option to log out
WHEN a user clicks on the homepage option in the navigation
THEN a user is taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN a user clicks on an existing blog post
THEN a user is presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN a user enters a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN a user clicks on the dashboard option in the navigation
THEN a user is taken to the dashboard and presented with any blog posts a user has already created and the option to add a new blog post
WHEN a user clicks on the button to add a new blog post
THEN a user is prompted to enter both a title and contents for my blog post
WHEN a user clicks on the button to create a new blog post
THEN the title and contents of my post are saved and a user is taken back to an updated dashboard with s new blog post
WHEN a user clicks on one of my existing posts in the dashboard
THEN a user is able to delete or update my post and taken back to an updated dashboard
WHEN a user clicks on the logout option in the navigation
THEN a user signs out of the site
WHEN a user is idle on the site for more than a set time
THEN a user is able to view comments but a user is prompted to log in again before a user is add, update, or delete comments

## Deployed link

https://techblog9.herokuapp.com/login
