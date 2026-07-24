"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Academia",
    href: "/academy",
  },
  {
    name: "Fundamentos",
    href: "/trading/fundamentals",
  },
  {
    name: "Price Action",
    href: "/trading/price-action",
  },
  {
    name: "Gestión del Riesgo",
    href: "/trading/risk-management",
  },
  {
    name: "Psicología",
    href: "/trading/psychology",
  },
  {
    name: "Herramientas",
    href: "/tools",
  },
  {
    name: "Journal",
    href: "/journal",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur-xl">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          href="/academy"
          className="text-2xl font-extrabold text-yellow-400 transition hover:text-yellow-300"
        >
          JK Capital
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">

          {links.map((link) => {

            const active = pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition duration-300 ${
                  active
                    ? "font-bold text-yellow-400"
                    : "text-zinc-400 hover:text-yellow-400"
                }`}
              >
                {link.name}
              </Link>
            );

          })}

        </nav>

        <Link
          href="/academy"
          className="rounded-xl bg-yellow-400 px-5 py-2 font-bold text-black transition hover:bg-yellow-300"
        >
          Comenzar
        </Link>

      </div>

    </header>
  );
}