// Employees

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




