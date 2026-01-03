# Services Folder

The point of the services folder is to run the api endpoints securely (with authentication).

When you make a new endpoint and want to use it in the frontend, you have to define it within a service (in this folder), and run it through api.js so that it ensures the call is secure. Just look at some of the other files in this folder for examples of how this works.

To do this, I split some of the routes up into different services (just for clarity).

For example, I put authService and userService in different files even though they both run through the user endpoint.