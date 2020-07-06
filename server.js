const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData=[
    {name: 'Mark'},
    {name: 'Jill'}
]

app.get('/users', function(req, res){
    res.json({
        success: true,
        message: 'Successfully got users. Nice!',
        users: mockUserData
    })
})

app.post('/login',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if (username===mockUsername && password===mockPassword){
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted tocken goes here'
    })
    } else {
        res.json({
            success: false,
            message: 'password and username do not match'
        })
  
    }
})

app.post('/testsso',function(req,res){
    const ssouser=req.body.ssouser;
    const ssopass=req.body.ssopass;

    const examplessouser="jamie";
    const examplessopass="juice";

    if (ssouser===examplessouser && ssopass===examplessopass){
        res.json({
            success: true,
            message: 'login success',
            token: 'login token'
        })
    } else {
        res.json({
            success: false,
            message: 'login failure'
        })
    }
})

app.listen(8000,function(){console.log('server is listening')})

// app.listen(8000,function(){
//     //console.log("Server is running")
//     app.get('/users/:id',function(req,res){
//         console.log(req.params.id)
//         res.json({
//             success: true,
//             message: 'Got one user',
//             user: req.params.id
//         })
//     })
// })
