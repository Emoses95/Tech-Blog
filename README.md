# Tech-Blog

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