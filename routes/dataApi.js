const express = require('express');
const router = express.Router();
const mysqlPool = require('./../mysqlPool');

router.get('/', (req, res, next) => {
    const query = `SELECT * FROM heroku_f84983e17ae6384.todoList`;
    mysqlPool.query(query, (err, result, fields) => {
        if(err) throw err;
        console.log(result);
        res.json(JSON.stringify(result));
    });
});

router.post('/', (req, res, next) => {
    console.log('来たよ~~');
    console.log(req.body);
    const query = `INSERT INTO heroku_f84983e17ae6384.todoList(name) VALUE(?); SELECT LAST_INSERT_ID() AS lastID;`;
    mysqlPool.query(query, [req.body.name], (err, result, fields) => {
        console.log(result[1][0].lastID);
        if(err) throw err;
        res.json(JSON.stringify(result[1][0]));
    });
});

router.get('/lastID',(req, res, next) => {
    const query = 'SELECT LAST_INSERT_ID();';
    mysqlPool.query(query, (err, result, fields) => {
        if(err) throw err;
        res.json(JSON.stringify(result));
    });
});

router.delete('/', (req, res, next) => {
    const query = `DELETE FROM heroku_f84983e17ae6384.todoList WHERE id=?;`;
    mysqlPool.query(query, [req.body.id], (err, result, fields) => {
        if(err) throw err;
        res.json(JSON.stringify(result));
    });
});

module.exports = router;