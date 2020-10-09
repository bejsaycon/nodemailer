const express = require('express');
const app = express();
const sendMail = require('./mail.js');
const PORT = 8080;
const path = require('path');
const log = console.log;



//chunk2
//Data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

//email, subject, text be sure to be in order! sendMail()
app.post('/email', (req, res)=> {
    //TODO: 
    const {subject, email, text} = req.body;
    console.log('Data: ', req.body);
    
    sendMail(email, subject, text, function(err, data){
        if (err) {
            res.status(500).json({message:'Internal Error'});
        } else {
            res.json({message: 'Email sent!'})
        }
    });
});
app.use(express.static(__dirname + '/views'));
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, ()=>log("Server is starting on PORT, "+PORT));