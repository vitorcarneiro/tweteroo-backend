import express from 'express';
import cors from 'cors';

const user = {
	username: '', 
	avatar: '' 
}

const server = express();
server.use(cors(), express.json());

server.post('/sign-up', (req, res) => {
    user = req.body;
    res.send("OK");
});

server.post('/tweets', (req, res) => {
    res.send("OK");
});

server.get('/tweets', (req, res) => {
  res.send("OK");
});

server.listen(5000, () => {
    console.log('Server started on http://localhost:5000');

});