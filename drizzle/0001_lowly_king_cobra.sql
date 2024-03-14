CREATE TABLE `chats` (
	`id` integer PRIMARY KEY NOT NULL,
	`external_id` text NOT NULL,
	`email` text DEFAULT '',
	`subject` text DEFAULT '',
	`title` text DEFAULT '',
	`description` text DEFAULT '',
	`attributes` text DEFAULT '{}',
	`created_at` text DEFAULT CURRENT_TIME,
	`updated_at` text DEFAULT CURRENT_TIME
);
--> statement-breakpoint
CREATE TABLE `messages` (
	`id` integer PRIMARY KEY NOT NULL,
	`external_id` text NOT NULL,
	`name` text DEFAULT '',
	`email` text DEFAULT '',
	`message` text DEFAULT '',
	`created_at` text DEFAULT CURRENT_TIME,
	`updated_at` text DEFAULT CURRENT_TIME
);
--> statement-breakpoint
CREATE UNIQUE INDEX `chats_external_id_unique` ON `chats` (`external_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `messages_external_id_unique` ON `messages` (`external_id`);