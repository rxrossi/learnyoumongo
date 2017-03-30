const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

const dbName = process.argv[2];

MongoClient.connect(url.concat(dbName), (err, db) => {
	if (err) throw err;
	const collection = db.collection('users');
	collection.update({
		username: "tinatime",
	},{
		$set: {
			age: 40
		}
	}, (err) => {
		if (err) throw err;
		db.close()
	});
});
