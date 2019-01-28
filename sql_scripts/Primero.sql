show databases;
create database certificateManagerDB;
use certificateManagerDB;
show tables;
create table users (
	id int auto_increment primary key,
    username varchar(32) unique not null,
    password varchar(32) not null,
    email varchar(32) not null,
    role enum ('admin', 'user') not null
);
drop table users;
describe users;
create table users_jira (
    user_id int primary key,
    user_name varchar(32) unique not null,
    password varchar(32) not null,
    url varchar(32) not null,
    proyect varchar(32) not null,
    component varchar(32) not null,
    foreign key (user_id) references users(id)
);
drop table users_jira;
describe users_jira;
create table certificates(
	id int auto_increment primary key,
    user_id int not null,
    alias varchar(32) unique not null,
    issuing_entity varchar(32) not null,
    serial_number varchar(32) unique not null,
    subject varchar(32) not null,
    caducity date not null,
    password varchar(32) not null,
    organism_id varchar(32) not null,
    client_name varchar(32) not null,
    integration_list varchar(200),
    contact_renovation varchar(32) not null,
    repository_url varchar(100) not null,
    observations longtext,
    foreign key (user_id) references users(id)
);
describe certificates;
insert into users values (default, 'Alfonso','1234','alfonsem@gmail.com','admin');
insert into users values (default, 'Manuel','2345','manuel@gmail.com','user');
insert into users values (default, 'Pepe','3456','pepe@gmail.com','user');
select * from users;
