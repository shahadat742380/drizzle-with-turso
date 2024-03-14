CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`external_id` text NOT NULL,
	`first_name` text DEFAULT '',
	`lat_name` text DEFAULT '',
	`email` text DEFAULT '',
	`attributes` text DEFAULT '{}',
	`created_at` text DEFAULT CURRENT_TIME,
	`updated_at` text DEFAULT CURRENT_TIME
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_external_id_unique` ON `users` (`external_id`);