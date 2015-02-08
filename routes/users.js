var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userlist', function(req, res) {
    var db=req.db;
    db.collection('userlist').find().toArray(function(err,items){
        res.json(items);
    });
});

/* POST to adduser */
router.post('/adduser',function(req,res){
    var db = req.db;
    db.collection('userlist').insert(req.body,function(err,result){
//        console.log("1");
        res.send(
            (err === null) ? {msg:''}:{msg: 'err'}
        );
    });
});

module.exports = router;
