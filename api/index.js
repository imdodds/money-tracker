const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.post('/api/transaction', (req, res) => {
  res.json(req.body);
});

app.listen(4000, () => console.log('Server running on port 4000'));