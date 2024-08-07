// use("crudDb")
// db.createCollection("courses")
// db.courses.insertOne({
//     name:"Harrys web dev free course",
//     price: 0,
//     assignment:12,
//     projects:45
// })
// db.courses.insertMany([
//     { name: "Harry's Web Dev Free Course", price: 0, assignment: 12, projects: 45 },
//     { name: "Intro to JavaScript", price: 0, assignment: 10, projects: 40 },
//     { name: "HTML & CSS Basics", price: 0, assignment: 8, projects: 30 },
//     { name: "React Fundamentals", price: 0, assignment: 15, projects: 50 },
//     { name: "Node.js Beginner Course", price: 0, assignment: 9, projects: 35 },
//     { name: "Django for Beginners", price: 0, assignment: 14, projects: 42 },
//     { name: "Python Web Development", price: 0, assignment: 11, projects: 38 },
//     { name: "Full Stack Web Dev", price: 0, assignment: 20, projects: 60 },
//     { name: "Database Management", price: 0, assignment: 7, projects: 25 },
//     { name: "Advanced CSS Techniques", price: 0, assignment: 13, projects: 48 }
//     ])

    // let a = db.courses.find({price:0})
    // console.log(a.toArray());
    // // console.log(a);

    // db.courses.updateMany({price:0},{$set:{price:100}})
    // db.courses.UpdateMany({})
    // db.courses.deleteOne({price:100})
    // let a = db.courses.find({assignment:{$eq : 8}})
    // console.log(a);

// db.createCollection("inventory")
use("inventory")
// db.inventory.insertMany( [
//     { "item": "Pens", "quantity": 350, "tags": [ "school", "office" ] },
//     { "item": "Erasers", "quantity": 15, "tags": [ "school", "home" ] },
//     { "item": "Maps", "tags": [ "office", "storage" ] },
//     { "item": "Books", "quantity": 5, "tags": [ "school", "storage", "home" ] }
//  ] )
db.inventory.find( { quantity: { $in: [ 5, 15 ] } }, { _id: 0 } )