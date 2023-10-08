DROP TABLE `auth_otp`;--> statement-breakpoint
RENAME TABLE `users` TO `user`;--> statement-breakpoint
DROP INDEX `name_idx` ON ``.`user`;