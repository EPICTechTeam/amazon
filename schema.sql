create database tech;

create table users (
	id int auto_increment,
	name varchar(150),
	age int,
	primary key(id)
);

create table orders (
	id int auto_increment,
	name varchar(150),
	amount int,
	user_id int,
	primary key(id)
);
