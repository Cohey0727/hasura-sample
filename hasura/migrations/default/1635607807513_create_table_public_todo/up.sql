CREATE TABLE "public"."todos" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "title" text NOT NULL, "user_id" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON UPDATE cascade ON DELETE cascade);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
