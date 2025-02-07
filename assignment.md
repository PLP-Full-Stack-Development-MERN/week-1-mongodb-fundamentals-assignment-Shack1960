## Overview
    This project demonstrates basic MongoDB operations including setup, CRUD, data modeling, and more.

Step 1: Download MongoDB

1. Go to the official MongoDB download page: <https://www.mongodb.com/download-center/community>
2. Click on the "Downloads" tab and select the version of MongoDB you want to install (e.g.,
Community Server).
3. Choose the platform (Windows, macOS, or Linux) that matches your operating system.
4. Select the installation type (e.g., Standalone Server or Docker).

### Step 2: Install MongoDB

1. Follow the installation instructions for your chosen platform:
        * Windows: Run the downloaded installer and follow the prompts to install MongoDB.

2. Once installed, restart your system.

### Step 3: Verify MongoDB Installation

1. Open a terminal or command prompt:
        * Windows: Press `Win + R` and type `cmd`.
        
2. Run the following command to verify MongoDB installation:
```bash
mongo --version

## 1.Database and Collection Creation:

## CRUD Operations
    Examples and commands for inserting, retrieving, updating, and deleting documents.
test> use library
switched to db library
library> db.createCollection('books')
{ ok: 1 }

## 2.Insert Data:
library> db.books.insertMany([
...   {
...     title: "The Alchemist",
...     author: "Paulo Coelho",
...     publishedYear: 1988,
...     genre: "Philosophical Fiction",
...     ISBN: "9780061122415"
...   },
...   {
...     title: "Without Ever Reaching the Summit",
...     author: "Paulinho Assunção", //Based on web search
...     publishedYear: 2024,
...     genre: "Literary Fiction",
...     ISBN: "978-620-789368-0"
...   },
...   {
...     title: "Things Fall Apart",
...     author: "Chinua Achebe",
...     publishedYear: 1958,
...     genre: "African Literature",
...     ISBN: "9780385474542"
...   },
...   {
...     title: "Half of a Yellow Sun",
...     author: "Chimamanda Ngozi Adichie",
...     publishedYear: 2006,
...     genre: "Historical Fiction",
...     ISBN: "9780307273673"
...   },
...   {
...     title: "Nervous Conditions",
...     author: "Tsitsi Dangarembga",
...     publishedYear: 1988,
...     genre: "Literary Fiction",
...     ISBN: "9781913547003"
...   }
... ]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('67a5e74a9f4f2bd120cb0ce2'),
    '1': ObjectId('67a5e74a9f4f2bd120cb0ce3'),
    '2': ObjectId('67a5e74a9f4f2bd120cb0ce4'),
    '3': ObjectId('67a5e74a9f4f2bd120cb0ce5'),
    '4': ObjectId('67a5e74a9f4f2bd120cb0ce6')
  }
}

## 3.Retrieve Data:
library> db.books.find().pretty()
[
  {
    _id: ObjectId('67a5e74a9f4f2bd120cb0ce2'),
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    publishedYear: 1988,
    genre: 'Philosophical Fiction',
    ISBN: '9780061122415'
  },
  {
    _id: ObjectId('67a5e74a9f4f2bd120cb0ce3'),
    title: 'Without Ever Reaching the Summit',
    author: 'Paulinho Assunção',
    publishedYear: 2024,
    genre: 'Literary Fiction',
    ISBN: '978-620-789368-0'
  },
  {
    _id: ObjectId('67a5e74a9f4f2bd120cb0ce4'),
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    publishedYear: 1958,
    genre: 'African Literature',
    ISBN: '9780385474542'
  },
  {
    _id: ObjectId('67a5e74a9f4f2bd120cb0ce5'),
    title: 'Half of a Yellow Sun',
    author: 'Chimamanda Ngozi Adichie',
    publishedYear: 2006,
    genre: 'Historical Fiction',
    ISBN: '9780307273673'
  },
  {
    _id: ObjectId('67a5e74a9f4f2bd120cb0ce6'),
    title: 'Nervous Conditions',
    author: 'Tsitsi Dangarembga',
    publishedYear: 1988,
    genre: 'Literary Fiction',
    ISBN: '9781913547003'
  }
]

### Query books based on a specific author:
library> db.books.find({ author: "Chinua Achebe" }).pretty()
[
  {
    _id: ObjectId('67a5e74a9f4f2bd120cb0ce4'),
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    publishedYear: 1958,
    genre: 'African Literature',
    ISBN: '9780385474542'
  }
]

db.books.find({ author: "Paulo Coelho" }).pretty()
[
  {
    _id: ObjectId('67a5e74a9f4f2bd120cb0ce2'),
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    publishedYear: 1988,
    genre: 'Philosophical Fiction',
    ISBN: '9780061122415'
  }
]

db.books.find({ author: "Chimamanda Ngozi Adichie" }).pretty()
[
  {
    _id: ObjectId('67a5e74a9f4f2bd120cb0ce5'),
    title: 'Half of a Yellow Sun',
    author: 'Chimamanda Ngozi Adichie',
    publishedYear: 2006,
    genre: 'Historical Fiction',
    ISBN: '9780307273673',
  }
]

db.books.find({ author: "Tsitsi Dangarembga" }).pretty()
[
  {
    _id: ObjectId('67a5e74a9f4f2bd120cb0ce6'),
    title: 'Nervous Conditions',
    author: 'Tsitsi Dangarembga',
    publishedYear: 1988,
    genre: 'Literary Fiction',
    ISBN: '9781913547003',
  }
]

### Find books published after the year 2000.
library> db.books.find({ publishedYear: { $gt: 2000 } }).pretty()
[
  {
    _id: ObjectId('67a5e74a9f4f2bd120cb0ce3'),
    title: 'Without Ever Reaching the Summit',
    author: 'Paulinho Assunção',
    publishedYear: 2024,
    genre: 'Literary Fiction',
    ISBN: '978-620-789368-0'
  },
  {
    _id: ObjectId('67a5e74a9f4f2bd120cb0ce5'),
    title: 'Half of a Yellow Sun',
    author: 'Chimamanda Ngozi Adichie',
    publishedYear: 2006,
    genre: 'Historical Fiction',
    ISBN: '9780307273673'
  }
]
## 4.Update Data

### Update the publishedYear of a specific book.
 db.books.updateOne(
... { author: "Paulo Coelho"},
... { $set: { publishedYear: 2020 }}
... )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

### Add a new field callled rating to all books and set a default value.
db.books.updateMany( {}, { $set: { rating: 4 } }
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 5,
  modifiedCount: 5,
  upsertedCount: 0
}

## 5.Delete Data

### Delete a book by its ISBN.
db.books.deleteOne(
... { ISBN: "9780307273673" })
{ acknowledged: true, deletedCount: 1 }

### Remove all books of a particular genre.
db.books.deleteOne(
... { ISBN: "9780307273673" },
... )
{ acknowledged: true, deletedCount: 1 }
library> db.books.deleteMany(
... { genre: "Literary Fiction" })
{ acknowledged: true, deletedCount: 2 }

 ## Aggregation and Indexing
    Commands for aggregation pipelines and index creation, along with their benefits.
## 7.Aggregation Pipeline
### Total number of books per genre.
db.books.aggregate([
  { $group: { _id: "$genre", count: { $sum: 1 } } }
])

### Calculate Average published year of all books.
db.books.aggregate([
  { $group: { _id: null, averageYear: { $avg: "$publishedYear" } } }
])

### Identify the top-rated book.
db.books.aggregate([
  { $sort: { rating: -1 } },  // Sort descending by rating
  { $limit: 1 }
])

## 8.Indexing

### Create an index on the author field to optimize query.
db.books.createIndex({ author: 1 })

### Benefits of Indexing:
Performance: Speeds up query performance by reducing the number of documents scanned.
Query Optimization: Helps MongoDB’s query planner select efficient query plans.



```
use E_Commerce
switched to db E_Commerce
E_Commerce> // Create Users collection

