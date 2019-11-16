var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'bamazon'
});
 
connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();

function displayProducts(){
  connection.query("SELECT item_id as ID, product_name as Product, department_name as depart FROM bamazon.products;", function(error, results){
    if (error) throw error;
    console.table(results)
  })
}

displayProducts()