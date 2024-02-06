# Socket Chat App Backend Documentation

## Overview

This documentation provides an overview of a real-time chat application backend. The application uses Node.js with the Express framework and leverages Socket.IO for real-time bidirectional event-based communication. It allows users to send and receive messages instantly and displays an updated list of online users.

## Prerequisites

- Node.js installed on your system
- Basic understanding of JavaScript and Node.js.
- Familiarity with WebSocket communication, specifically Socket.IO.

## Setup and Installation

1. Clone the repository: Clone the code from the repository where it is hosted.
2. Install dependencies: Navigate to the root directory of the project in your terminal and run `npm install` to install all required dependencies.

## Running the Application

- Start the server by running `npm start` or `node index.js` from the terminal.
- If you have nodemon installed and prefer it for development purposes, you can also run `npm run dev`.

## Application Structure

- index.js: The main server file that sets up the HTTP server and Socket.IO.
- index.html: The frontend HTML file served to the client, which includes the chat UI and Socket.IO client-side logic.
- /node_modules: Directory for Node.js modules added through npm.
- package.json: Lists the project dependencies and other configurations.

## Key Features

- Real-Time Messaging: Utilizes WebSocket through Socket.IO for real-time communication between clients and the server.
- Dynamic User List: Shows a list of online users that updates in real-time as users join or leave the chat.
- Nickname Support: Allows users to set a nickname for themselves which is reflected in the chat messages and user list.

## Socket.IO Events

### Server-Side

- connection: Triggered when a client connects to the server. It's used to initialize a default nickname and update the user list.
- disconnect: Handled when a user disconnects to remove them from the user list and notify remaining users.
- chat message: Receives messages from clients and broadcasts them to all connected users.
- nickname: Allows a user to set a nickname that updates the user list and notifies users of the change.

### Client-Side

- chat message: Sends messages to the server and displays incoming messages from other users.
- user list: Updates the list of online users in the UI.
- nickname: Sends the chosen nickname to the server upon setting or changing it.

## Running the Application

After installation, the application will be running on http://localhost:3000. Open this URL in a web browser to start using the chat application.

## Security Considerations

- Sanitize Input: Always sanitize user inputs to prevent XSS attacks.
- Rate Limiting: Implement rate limiting for message sending to prevent spam.
- Secure WebSocket: Use wss:// in production to encrypt data transferred over WebSocket.


This README provides a basic guide to get the Socket Chat App up and running and outlines its core functionality. For a deeper dive into the code, refer to comments within the index.js and the client-side script in index.html.