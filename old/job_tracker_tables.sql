CREATE TABLE `users` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`full_name` varchar(256),
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);

ALTER TABLE `users` RENAME to `user`;

