const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
);

app.post('/api/add-movie', (req, res) =>
    console.log(`${req.method} request received`)
);

app.get('/api/movies', (req, res) =>
    db.query('SELECT * FROM movies', function (err, results) {
        console.log(results);
        console.log(`${req.method} request received`)
    })
);

app.get('/api/movie-reviews', (req, res) =>
    db.query(`SELECT movies.movie_name , reviews.review 
    FROM movies 
    JOIN reviews ON reviews.movie_id = movies.id`, function (err, results) {
        console.log(results);
        console.log(`${req.method} request received`)
    })
);

app.delete('/api/movie/:id', (req, res) =>
    console.log(`${req.method} request received`)
);

app.put('/api/review/:id', (req, res) =>
console.log(`${req.method} request received`)
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});  