E_Commerce> db.createCollection("users");
{ ok: 1 }
E_Commerce>

E_Commerce> // Create Products collection

E_Commerce> db.createCollection("products");
{ ok: 1 }
E_Commerce>

E_Commerce> // Create Orders collection

E_Commerce> db.createCollection("orders");
{ ok: 1 }


db.users.insertMany([
...   {
...     "username": "john_Karanja",
...     "email": "johnkaranja@email.com",
...     "password": "hashed_password_123"
...   },
...   {
...     "username": "jane_simba",
...     "email": "jane.simba@email.com",
...     "password": "hashed_password_456"
...   },
...   {
...     "username": "michael_barongo",
...     "email": "michael.barongo@email.com",
...     "password": "hashed_password_789"
...   },
...   {
...     "username": "emily_warui",
...     "email": "emilywarui@email.com",
...     "password": "hashed_password_321"
...   },
...   {
...     "username": "david_kipchumba",
...     "email": "david.kipchumba@email.com",
...     "password": "hashed_password_654"
...   }
... ]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('67a663aa7f6ca4762bcb0ce2'),
    '1': ObjectId('67a663aa7f6ca4762bcb0ce3'),
    '2': ObjectId('67a663aa7f6ca4762bcb0ce4'),
    '3': ObjectId('67a663aa7f6ca4762bcb0ce5'),
    '4': ObjectId('67a663aa7f6ca4762bcb0ce6')
  }
}

