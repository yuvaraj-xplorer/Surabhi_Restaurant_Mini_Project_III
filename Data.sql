create database surabhi_hotels;

use surabhi_hotels; 

INSERT INTO user (mobile,password,user_email,user_name) 
VALUES("98763456","1234","hcl@hcl.com","hcl");

INSERT INTO admin(mobile,password,user_email,user_name) 
VALUES("98763456","1234","adminhcl@hcl.com","admin");

INSERT INTO foodlist (cuisine_name, description,name,price, type)VALUES("Semolina","Rice cake","Idly",20.6,"breakfast");
INSERT INTO foodlist (cuisine_name, description,name,price, type)VALUES("Biriyani","Veg","Biriyani",200.00,"Thalappakatti");
INSERT INTO foodlist (cuisine_name, description,name,price, type)VALUES("Semolina","Dosa","RavaDosa",50.00,"breakfast");
INSERT INTO foodlist (cuisine_name, description,name,price, type)VALUES("Chicken","Pepper","PepperChicken",150.00,"starter");