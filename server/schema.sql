SET FOREIGN_KEY_CHECKS=0;

DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages; 
CREATE TABLE messages (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  text CHAR(80) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  id_users INTEGER DEFAULT 1
);


DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name CHAR(30) NOT NULL
);


ALTER TABLE messages ADD FOREIGN KEY (id_users) REFERENCES users (id);


INSERT INTO users (name) VALUES ('austin');
INSERT INTO users (name) VALUES ('mememe');



INSERT INTO messages (text, id_users) values ('sup 2', 2);

INSERT into messages (text, id_users) values ('hello 2', 2);

INSERT into messages (text, id_users) values ('hello 1', 1);

INSERT into messages (text, id_users) values ('hello again 1', 1);
