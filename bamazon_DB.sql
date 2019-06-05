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

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fluffy Rubber Ducky", "Health&Fitness", 6.50, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Giant Rubber Ducky", "Health&Fitness", 16.50, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mini Rubber Ducky", "Health&Fitness", 2.50, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Super Rubber Ducky", "Health&Fitness", 22.50, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Silly Rubber Ducky", "Health&Fitness", 11.50, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hard Rubber Ducky", "Health&Fitness", 8.50, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Flammable Rubber Ducky", "Health&Fitness", 23.50, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Squishy Rubber Ducky", "Health&Fitness", 3.50, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Golden Rubber Ducky", "Health&Fitness", 999.99, 25);