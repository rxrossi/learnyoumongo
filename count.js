const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/learnyoumongo";

const ageArg = process.argv[2];

MongoClient.connect(url, (err, db) => {
	db.collection('parrots').count({
		age: { $gt: +ageArg }
	}, (err, count) => {
		if (err) throw err;
		console.log(count);
		db.close();
	});
});
