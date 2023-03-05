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
      </nav>
    </header>
  );
};

export default header;
