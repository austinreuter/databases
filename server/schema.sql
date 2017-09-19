SET FOREIGN_KEY_CHECKS=0;
/*SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";*/

DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;
    
CREATE TABLE messages (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  text CHAR(80) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  id_users INTEGER default 1
);

DROP TABLE IF EXISTS users;
    
CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name CHAR(30) NOT NULL
);


ALTER TABLE messages ADD FOREIGN KEY (id_users) REFERENCES users (id);



INSERT INTO messages (text) VALUES ('hello');
INSERT INTO users (name) VALUES ('austin');

INSERT into messages (text) values ('hello again');
/*ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;*/
















/*DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id integer default 1,
  name char(80)
);


DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id integer default 1,
  text char(80),
  createdAt datetime,
  id_users integer,
  PRIMARY KEY (id),
  FOREIGN KEY (id_users) REFERENCES users (id)
  
);
*/

/* Create other tables and define schemas for them here! */


/*ALTER TABLE messages ADD FOREIGN KEY (id_users) REFERENCES users (id);*/

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/



/*
-- DROP TABLE IF EXISTS `messages`;
    
-- CREATE TABLE `messages` (
--   `id` INTEGER AUTO_INCREMENT DEFAULT 1,
--   `text` CHAR(80),
--   `-createdAt` DATETIME,
--   `id_users` INTEGER,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'users'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `users`;
    
-- CREATE TABLE `users` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `name` CHAR(30) NOT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Foreign Keys 
-- -- ---

-- ALTER TABLE `messages` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);

-- -- ---
-- -- Table Properties
-- -- ---
ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- -- ---
-- -- Test Data
-- -- ---

-- -- INSERT INTO `messages` (`id`,`text`,`-createdAt`,`id_users`) VALUES
-- -- ('','','','');
-- -- INSERT INTO `users` (`id`,`name`) VALUES
-- -- ('','');
*/