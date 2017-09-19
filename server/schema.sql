SET FOREIGN_KEY_CHECKS=0;

DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages; 
CREATE TABLE messages (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  text CHAR(80) NOT NULL,
  roomname CHAR(80) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  id_users INTEGER DEFAULT 1
);


DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user CHAR(30) NOT NULL
);


ALTER TABLE messages ADD FOREIGN KEY (id_users) REFERENCES users (id);


INSERT INTO users (user) VALUES ('austin');
INSERT INTO users (user) VALUES ('mememe');



INSERT INTO messages (text, roomname, id_users) values ('sup 2', 'lobby', 2);

INSERT into messages (text, roomname, id_users) values ('hello 2', 'lobby', 2);

INSERT into messages (text, roomname, id_users) values ('hello 1', 'notlobby', 1);

INSERT into messages (text, roomname, id_users) values ('hello again 1', 'lobby', 1);