// Insert Products

E_Commerce> db.products.insertMany([
...   {
...     "name": "Wireless Headphones",
...     "description": "Noise-canceling over-ear headphones",
...     "price": 120.99,
...     "categories": ["Electronics", "Audio"],
...     "stock_remaining": 50,
...     "variants": { "color": "Black", "model": "Pro X", "extra_cost": 10.00 }
...   },
...   {
...     "name": "Smartphone",
...     "description": "Latest model with advanced features",
...     "price": 699.99,
...     "categories": ["Electronics", "Mobile"],
...     "stock_remaining": 30,
...     "variants": { "color": "Blue", "model": "Ultra", "extra_cost": 50.00 }
...   },
...   {
...     "name": "Gaming Laptop",
...     "description": "High-performance gaming laptop",
...     "price": 1599.99,
...     "categories": ["Computers", "Gaming"],
...     "stock_remaining": 20,
...     "variants": { "color": "Red", "model": "RTX 4090", "extra_cost": 200.00 }
...   },
...   {
...     "name": "Smartwatch",
...     "description": "Fitness tracking smartwatch",
...     "price": 249.99,
...     "categories": ["Wearables", "Fitness"],
...     "stock_remaining": 80,
...     "variants": { "color": "Silver", "model": "Series 7", "extra_cost": 30.00 }
...   },
...   {
...     "name": "Bluetooth Speaker",
...     "description": "Portable waterproof speaker",
...     "price": 89.99,
...     "categories": ["Electronics", "Audio"],
...     "stock_remaining": 100,
...     "variants": { "color": "Green", "model": "Mini", "extra_cost": 5.00 }
...   }
... ]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('67a6641c7f6ca4762bcb0ce7'),
    '1': ObjectId('67a6641c7f6ca4762bcb0ce8'),
    '2': ObjectId('67a6641c7f6ca4762bcb0ce9'),
    '3': ObjectId('67a6641c7f6ca4762bcb0cea'),
    '4': ObjectId('67a6641c7f6ca4762bcb0ceb')
  }
}


