import express, { json } from 'express';
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
    }];

const server = express();
server.use(cors(), json());

server.post('/sign-up', (req, res) => {

    if ( !req.body.username || !req.body.avatar ) {
        res.status(400).send("Todos os campos são obrigatórios!");    
    }

    else if ( !(/\.(jpe?g|png|gif|bmp)$/i.test(req.body.avatar)) ){
        res.status(400).send("Avatar must be a picture!");
    }
    
    else {
        user.username = req.body.username;
        user.avatar = req.body.avatar;
        
        res.status(201).send("OK");    
    }
});

server.get('/tweets', (req, res) => {
    if (!req.query.page) {
        res.status(400).send("Informe uma página válida!");      
    }

    else {  
        let page = parseInt(req.query.page);
        
        if (page < 1) {
            res.status(400).send("Informe uma página válida!");      
        } 
        
        else {
            res.send(tweets.slice((page - 1) * 10, page * 10));
        }
    }
});
    
server.post('/tweets', (req, res) => {
    if ( !req.body.tweet ) {
        res.status(400).send("Todos os campos são obrigatórios!");    
    }

    else {
        tweets.unshift({
            username: req.header('User'),
            avatar: user.avatar,
            tweet: req.body.tweet
        });
        
        res.status(201).send("OK");    
    }
});

server.get('/tweets/:USERNAME', (req, res) => {
    const usernameUser = req.params.USERNAME;
    const userTweets = tweets.filter(tweet => tweet.username === usernameUser);

    res.send(userTweets);
});

server.listen(5000, () => {
    console.log('Server started on http://localhost:5000');
});