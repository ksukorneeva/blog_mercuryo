const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'vip127.hosting.reg.ru',
    user: 'u1161143_blog',
    database: 'u1161143_blog',
    password: 'xJ3dH6qJ2s',
});

connection.connect(function (err) {
    if (err) {
        return console.error('Jib,rf' + err.message);
    } else {
        console.log('Подключение установлено');
    }
});
connection.execute('SELECT * FROM `wp_posts`', function (err, results) {
    console.log(err);
    console.log(results);
});
