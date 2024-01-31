# Basic Blog App Backend Documentation

## Overview

This documentation covers the backend implementation of a basic blog application. The application is built using Node.js with Express, and uses MongoDB as its database. The backend handles various functionalities including user management, post handling, comments, and likes.

## Prerequisites
- Node.js installed
- MongoDB installed and running
- Knowledge of JavaScript and Node.js

## Setup and Installation

1. Clone the repository: Clone the code from the repository where it is hosted.
2. Install dependencies: Navigate to the root directory of the project in your terminal and run `npm install` to install all required dependencies.
3. Environment Variables: Set up a .env file in the root directory with the following variables:
    - PORT: The port number on which the server will run.
    - DB_URI: The MongoDB connection URI.

## Running the Application

To start the application, run `node [server.js file]` from the root directory. Ensure MongoDB is running before starting the application.

## Application Structure

- server.js: The entry point of the application. Sets up the Express server and routes.
- /routes: Contains route definitions for the application.
- /controllers: Contains the logic for handling requests for different routes.
- /models: Contains the Mongoose schema definitions for the database.
- dbConnect.js: Handles the connection to the MongoDB database.

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
- Post: Contains fields for userID (reference to User), title, description, imageURL, and timestamp.
- Comment: Contains fields for postID (reference to Post), userID (reference to User), text, and timestamp.
- Like: Contains fields for postID (reference to Post), userID (reference to User), and timestamp. Unique index on postID and userID to ensure one like per user per post.

## Controllers

Each route is handled by a specific controller function that interacts with the database models to perform CRUD operations.

## Error Handling

Controllers handle errors and return appropriate responses with status codes to the client.

## Security Considerations

- Validate and sanitize user input.
- Use environment variables for sensitive information like database URI.
- Implement authentication and authorization for secure access to endpoints.

This documentation provides a basic overview. For more detailed information, refer to the comments and code within each file of the application.





