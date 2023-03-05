drop policy "Enable insert for authenticated users only" on "public"."items";

drop policy "Enable read access for all users" on "public"."items";

drop policy "Users can update their own items." on "public"."items";

drop policy "Public profiles are viewable by everyone." on "public"."profiles";

drop policy "Users can insert their own profile." on "public"."profiles";

drop policy "Users can update own profile." on "public"."profiles";

alter table "public"."profiles" drop constraint "profiles_id_fkey";

alter table "public"."profiles" drop constraint "profiles_username_key";

alter table "public"."profiles" drop constraint "username_length";

drop function if exists "public"."handle_new_user"();

alter table "public"."countries" drop constraint "countries_pkey";

alter table "public"."items" drop constraint "items_pkey";

alter table "public"."profiles" drop constraint "profiles_pkey";

drop index if exists "public"."countries_pkey";

drop index if exists "public"."items_pkey";

drop index if exists "public"."profiles_pkey";

drop index if exists "public"."profiles_username_key";

drop table "public"."countries";

drop table "public"."items";

drop table "public"."profiles";

drop sequence if exists "public"."countries_id_seq";


