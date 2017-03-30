const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

const dbName 		 = process.argv[2];
const collection = process.argv[3];
const id 				 = process.argv[4];

MongoClient.connect(url.concat(dbName), (err, db) => {
	db.collection(collection).remove({
		_id: id
	}, (err) => {
		if (err) throw err;
		db.close();
	});
});
