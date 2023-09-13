
# API

This Nest.js API project is designed to manage and interact with data objects that have the following attributes: `id`, `title`, `description`, and `status`. It provides endpoints to create, read, update, and delete these objects.


## Prerequisites
 Node.js and npm installed on your system.
 Git for cloning the repository (optional but recommended).

## Usage
You can use this API to perform CRUD (Create, Read, Update, Delete) operations on data objects with the following attributes:

id (Unique identifier for each object)
title (Title of the object)
description (Description of the object)
status (Status of the object)
## API Endpoints
The following API endpoints are available:

GET /api/objects - Retrieve a list of all objects.
GET /api/objects/:id - Retrieve a specific object by ID.
POST /api/objects - Create a new object.
PUT /api/objects/:id - Update an existing object by ID.
DELETE /api/objects/:id - Delete an object by ID.
Each endpoint requires specific request parameters and provides JSON responses.
## Folder Structure
The project follows the following folder structure:

src/ - Contains the source code of the Nest.js application.
test/ - Contains unit and integration tests.
