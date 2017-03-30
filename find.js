const mongo = require('mongodb').MongoClient;
const paramAge = Number(process.argv[2]);
mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
	if (err) { return console.log(err)}
	const collection = db.collection('parrots');
	collection.find({
		age: {$gt: paramAge}
	}).toArray( (err, docs) => {
		if (err) { return console.log("could not find collection")}
		console.log(docs);
	})

	db.close();
});
