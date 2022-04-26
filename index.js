const express = require('express');
const app = express();
var argv = require('optimist').argv;

app.use(express.json());

const currentWeek = {
  "startDate": "2022-02-15T11:00:00Z",
  "endDate": "2022-02-18T10:59:59Z",
  "lineupIds": [
    "886eab55-e546-412d-8e0e-d4453c915a61",
    "d1789abb-3c86-40e5-946b-c13ccff1aac1",
    "675a1874-cc80-435b-8966-adbe67bcd5b9",
    "592524f5-cc09-4306-bf07-8d6c2babe8b5",
    "246c2ad5-90b1-45b2-81d7-6e7c65d9ec5a",
  ]
}

const nextWeek = {
  "startDate": "2022-02-18T11:00:00Z",
  "endDate": "2022-02-22T10:59:59Z",
  "lineupIds": [
    "d0ff735a-3362-486e-b094-fd062564d35c",
    "e49e1e9a-db22-409e-979e-2e03750241f5",
    "f0d3feec-bdda-4778-b5d9-bb543c7b0034",
    "a10c5ed1-9ef7-4497-b0b1-6fd8931d78b3",
    "5ee96d67-2d75-457f-b443-965e03e08e0d",
    "e7e5e7ac-56b7-4d31-a801-799438b6059a"
  ]
}

const lineups = [

]

app.get('/', (req, res) => {
	res.send('Welcome to test api');
});

app.get('/api/week/current', (req, res) => {
	res.send(currentWeek);
});

app.get('/api/week/next', (req, res) => {
	res.send(nextWeek);
});

app.get('/api/lineup/:id', (req, res) => {
	const lineup = lineups.find(c => c.id === parseInt(req.params.id));

	if (!lineup) res.status(404).send('no lineup');

	res.send(lineup);
});

//const port = process.env.PORT || 8080;
//app.listen(port, () => console.log('Listening on port ${port}..'));
app.listen(8080, argv.fe_ip);
console.log("App listening on port 8080");