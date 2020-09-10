const mysql = require('mysql');

const mysqlPool = mysql.createPool({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b0bda3f708b799',
    password: '5a609f5b'
});

mysqlPool.getConnection((err) => {
    if(err) {
        console.log('mysql connection defined');
        throw err;
    }
    console.log('Complite connection to my detabase');
});

module.exports = mysqlPool;