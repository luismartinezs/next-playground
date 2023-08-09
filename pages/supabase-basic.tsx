import { supabase } from "@/lib/supabaseClient";

type Country = {
  id: number;
  name: string;
};

function Page({ countries }: { countries: Country[] }) {
  return (
    <>
      <p>This page gets public content from Supabase</p>
      <ul>
        {countries?.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from("countries").select();

  return {
    props: {
      countries: data,
    },
  };
}

export default Page;
