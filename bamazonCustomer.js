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
    console.log("connected as id " + connection.threadId);
    //  Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

    // connection.end();
    readProducts();
});

function readProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        initialize()
        // connection.end();
    })
}

// 6. The app should then prompt users with two messages.

// * The first should ask them the ID of the product they would like to buy.
// * The second message should ask how many units of the product they would like to buy.

// 7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

// * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

// 8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
// * This means updating the SQL database to reflect the remaining quantity.
// * Once the update goes through, show the customer the total cost of their purchase.
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
                if (res[i].item_id === input.enterID){
                    selectedProduct = res[i];

                }

                console.log(res[i])
                console.log(res[i].item_id)
                console.log(input.enterID)
                // console.log(selectedProduct)
            }
    
            connection.end()
        })
    })};
//             if (selectedProduct.stock_quantity > parseInt(input.enterAmount)) {
//                 console.log("Processing Order")
//                 completeOrder()

//             }
//             else {
//                 console.log("Insufficient quantity in stock \n Restocking Inventory, try again")
//                 updateProduct()
//             }
//         })
//     })
// }

// function completeOrder (){

// }

// function updateProduct (){

// }