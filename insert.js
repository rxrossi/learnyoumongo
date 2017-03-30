const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/learnyoumongo";

const person = {
	firstName: process.argv[2],
	lastName:  process.argv[3]
}

MongoClient.connect(url, (err, db) => {
	if (err) throw err;

	const collection = db.collection('users');

	collection.insert(person, (err, data) => {
		if (err) throw err;
		//console.log(JSON.stringify(data));
	});

	collection.find( null, {_id:0}).sort({$natural: -1}).limit(1)
		.toArray( (err, data) =>{
			console.log(JSON.stringify(...data));
		})

	db.close();
});
