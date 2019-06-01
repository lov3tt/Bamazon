DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
 
  item_id INTEGER (40) AUTO_INCREMENT NOT NULL,

  product_name VARCHAR (45) NOT NULL,

  department_name VARCHAR (30) NOT NULL,

  price DECIMAL (10,2) NULL,

  stock_quantity INT NULL,

  PRIMARY KEY (item_id)

);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rubber Ducky", "Health&Fitness", 3.50, 25);
