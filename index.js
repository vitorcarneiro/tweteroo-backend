import express, { json } from 'express';
import cors from 'cors';

const user = {
	username: '', 
	avatar: '' 
}

// let tweets = [
//     {
// 	    username: "driven",
//         avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
//         tweet: "eu amo o hub"
//     },
//     {
// 	    username: "estudantes_drivens",
//         avatar: 'https://www.impactonoticias.com.br/wp-content/uploads/2020/07/10-de-julho-de-2020.jpg',
//         tweet: "odiamos o hub"
//     },
//     {
// 	    username: "fausto",
//         avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
//         tweet: "o loco meu"
//     }];

let tweets = [
    {
	    username: "driven",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "0"
    },
    {
	    username: "estudantes_drivens",
        avatar: 'https://www.impactonoticias.com.br/wp-content/uploads/2020/07/10-de-julho-de-2020.jpg',
        tweet: "1"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "2"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "3"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "4"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "5"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "6"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "7"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "8"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "9"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "10"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "11"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "12"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "13"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "14"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "15"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "16"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "17"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "18"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "19"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "20"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "21"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "22"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "23"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "24"
    },
    {
	    username: "fausto",
        avatar: 'https://istoe.com.br/wp-content/uploads/sites/14/2022/01/faustao-credito-da-foto-reproducao-band.jpg',
        tweet: "25"
    }
];

const server = express();
server.use(cors(), json());

server.post('/sign-up', (req, res) => {

    if ( !req.body.username || !req.body.avatar ) {
        res.status(400).send("Todos os campos são obrigatórios!");    
    }

    else if ( !(/\.(jpe?g|png|gif|bmp)$/i.test(req.body.avatar)) ){
        console.log(/\.(jpe?g|png|gif|bmp)$/i.test(req.body.avatar));
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
            username: user.username,
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