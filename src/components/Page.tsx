import Link from "next/link";

const nav = [
  { title: "Home", href: "/" },
  { title: "Overview", href: "/overview" },
  { title: "Projects", href: "/projects" },
  { title: "Labs", href: "/labs" },
  { title: "Extra Work", href: "/extra-work" },
];


export default function Page({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-zinc-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-6 py-5 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-semibold text-zinc-900">
              Arion Stern
            </Link>
            <div className="text-sm text-zinc-600">
              Computer Engineering • Embedded Systems • Software
            </div>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm text-zinc-600">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-zinc-900">
                {n.title}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-xl border bg-white p-6 md:p-8">
          <h1 className="text-3xl font-semibold text-zinc-900">{title}</h1>
          {subtitle ? <p className="mt-2 text-zinc-600">{subtitle}</p> : null}

          <div className="mt-6 prose max-w-none text-zinc-900 [&_*]:text-zinc-900 [&_a]:text-blue-600 [&_a]:underline">
            {children}
          </div>

        </div>
      </section>
    </main>
  );
}
