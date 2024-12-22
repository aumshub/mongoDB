MongoDB CRUD Operations
Introduction
This document provides an overview of how to perform CRUD (Create, Read, Update, Delete) operations in MongoDB using the CurdDB database. The operations are executed on a collection called courses.

Connecting to the Database
Before performing any operation, connect to the CurdDB database using the following command:

js
Copy code
use("CurdDB");
1. CREATE - Adding Documents to the Collection
1.1 Creating a Collection
To create a new collection named courses, use the following command:

js
Copy code
db.createCollection("courses");
1.2 Inserting a Single Document
You can insert a single document into the courses collection using the insertOne() method:

js
Copy code
db.courses.insertOne({
  name: "web development",
  price: 0,
  assignments: 3,
  projects: 2
});
1.3 Inserting Multiple Documents
To insert multiple documents in one operation, use the insertMany() method:

js
Copy code
db.courses.insertMany([
  { name: "web development", price: 0, assignments: 3, projects: 2 },
  { name: "graphic design", price: 50, assignments: 5, projects: 1 },
  { name: "data science", price: 100, assignments: 6, projects: 3 },
  { name: "machine learning", price: 120, assignments: 4, projects: 2 },
  { name: "digital marketing", price: 30, assignments: 2, projects: 1 },
  { name: "cybersecurity", price: 80, assignments: 4, projects: 3 },
  { name: "cloud computing", price: 150, assignments: 6, projects: 2 },
  { name: "UI/UX design", price: 60, assignments: 5, projects: 2 },
  { name: "mobile app development", price: 200, assignments: 8, projects: 4 },
  { name: "blockchain development", price: 300, assignments: 7, projects: 3 }
]);
2. READ - Retrieving Data from the Collection
2.1 Finding Multiple Documents
To find all courses with a specific price, use the find() method. Example to find all courses with a price of 50:

js
Copy code
let a = db.courses.find({ price: 50 });
You can count the number of documents returned:

js
Copy code
console.log(a.count());
To convert the result to an array:

js
Copy code
console.log(a.toArray());
2.2 Finding a Single Document
To retrieve one document that matches a specific query:

js
Copy code
let b = db.courses.findOne({ price: 50 });
console.log(b);
3. UPDATE - Modifying Documents
3.1 Updating a Single Document
To update a single document that matches a query, use the updateOne() method. For example, to update the price of the course with price 50 to 55:

js
Copy code
db.courses.updateOne({ price: 50 }, { $set: { price: 55 } });
3.2 Updating Multiple Documents
To update multiple documents matching a query, use the updateMany() method. For example, to update the price of all courses with price 50 to 55:

js
Copy code
db.courses.updateMany({ price: 50 }, { $set: { price: 55 } });
4. DELETE - Removing Documents from the Collection
4.1 Deleting a Single Document
To delete a single document that matches a query, use the deleteOne() method. For example, to delete the course with price 55:

js
Copy code
db.courses.deleteOne({ price: 55 });
4.2 Deleting Multiple Documents
To delete multiple documents matching a query, use the deleteMany() method. For example, to delete all courses with price 55:

js
Copy code
db.courses.deleteMany({ price: 55 });
Conclusion
This document outlines the basic CRUD operations for interacting with MongoDB collections. The operations include creating collections, inserting, reading, updating, and deleting documents. These methods are essential for working with MongoDB databases in any project.






