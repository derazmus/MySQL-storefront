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

            pickItem(rows);
        });
}

/// identify the product the user wants and how many
function pickItem(inventory){
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
       // queryItem(answer.id, answer.units);
       var itemID = parseInt(answer.id);
       var quantity = answer.units;
// query to search of item in database and see if amount avaliable
       checkInventory(itemID, quantity, inventory);

    });
}

function checkInventory(itemID, quantity, inventory){
	console.log(itemID);
	//console.log	(inventory);
	for ( var i = 0; i < inventory.length; i++){
		
		if(inventory[i].item_id === itemID ){
			console.log(inventory[i].item_id);
			var stockQuantity = inventory[i].stock_quantity
			console.log(stockQuantity);
		if (stockQuantity >= quantity){
			console.log("you can proceed to purchase");
		} else {
			console.log("Insufficent Quantities")
		}
		}


	}
}



