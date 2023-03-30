import * as express from 'express';
import * as mongo from 'mongodb';

const app = express();
const client = new mongo.MongoClient('mongodb://localhost:27017/');

(async () => {
	await client.connect();
	console.log('Baza połączona');
})();

app.use(express.json());

app
	.post('/register', (req, res) => {

	});

app.listen(3001, 'localhost', () => {
	console.log('słucham na 3001');
});
