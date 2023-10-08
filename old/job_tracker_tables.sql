--  Create Schema for JobTracker
CREATE TABLE `user` (
	`id` bigint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`first_name` varchar(256),
	`last_name` varchar(256),

	`addr1` varchar(256),
	`addr2` varchar(256),
	`city` varchar(256),
	`state` varchar(2),
	`zip` varchar(16)
);

CREATE TABLE IF NOT EXISTS `user_role` (
	`id` bigint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`user_id` bigint NOT NULL,
	`title` varchar(50),
	`description` varchar(256),
	FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
);

CREATE TABLE IF NOT EXISTS `job` (
	`id` bigint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`user_id` bigint NOT NULL,
	`name` varchar(50),
	`description` varchar(256),
	FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
);

-- Data insertions
--  Users: select * from user
insert INTO `user` (first_name,last_name,addr1,addr2,city,state,zip)
VALUES ("Tim", "Dove", "17117 Bell Isle Rd.","", "Cornelius", "NC", "28031");
insert INTO `user` (first_name,last_name,addr1,addr2,city,state,zip)
VALUES ("Sandy", "McCarty", "17117 Bell Isle Rd.","", "Cornelius", "NC", "28031");
insert INTO `user` (id, first_name,last_name,addr1,addr2,city,state,zip)
VALUES (default, "San", "Menudo", "Devils Island","", "Zanzibar", "NC", "28099");

--  Roles: select * from user_role
insert INTO `user_role` (id,user_id,title,description)
VALUES (default, 3, "Overseer", "Grand Troll");


-- INSERT INTO table_name (column1, column2, column3, ...)
-- VALUES (value1, value2, value3, ...);
