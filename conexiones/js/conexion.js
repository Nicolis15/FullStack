
let mySql = require('mySql');
let con = mySql.createConnection({
    host : 'localhost',
    database : 'ejemplo',
    user: 'root',
    password: ''

});

con.connect(function(err){
    if (err){
        throw err;
    }else{
        console.log("conexion exitosa");
    }
} );


const get = 'SELECT * FROM Usuarios';
const post = 'insert into Usuarios(id) values(24)'

con.query(post, function(err, row){
    if(err){
        throw err;
    }else{
        console.log('se incerto correctamente');
    }
})

con.query(get, function(err, lista){
    if(err){
        throw err;
    }else{
        console.log(lista);
    }
})

