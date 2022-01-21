import express, {json} from 'express';
import cors from 'cors';

const user = {
	username: '', 
	avatar: '' 
}

let tweets = [
    {
	    username: "driven",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
	    username: "estudantes_drivens",
        avatar: 'https://www.impactonoticias.com.br/wp-content/uploads/2020/07/10-de-julho-de-2020.jpg',
        tweet: "odiamos o hub"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "o loco meu"
    }
];

const server = express();
server.use(cors(), express.json());

server.post('/sign-up', (req, res) => {
    user.username = req.body.username;
    user.avatar = req.body.avatar;

    res.send("OK");
});

server.post('/tweets', (req, res) => {

    res.send("OK");
});

server.get('/tweets', (req, res) => {
    res.send(tweets.slice(Math.max(tweets.length - 10, 0)));
});

server.listen(5000, () => {
    console.log('Server started on http://localhost:5000');
});