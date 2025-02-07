// Verify MongoDB installation
// Run the following command in the terminal
// test> mongo --version

// 1. Create Database and Collection
// test> use library Switch to 'library' database
library> db.createCollection('books')

// 2. Insert Data
library> db.books.insertMany([
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    publishedYear: 1988,
    genre: "Philosophical Fiction",
    ISBN: "9780061122415"
  },
  {
    title: "Without Ever Reaching the Summit",
    author: "Paulinho Assunção",
    publishedYear: 2024,
    genre: "Literary Fiction",
    ISBN: "978-620-789368-0"
  },
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    publishedYear: 1958,
    genre: "African Literature",
    ISBN: "9780385474542"
  },
  {
    title: "Half of a Yellow Sun",
    author: "Chimamanda Ngozi Adichie",
    publishedYear: 2006,
    genre: "Historical Fiction",
    ISBN: "9780307273673"
  },
  {
    title: "Nervous Conditions",
    author: "Tsitsi Dangarembga",
    publishedYear: 1988,
    genre: "Literary Fiction",
    ISBN: "9781913547003"
  }
]);

// 3. Retrieve Data
library> db.books.find().pretty()

// Query books by a specific author
library> db.books.find({ author: "Chinua Achebe" }).pretty()

// Find books published after 2000
library> db.books.find({ publishedYear: { $gt: 2000 } }).pretty()

// 4. Update Data
// Update publishedYear of a specific book
library> db.books.updateOne(
  { author: "Paulo Coelho"},
  { $set: { publishedYear: 2020 }}
);

// Add a new field 'rating' to all books with a default value
library> db.books.updateMany({}, { $set: { rating: 4 } });

// 5. Delete Data
// Delete a book by its ISBN
library> db.books.deleteOne({ ISBN: "9780307273673" });

// Remove all books of a particular genre
library> db.books.deleteMany({ genre: "Literary Fiction" });

// 6. Aggregation Pipeline
// Count books per genre
library> db.books.aggregate([
  { $group: { _id: "$genre", count: { $sum: 1 } } }
]);

// Calculate average published year of all books
library> db.books.aggregate([
  { $group: { _id: null, averageYear: { $avg: "$publishedYear" } } }
]);

// Identify the top-rated book
library> db.books.aggregate([
  { $sort: { rating: -1 } },
  { $limit: 1 }
]);

// 7. Indexing
// Create an index on the author field for query optimization
library> db.books.createIndex({ author: 1 });


// Create Users collection
db.createCollection("users");

// Create Products collection
db.createCollection("products");

// Create Orders collection
db.createCollection("orders");

// Insert Users
db.users.insertMany([
  {
    "username": "john_Karanja",
    "email": "johnkaranja@email.com",
    "password": "hashed_password_123"
  },
  {
    "username": "jane_simba",
    "email": "jane.simba@email.com",
    "password": "hashed_password_456"
  },
  {
    "username": "michael_barongo",
    "email": "michael.barongo@email.com",
    "password": "hashed_password_789"
  },
  {
    "username": "emily_warui",
    "email": "emilywarui@email.com",
    "password": "hashed_password_321"
  },
  {
    "username": "david_kipchumba",
    "email": "david.kipchumba@email.com",
    "password": "hashed_password_654"
  }
]);

// Insert Products
db.products.insertMany([
  {
    "name": "Wireless Headphones",
    "description": "Noise-canceling over-ear headphones",
    "price": 120.99,
    "categories": ["Electronics", "Audio"],
    "stock_remaining": 50,
    "variants": { "color": "Black", "model": "Pro X", "extra_cost": 10.00 }
  },
  {
    "name": "Smartphone",
    "description": "Latest model with advanced features",
    "price": 699.99,
    "categories": ["Electronics", "Mobile"],
    "stock_remaining": 30,
    "variants": { "color": "Blue", "model": "Ultra", "extra_cost": 50.00 }
  },
  {
    "name": "Gaming Laptop",
    "description": "High-performance gaming laptop",
    "price": 1599.99,
    "categories": ["Computers", "Gaming"],
    "stock_remaining": 20,
    "variants": { "color": "Red", "model": "RTX 4090", "extra_cost": 200.00 }
  },
  {
    "name": "Smartwatch",
    "description": "Fitness tracking smartwatch",
    "price": 249.99,
    "categories": ["Wearables", "Fitness"],
    "stock_remaining": 80,
    "variants": { "color": "Silver", "model": "Series 7", "extra_cost": 30.00 }
  },
  {
    "name": "Bluetooth Speaker",
    "description": "Portable waterproof speaker",
    "price": 89.99,
    "categories": ["Electronics", "Audio"],
    "stock_remaining": 100,
    "variants": { "color": "Green", "model": "Mini", "extra_cost": 5.00 }
  }
]);

// Insert Orders
db.orders.insertOne({
  "userId": ObjectId("67a663aa7f6ca4762bcb0ce2"),
  "orderDate": "2024-02-07T10:00:00Z",
  "status": "Shipped",
  "items": [
    { "productId": ObjectId("67a6641c7f6ca4762bcb0ce7"), "name": "Wireless Headphones", "price": 120.99, "quantity": 1 }
  ],
  "totalAmount": 120.99
});

db.orders.insertOne({
  "userId": ObjectId("67a663aa7f6ca4762bcb0ce3"),
  "orderDate": "2024-02-06T12:30:00Z",
  "status": "Delivered",
  "items": [
    { "productId": ObjectId("67a6641c7f6ca4762bcb0ce8"), "name": "Smartphone", "price": 699.99, "quantity": 1 }
  ],
  "totalAmount": 699.99
});

db.orders.insertOne({
  "userId": ObjectId("67a663aa7f6ca4762bcb0ce4"),
  "orderDate": "2024-02-05T15:45:00Z",
  "status": "Processing",
  "items": [
    { "productId": ObjectId("67a6641c7f6ca4762bcb0ce9"), "name": "Gaming Laptop", "price": 1599.99, "quantity": 1 }
  ],
  "totalAmount": 1599.99
});

db.orders.insertOne({
  "userId": ObjectId("67a663aa7f6ca4762bcb0ce5"),
  "orderDate": "2024-02-04T18:20:00Z",
  "status": "Pending",
  "items": [
    { "productId": ObjectId("67a6641c7f6ca4762bcb0cea"), "name": "Smartwatch", "price": 249.99, "quantity": 2 }
  ],
  "totalAmount": 499.98
});

db.orders.insertOne({
  "userId": ObjectId("67a663aa7f6ca4762bcb0ce6"),
  "orderDate": "2024-02-03T20:10:00Z",
  "status": "Cancelled",
  "items": [
    { "productId": ObjectId("67a6641c7f6ca4762bcb0ceb"), "name": "Bluetooth Speaker", "price": 89.99, "quantity": 3 }
  ],
  "totalAmount": 269.97
});

// Display all orders
db.orders.find().pretty();