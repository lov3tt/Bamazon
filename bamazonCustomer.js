const mysql = require("mysql");
const inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "pass",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as guest id" + connection.threadId);
    readProducts();
});

function readProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("ID# | Products Name : Unit Cost")
        console.log("-------------------------------------------------------");
        for (var i = 0; i < res.length; i++)
        
        console.log(res[i].item_id + " | " + res[i].product_name + " : $"+ res[i].price);
        console.log("-------------------------------------------------------");
        initialize()
        // connection.end();
    })
}
function initialize() {
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
  
    inquirer
        .prompt([{
            name: "enterID",
            type: "input",
            message: "Enter the ID of the product you would like to purchase"
        }, {
            name: "enterAmount",
            type: "input",
            message: "How many units of the product would you like to place?"
        }])
        .then(function (input) {
            var selectedProduct;
            for (var i = 0; i < res.length; i++) {
                if (res[i].item_id == input.enterID){
                    selectedProduct = res[i];
                }
            }
            // console.log("input.id: " + input.enterID)
            // console.log("testing var: " + selectedProduct.product_name)
            // console.log(res)
            // connection.end()
            if (selectedProduct.stock_quantity > parseInt(input.enterAmount)) {
                console.log("-------------------------------------------------------");
                console.log("Thanks you for your purchase!")
                let newStock = selectedProduct.stock_quantity - input.enterAmount;
                let totalPrice = input.enterAmount * selectedProduct.price
                // console.log(newStock)
                // console.log(totalPrice)
                connection.query( "UPDATE products SET ? WHERE ?", [
                    {
                        stock_quantity: newStock
                    },
                    {
                        item_id: input.enterID
                    }
                ], function(err, res) {
                    if (err) throw err;
                    
                    console.log("You have ordered: " + input.enterAmount + "x " + selectedProduct.product_name)
                    console.log("Your total cost is: $" + totalPrice)
                    console.log("-------------------------------------------------------");
                    // console.log(res.affectedRows + " products updated")
                    continueShopping()
                }
            
                );
            }
            else {
                console.log("Insufficient quantity in stock \n Would you like to try a different purchase?")
                continueShopping()             
            }
        })
    })
}

function continueShopping (){
    inquirer
    .prompt([{
        type: "list",
        name: "again",
        message: "Continue Shopping?",
        choices: ["Yes", "No"],
    }]).then(function(answer){
        if (answer.again == "Yes") {
            readProducts()
        }
        else {
            console.log("Thanks you for shopping at Bamazon")
            console.log("-------------------------------------------------------");
            connection.end()
        }
    })

}

