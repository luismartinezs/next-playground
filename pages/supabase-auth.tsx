import { Auth } from "@supabase/auth-ui-react";
import {
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

import Account from "@/components/Account";

const Page = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          redirectTo="http://localhost:3000/supabase-auth"
          providers={["google", "github"]}
        />
      ) : (
        <Account session={session} />
      )}
    </>
  );
};

export default Page;
