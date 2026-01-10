import Link from "next/link";

const quickLinks = [
  { title: "Overview", desc: "About, skills, leadership, work, volunteering", href: "/overview" },
  { title: "Projects", desc: "Featured builds and deep work", href: "/projects" },
  { title: "Labs", desc: "EEL4744C + EEL3701C lab portfolio", href: "/labs" },
  { title: "Extra Work", desc: "Supporting projects and experiments", href: "/extra-work" },
];


function Card({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-xl border bg-white p-5 hover:bg-zinc-50"
    >
      <div className="text-lg font-semibold text-zinc-900">{title}</div>
      <div className="mt-1 text-sm text-zinc-700">{desc}</div>
      <div className="mt-3 text-sm text-blue-600 underline">Open</div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-2xl font-semibold text-zinc-900">
                Arion Stern
              </div>
              <div className="mt-1 text-sm text-zinc-800">
                Computer Engineering • Embedded Systems • Digital Logic • Software
              </div>
            </div>

            <nav className="flex flex-wrap gap-4 text-sm text-zinc-800">
              <Link href="/overview" className="hover:text-zinc-900">
                Overview
              </Link>
              <Link href="/projects" className="hover:text-zinc-900">
                Projects
              </Link>
              <Link href="/labs" className="hover:text-zinc-900">
                Labs
              </Link>
              <Link href="/extra-work" className="hover:text-zinc-900">
                Extra Work
              </Link>

            </nav>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-xl border bg-white p-6 md:p-8">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
            Engineering Portfolio
          </h1>
          <p className="mt-4 max-w-3xl text-zinc-900">
            I build hardware-software systems with an emphasis on embedded
            development, performance-aware design, and clear technical
            documentation. This site contains my featured projects, lab work,
            and supporting technical experience.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border bg-white px-3 py-1 text-sm text-zinc-900">
              Embedded / Firmware
            </span>
            <span className="rounded-full border bg-white px-3 py-1 text-sm text-zinc-900">
              SPI / ADC / DAC / DMA
            </span>
            <span className="rounded-full border bg-white px-3 py-1 text-sm text-zinc-900">
              FPGA / Digital Logic
            </span>
            <span className="rounded-full border bg-white px-3 py-1 text-sm text-zinc-900">
              Python / C / C++
            </span>
            <span className="rounded-full border bg-white px-3 py-1 text-sm text-zinc-900">
              Visualization / OpenCV
            </span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border bg-zinc-50 p-5">
              <div className="text-sm font-semibold text-zinc-900">
                Featured Focus
              </div>
              <ul className="mt-2 list-disc pl-5 text-sm text-zinc-900">
                <li>ATxmega128A1U embedded lab series (register-level)</li>
                <li>Sorting algorithm visualization with interaction + metrics</li>
                <li>Computer vision color detection designed for embedded use</li>
              </ul>
            </div>

            
            <div className="rounded-xl border bg-zinc-50 p-5">
              <div className="text-sm font-semibold text-zinc-900">Contact</div>

              <div className="mt-2 text-sm text-zinc-900">
                Phone:{" "}
                <a className="text-blue-600 underline" href="tel:12014662901">
                  201-466-2901
                </a>
              </div>

              <div className="mt-1 text-sm text-zinc-900">
                Personal Email:{" "}
                <a
                  className="text-blue-600 underline"
                  href="mailto:aristern06@gmail.com"
                >
                  aristern06@gmail.com
                </a>
              </div>

              <div className="mt-1 text-sm text-zinc-900">
                School Email:{" "}
                <a
                  className="text-blue-600 underline"
                  href="mailto:arionstern@ufl.edu"
                >
                  arionstern@ufl.edu
                </a>
              </div>

              <div className="mt-1 text-sm text-zinc-900">
                GitHub:{" "}
                <a
                  className="text-blue-600 underline"
                  href="https://github.com/arionstern"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/arionstern
                </a>
              </div>

              <div className="mt-1 text-sm text-zinc-900">
                LinkedIn:{" "}
                <a
                  className="text-blue-600 underline"
                  href="https://www.linkedin.com/in/arion-stern-169173299/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/arion-stern
                </a>
              </div>
            </div>
          






          </div>

          <div className="mt-10">
            <div className="text-lg font-semibold text-zinc-900">
              Browse the portfolio
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {quickLinks.map((l) => (
                <Card key={l.href} title={l.title} desc={l.desc} href={l.href} />
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-8 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} Arion Stern
        </footer>
      </section>
    </main>
  );
}
