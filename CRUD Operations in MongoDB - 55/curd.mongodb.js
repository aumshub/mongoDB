use("CurdDB");
// console.log(db);


//CREATE:
db.createCollection("courses")


// db.courses.insertOne({  // insert a single document in the form of an object.
//     name: "web development",
//     price: 0,
//     assignments: 3,
//     projects: 2
// });

// db.courses.insertMany([  // insert multiple documents in the form of the array of objects.  {

//     {
//     name: "web development",
//     price: 0,
//     assignments: 3,
//     projects: 2,
//   },
//   {
//     name: "graphic design",
//     price: 50,
//     assignments: 5,
//     projects: 1,
//   },
//   {
//     name: "data science",
//     price: 100,
//     assignments: 6,
//     projects: 3,
//   },
//   {
//     name: "machine learning",
//     price: 120,
//     assignments: 4,
//     projects: 2,
//   },
//   {
//     name: "digital marketing",
//     price: 30,
//     assignments: 2,
//     projects: 1,
//   },
//   {
//     name: "cybersecurity",
//     price: 80,
//     assignments: 4,
//     projects: 3,
//   },
//   {
//     name: "cloud computing",
//     price: 150,
//     assignments: 6,
//     projects: 2,
//   },
//   {
//     name: "UI/UX design",
//     price: 60,
//     assignments: 5,
//     projects: 2,
//   },
//   {
//     name: "mobile app development",
//     price: 200,
//     assignments: 8,
//     projects: 4,
//   },
//   {
//     name: "blockchain development",
//     price: 300,
//     assignments: 7,
//     projects: 3,
//   },
// ]);


//READ:
// find all courses with price 3
let a = db.courses.find({ price: 50 });
// console.log(a);
// console.log(a.count());
// console.log(a.toArray());


let b = db.courses.findOne({price: 50});

// console.log(b);


// UPDATE:

// db.courses.updateOne({price: 50}, {$set: {price: 55}});

// db.courses.updateMany({price: 50}, {$set: {price: 55}});

// DELETE:

// db.courses.deleteOne({price: 55});
// db.courses.deleteMany({price: 55});
