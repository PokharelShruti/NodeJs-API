**NodeJs-API**

**Goal**
Build a simple REST API with main endpoints managing products in memory (no database yet):

GET /products — return the list of products

POST /products — add a new product

PUT /products/:id — update a product by id

DELETE /products/:id — delete a product by id

**Key Features and Concepts**
Node.js and Express Setup

Use express to create a web server.

Listen on port 3000.

Define routes/endpoints with app.get(), app.post(), app.put(), app.delete().

Hardcoded Data Storage

Products stored in an array in memory.

Example product: { id: 1, name: "Laptop", price: 1000 }

Handling Requests

GET /products sends the full products array as JSON.

POST /products reads new product data from request body and adds it to the array.

PUT /products/:id updates an existing product by matching id.

DELETE /products/:id removes a product by matching id.

Request & Response

Use req.params to get URL parameters (e.g., product id).

Use req.body to get JSON data sent in POST/PUT requests.

Send responses with res.json(), res.status().

Return appropriate status codes (e.g., 201 Created after POST).

Error Handling

Return 404 Not Found if product with given id does not exist.

Handle cases where data might be null or missing fields.

JavaScript Concepts Used

Arrow functions (p => p.id === id)

Array methods like .push(), .findIndex(), .splice()

Template literals for messages: `Product with id ${id} deleted`

What You Practiced
Setting up a Node.js server with Express

Creating RESTful routes for CRUD operations

Working with JSON data in requests and responses

Basic JavaScript array manipulation

Understanding HTTP methods and status codes

Testing API endpoints with Postman

Understanding URL parameters and request bodies

**Limitations**
Data is not persistent — restarting the server resets the product list.

No real database connection yet.

No authentication or validation.
