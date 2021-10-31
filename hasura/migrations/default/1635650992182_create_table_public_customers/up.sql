CREATE TABLE "public"."customers" ("ID" uuid NOT NULL DEFAULT gen_random_uuid(), "Name" text NOT NULL, PRIMARY KEY ("ID") , UNIQUE ("ID"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
