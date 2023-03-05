# NextJS Playground

App created with the intent to play around with NextJS and libraries

## Supabase

### Local development

https://supabase.com/docs/guides/cli/local-development#access-services

1. `npx supabase start`
2. Access supabase studio locally: [http://localhost:54323](http://localhost:54323)
3. Make DB changes using [SQL editor](http://localhost:54323/project/default/sql), this will change the local `psql` database
4. Detect changes in local DB `npx supabase db diff <migration_name> -f <migration_name>` (without brackets), this will create a new migration `supabase/migrations/<timestamp>_<migration_name>.sql`
5. Add sample data to `supabase/seed.sql` to add sample data to the table
6. Rerun the migration and seed scripts: `npx supabase db reset`

Reset local db: `supabase db reset`

### Deploy project

Connect to remote database

1. `npx supabase link --project-ref <project-id>` (get `<project-id>` from your project’s dashboard URL: `https://app.supabase.com/project/<project-id>`)
2. `npx supabase db remote commit` (Capture any changes that you have made to your database before setting up the CLI)
3. Deploy local db changes `npx supabase db push`
