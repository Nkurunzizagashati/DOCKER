const express = require('express');

const app = express();

app.use(express.json());

let students = [
  { id: 1, name: 'John Doe', grade: 85 },
  { id: 2, name: 'Jane Smith', grade: 92 },
  { id: 3, name: 'Alice Johnson', grade: 78 },
];

// GET all students

app.get('/students', (req, res) => {
  res.send(students);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
