# Module-9

Repository containing all exercises for Module 9

## Exercise 1 (Slide 16):

Review your Calculator application from Module 5 to make sure that it uses a proper MVC structure.
    
*Screenshot for Exercise 1 is in "Exercise 1" folder*

## Exercise 2 (Slide 28):

Create an express back-end application for a Blog website using MongoDB. You should refer to your database model from Module 8 for this, ensuring that your app matches the model.

**Requirements:**
- Your system should have a proper MVC Structure
- The system should be able to create users.
- The users should be able to create multiple posts (posts should be very basic with
  title, description and image)
 - Other users should be able to like the posts and comment on the posts.

*Exercise 2 is in the folder titled "mongoBlog"*

## Exercise 3 (Slide 42):

Create an express back-end application for a Blog website using MySQL. You should refer to your database model from Module 8 for this, ensuring that your app matches the model.

**Requirements:** 
- Your system should have a proper MVC Structure
- The system should be able to create users.
- The users should be able to create multiple posts (posts should be very basic with
  title, description and image)
- Other users should be able to like the posts and comment on the posts.

*Exercise 3 is in the folder titled "mySQLBlog"*

## Exercise 4 (Slide 52):

Choose a third-party microservice (see the list of [free JSON APIs](https://docs.google.com/spreadsheets/d/15iDpjqyBkSse9wcN7vvQvORBvX8P_ivAjm-iKXp776Y/edit#gid=0)) and connect it to your current express application (or a new one) with its own routes, controller and model, to add new functionality to your application.

**Try to include support for either or both types of request parameters:**
- via the query - eg. GET http://localhost:8080/api/users?page=1
- via the params - eg. PUT http://localhost:8080/api/users/1234

## Exercise 5 (Slide 61):

Using the guide at https://socket.io/get-started/chat as a helper, try to implement a basic chat app which includes one of their suggested extensions (or come up with your own!):

- Broadcast a message to connected users when someone connects or disconnects.
- Add support for nicknames.
- Don’t send the same message to the user that sent it. Instead, append the message
  directly as soon as he/she presses enter.
- Add “{user} is typing” functionality.
- Show who’s online.

*Exercise 5 is in the folder titled "socket-chat-app"*
