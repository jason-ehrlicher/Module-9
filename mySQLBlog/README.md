# Basic Blog App Backend Documentation

## Overview

This documentation outlines the backend implementation for a basic blog application. Built with Node.js and Express, the application leverages MySQL for data storage, managing functionalities like user registration, blog post management, comments, and likes.

## Prerequisites
- Node.js installed on your system
- MySQL installed and running on your local machine or a remote server
- Basic familiarity with JavaScript, Node.js, and relational databases

## Setup and Installation

1. Clone the repository: Clone the code from the repository where it is hosted.
2. Install dependencies: Navigate to the root directory of the project in your terminal and run `npm install` to install all required dependencies.
3. Environment Variables: Set up a .env file in the root directory with the following variables:
    - PORT: The port number for the server to listen on (e.g., 8081).
    - DB_NAME: The name of your MySQL database.
    - B_USER: Your MySQL database username.
    - DB_PASSWORD: Your MySQL database password.
    - DB_HOST: The hostname where your MySQL database is running (often localhost).
    - DB_PORT: The port number of your MySQL database (default is 3306).

## Running the Application

To start the application, run `node [server.js file]` from the root directory. Ensure that your MySQL database is operational before launching the application.

## Application Structure

- server.js: The entry point of the application. Sets up the Express server and routes.
- /routes: Contains route definitions for the application.
- /controllers: Contains the logic for handling requests for different routes.
- /models: Contains the Mongoose schema definitions for the database.
- dbConnect.js: Manages the connection to the MySQL database using Sequelize.

## API Endpoints

### User Routes
- GET /api/users: Fetch all users.
- POST /api/users/create: Create a new user.
- PUT /api/users/:id: Update a user by ID.
- DELETE /api/users/:id: Delete a user by ID.

### Post Routes
- GET /api/posts: Fetch all posts.
- POST /api/posts/create: Create a new post.
- PUT /api/posts/:id: Update a post by ID.
- DELETE /api/posts/:id: Delete a post by ID.

### Comment Routes
- GET /api/comments: Fetch all comments.
- POST /api/comments/create: Create a new comment.
- PUT /api/comments/:id: Update a comment by ID.
- DELETE /api/comments/:id: Delete a comment by ID.

### Like Routes
- GET /api/likes: Fetch all likes.
- POST /api/likes/create: Create a new like.
- DELETE /api/likes/:postId/:userId: Delete a like by Post ID and User ID.


## Database Schemas

- User: Contains fields for userName, email, and password.
- Post: Contains fields for userID (reference to User), title, description, and imageURL.
- Comment: Contains fields for postID (reference to Post), userID (reference to User), and text.
- Like: Contains fields for postID (reference to Post), and userID (reference to User). Unique index on postID and userID to ensure one like per user per post.

## Controllers

Each route is served by a controller that interacts with the MySQL database to perform CRUD operations, ensuring separation of concerns and modular code.

## Error Handling

Controllers handle errors and return appropriate responses with status codes to the client.

## Security Considerations

- Validate and sanitize user input.
- Use environment variables for sensitive information like database URI.
- Implement authentication and authorization for secure access to endpoints.

This documentation provides a basic overview. For more detailed information, refer to the comments and code within each file of the application.




