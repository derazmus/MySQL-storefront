let mysql = require('mysql');
let inquirer = require('inquirer');
let table = require('console.table');
let database = 'bamazon';
let sql = 'Select * FROM bamazon';

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "CodingCow2017",
  database: database,
});

con.connect(function(err) {
	listProducts();
    if (err) {
    	console.log();
    	console.log('The following error occurred');
    	return;
	}
});




function listProducts(){
	let sql = "SELECT * FROM products";

	 con.query(sql, function (err, rows) {
	 		console.log ();
            console.log("Product Listing");
            console.log ();
            
            console.table(rows);
            console.log("Total items: " + rows.length);

            pickItem();
        });
}


function pickItem(){
    inquirer.prompt([
    {
        name: 'id',
        message: 'What is the ID of the product you would like to buy?'
    },
    {
        name: 'units',
        message: 'How many units would you like to buy?'
    },
    ]).then(function(answer){
        queryItem(answer.id, answer.units);

    });
}

function 

