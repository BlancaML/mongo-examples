// mongoimport --drop --db places --collection restaurants --file /Users/blancamorenodeluna/Documents/Ironhack/labs/2_module/startingMongo/mongo-examples/datasets/restaurants.json --jsonArray
// mongoimport --drop --db crunch --collection companies --file /Users/blancamorenodeluna/Documents/Ironhack/labs/2_module/startingMongo/mongo-examples/datasets/companies.json
// mongoimport --drop --db work --collection employees --file /Users/blancamorenodeluna/Documents/Ironhack/labs/2_module/startingMongo/mongo-examples/datasets/employees.json --jsonArray  



// Employees
db.employees.count() // 6

db.employees.find()

db.employees.find({"name":{$eq:"Steve"}})

db.employees.find({"age":{$gt:30}})

db.employees.findOne({"phone.ext":{$eq:"2143"}})

db.employees.find({"age":{$lte:30}})

db.employees.find({"favorites.food":{$eq:"pizza"}})

db.employees.update({"name": "Willy"}, {$set:{"phone.personal":"93-123-45-67"}})

db.employees.find({"name": "Willy"})

db.employees.update({"name": "Bob"}, {$set:{"privileges":"user"}})

db.employees.find({"name": "Bob"})

db.employees.find({"favorites.artist":{$eq:"Picasso"}})

db.employees.find({"name": "John"})
db.employees.deleteOne({"_id" : ObjectId("60b6878d56ef0785f66191e6")})


// Restaurants

db.restaurants.count() // 3772

db.employees.find()

db.restaurants.find({}, {restaurant_id: 1,name: 1,borough: 1, cuisine: 1, _id: 0})

db.restaurants.find({}, {restaurant_id: 1,name: 1,borough: 1, zipcode: 1, _id: 0})

db.restaurants.find({"borough":{$eq:"Bronx"}})

db.restaurants.find({$and: [{"borough": "Brooklyn"}, {"cuisine": "Steak"}]})

db.restaurants.find({"grades.score":{$gt:90}}) // has 2 types of score... 

db.restaurants.find({}, {score: 1})

db.restaurants.find({$and: [{"cuisine": "Bakery"}, {"grades.score": {$gte: 70}}]})

db.restaurants.find({$and: [ {"cuisine":{$ne:"Chinese"}},{"grades.grade": "A"}, {"borough":{$ne:"Manhattan"}}]})


db.restaurants.find({"cuisine": {$eq:"American"}})

db.restaurants.updateMany({"cuisine": "American "}, {$set:{"cuisine": "American"}})

db.restaurants.find({"name": "Morris Park Bake Shop"})

db.restaurants.update({"name": "Morris Park Bake Shop"}, {$set: {"address.street": "Calle falsa 123"}})

db.restaurants.deleteMany({"address.zipcode": {$eq:"10466"}})