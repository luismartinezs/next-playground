import Link from "next/link";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/auth",
    label: "Auth",
  },
  {
    href: "/supabase-basic",
    label: "Supabase Basic",
  },
  {
    href: "/supabase-auth",
    label: "Supabase Auth",
  },
  {
    href: "/movies",
    label: "Movies",
  },
  {
    href: "/about",
    label: "About",
  },
];

const header = () => {
  return (
    <header>
      <h1 className="text-xl">NextJS Playground</h1>
      <nav>
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* https://nextjs.org/docs/pages/building-your-application/routing/internationalization */}
        {/* this doesn't work? */}
        <Link href="/" locale="fr">
          French
        </Link>
      </nav>
    </header>
  );
};

export default header;
