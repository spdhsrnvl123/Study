const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true})) 

const MongoClient = require('mongodb').MongoClient;

let db;
MongoClient.connect('mongodb+srv://spdhsrnvl123:nanoqu12!!@cluster0.wzfjctq.mongodb.net/?retryWrites=true&w=majority',
function(에러,client){
    //연결되면 할일
    if(에러) return console.log(에러)
    
    db = client.db('todoapp');

    db.collection('post').insertOne({이름:'John',_id:100},function(에러,결과){
        console.log('저장완료')
    });

    app.listen(8080,function(){
        console.log('listening on 8080')
    });
})



//누군가 /pet으로 방문을 하면...
//pet관련된 안내문을 띄어주자

app.get('/pet',function(요청, 응답){
    응답.send('펫용품 쇼핑할 수 있는 페이지입니다.')
});

app.get('/',function(요청,응답){
    응답.sendFile(__dirname + '/index.html')
})

app.get('/write',function(요청,응답){
    응답.sendFile(__dirname + '/write.html');
})

app.post('/add',function(요청,응답){
    응답.send('전송완료')
    console.log(요청.body.title)
    //DB에 저장해주세요
})