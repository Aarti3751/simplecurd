const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemon',
});

app.get('/', (req, res) => {
    db.query('SELECT * FROM doremon', (err, result) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json(result);
    });
});

app.post('/add', (req, res) => {
    const { name, age, status } = req.body;
    db.query(`INSERT INTO doremon (name, age, status) VALUES ('${name}', '${age}', '${status}')`, (err) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json({ message: 'Profile added 😀' });
    });
});

app.put('/update/:id', (req, res) => {
    const { name, age, status } = req.body;
    const { id } = req.params;
    db.query(`UPDATE doremon SET name='${name}', age='${age}', status='${status}' WHERE id=${id}`, (err) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json({ message: 'Profile updated 😎' });
    });
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    db.query(`DELETE FROM doremon WHERE id=${id}`, (err) => {
        if (err) return res.status(400).json({ message: err });
        res.status(200).json({ message: 'Profile deleted 😎' });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