db.orders.insertOne(
...   {
...     "userId": ObjectId("67a663aa7f6ca4762bcb0ce2"),
...     "orderDate": "2024-02-07T10:00:00Z",
...     "status": "Shipped",
...     "items": [
...       { "productId": ObjectId("67a6641c7f6ca4762bcb0ce7"), "name": "Wireless
Headphones", "price": 120.99, "quantity": 1 }
...     ],
...     "totalAmount": 120.99
...   }
... );

{
  acknowledged: true,
  insertedId: ObjectId('67a6677d7f6ca4762bcb0cec')
}
E_Commerce> db.orders.insertOne(
...   {
...     "userId": ObjectId("67a663aa7f6ca4762bcb0ce3"),
...     "orderDate": "2024-02-06T12:30:00Z",
...     "status": "Delivered",
...     "items": [
...       { "productId": ObjectId("67a6641c7f6ca4762bcb0ce8"), "name": "Smartphone", "price": 699.99, "quantity": 1 }
...     ],
...     "totalAmount": 699.99
...   }
... );
{
  acknowledged: true,
  insertedId: ObjectId('67a667927f6ca4762bcb0ced')
}
E_Commerce> db.orders.insertOne(
...   {
...     "userId": ObjectId("67a663aa7f6ca4762bcb0ce4"),
...     "orderDate": "2024-02-05T15:45:00Z",
...     "status": "Processing",
...     "items": [
...       { "productId": ObjectId("67a6641c7f6ca4762bcb0ce9"), "name": "Gaming Laptop", "price": 1599.99, "quantity": 1 }
...     ],
...     "totalAmount": 1599.99
...   }
... );
{
  acknowledged: true,
  insertedId: ObjectId('67a667a57f6ca4762bcb0cee')
}
E_Commerce> db.orders.insertOne(
...   {
...     "userId": ObjectId("67a663aa7f6ca4762bcb0ce5"),
...     "orderDate": "2024-02-04T18:20:00Z",
...     "status": "Pending",
...     "items": [
...       { "productId": ObjectId("67a6641c7f6ca4762bcb0cea"), "name": "Smartwatch", "price": 249.99, "quantity": 2 }
...     ],
...     "totalAmount": 499.98
...   }
... );
{
  acknowledged: true,
  insertedId: ObjectId('67a667b57f6ca4762bcb0cef')
}
E_Commerce> db.orders.insertOne(
...   {
...     "userId": ObjectId("67a663aa7f6ca4762bcb0ce6"),
...     "orderDate": "2024-02-03T20:10:00Z",
...     "status": "Cancelled",
...     "items": [
...       { "productId": ObjectId("67a6641c7f6ca4762bcb0ceb"), "name": "Bluetooth Speaker", "price": 89.99, "quantity": 3 }
...     ],
...     "totalAmount": 269.97
...   }
... );
{
  acknowledged: true,
  insertedId: ObjectId('67a667c37f6ca4762bcb0cf0')
}
E_Commerce> db.E_commerce.find().pretty()

E_Commerce> db.E_Commerce.find().pretty()

E_Commerce> show collections
orders
products
users
E_Commerce> db.orders.find().pretty()
[
  {
    _id: ObjectId('67a6677d7f6ca4762bcb0cec'),
    userId: ObjectId('67a663aa7f6ca4762bcb0ce2'),
    orderDate: '2024-02-07T10:00:00Z',
    status: 'Shipped',
    items: [
      {
        productId: ObjectId('67a6641c7f6ca4762bcb0ce7'),
        name: 'Wireless Headphones',
        price: 120.99,
        quantity: 1
      }
    ],
    totalAmount: 120.99
  },
  {
    _id: ObjectId('67a667927f6ca4762bcb0ced'),
    userId: ObjectId('67a663aa7f6ca4762bcb0ce3'),
    orderDate: '2024-02-06T12:30:00Z',
    status: 'Delivered',
    items: [
      {
        productId: ObjectId('67a6641c7f6ca4762bcb0ce8'),
        name: 'Smartphone',
        price: 699.99,
        quantity: 1
      }
    ],
    totalAmount: 699.99
  },
  {
    _id: ObjectId('67a667a57f6ca4762bcb0cee'),
    userId: ObjectId('67a663aa7f6ca4762bcb0ce4'),
    orderDate: '2024-02-05T15:45:00Z',
    status: 'Processing',
    items: [
      {
        productId: ObjectId('67a6641c7f6ca4762bcb0ce9'),
        name: 'Gaming Laptop',
        price: 1599.99,
        quantity: 1
      }
    ],
    totalAmount: 1599.99
  },
  {
    _id: ObjectId('67a667b57f6ca4762bcb0cef'),
    userId: ObjectId('67a663aa7f6ca4762bcb0ce5'),
    orderDate: '2024-02-04T18:20:00Z',
    status: 'Pending',
    items: [
      {
        productId: ObjectId('67a6641c7f6ca4762bcb0cea'),
        name: 'Smartwatch',
        price: 249.99,
        quantity: 2
      }
    ],
    totalAmount: 499.98
  },
  {
    _id: ObjectId('67a667c37f6ca4762bcb0cf0'),
    userId: ObjectId('67a663aa7f6ca4762bcb0ce6'),
    orderDate: '2024-02-03T20:10:00Z',
    status: 'Cancelled',
    items: [
      {
        productId: ObjectId('67a6641c7f6ca4762bcb0ceb'),
        name: 'Bluetooth Speaker',
        price: 89.99,
        quantity: 3
      }
    ],
    totalAmount: 269.97
  }
]

```
Logical Data Separation – The database schema efficiently organizes users, products, and orders as separate collections.
Structured Order Items – Instead of storing only productId, I also store name, price, and quantity, reducing the need for frequent joins.
Basic Order Management –  track order status (Pending, Processing, Shipped, etc.), which is essential for e-commerce operations.