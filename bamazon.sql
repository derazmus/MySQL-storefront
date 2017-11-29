-- Drops the bamazon if it exists currently --
DROP DATABASE IF EXISTS bamazon;
-- Creates the "bamazon" database --
CREATE DATABASE bamazon;

-- Makes it so all of the following code will affect bamazon --
USE bamazon;

-- Creates the table "products" within bamazon --
CREATE TABLE products (
-- create a id that will auto increment, this will also be  the Primary key--
	item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
-- makes a string column called product_name--
	product_name VARCHAR(30) NOT NULL,
-- makes a string column for department_name--
    department_name VARCHAR(30) NOT NULL,
-- number w. price
    price INTEGER (6) NOT NULL,
-- number w/ amount of product avaliable in stores--
    stock_quantity INTEGER(10) NOT NULL,
    PRIMARY KEY(item_id)
);
-- create new rows contain data and named columns --
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Mens Watch", "Jewelery", 25, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Corbel Earings", "Jewelery", 25,10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Pecos Bracelet" , "Jewelry", 28, 5);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Kids Sweater", "Clothing", 21, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Adult Sweater", "Clothing", 30, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Mens Watch", "Jewlery", 25, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Coffee Mug", "Housewares", 12, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Plate", "Housewares", 15, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Aretmis", "Books", 20, 500);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Wonder", "Books", 10, 200);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Hair Brush", "Beauty", 26, 25);