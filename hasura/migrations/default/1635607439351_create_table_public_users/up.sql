CREATE TABLE "public"."users" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "email" text NOT NULL, "verified" boolean NOT NULL, PRIMARY KEY ("id") , UNIQUE ("email"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
