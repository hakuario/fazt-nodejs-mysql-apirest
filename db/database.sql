CREATE DATABASE IF NOT EXISTS companydb;
-- 
use companydb;
--
CREATE TABLE employee (
id INT(11) NOT NULL AUTO_INCREMENT,
name varchar(45) DEFAULT NULL,
salary numeric(20,4) DEFAULT 0,
PRIMARY KEY (id)
);
--
select * from employee;
// Creando usuario para evitar error 1045
CREATE USER 'usrNodeJsAndMysql'@'%' IDENTIFIED BY 'jKny9IAYeq0AlsXdb9HA';
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, RELOAD, PROCESS, REFERENCES, INDEX, ALTER, SHOW DATABASES, CREATE TEMPORARY TABLES, LOCK TABLES, EXECUTE, REPLICATION SLAVE, REPLICATION CLIENT, CREATE VIEW, SHOW VIEW, CREATE ROUTINE, ALTER ROUTINE, CREATE USER, EVENT, TRIGGER ON *.* TO 'usrNodeJsAndMysql'@'%' WITH GRANT OPTION;
//
// show variables like ‘have_ssl’;
INSERT  INTO employee values
(1, 'cscm', 2000),
(2, 'anthony', 2500),
(3, 'raul', 3000),
(4, 'jerry', 2500),
(5, 'david', 4000);